import {
  createContext, FC, useContext, useEffect, useState,
} from 'react';
import { IAuthContext, IAuthState } from './types';
import { login, registerUser } from '../../services/api';

const userPath = '@localiza-academy:userId';
const tokenPath = '@localiza-academy:token';
const cpfPath = '@localiza-academy:userCpf';
const initialAuthState: IAuthState = {
  token: undefined,
  userId: undefined,
  userCpf: undefined,
  checked: false,
};

const AuthContext = createContext<IAuthContext | null>(null);

const getLocallyStoredCredentials = () => {
  const storedUser = Number(localStorage.getItem(userPath));
  const storedToken = localStorage.getItem(tokenPath);
  const storedCpf = localStorage.getItem(cpfPath)
  return {
    storedUser,
    storedToken,
    storedCpf
  };
};

const storeCredentialsLocally = ({ userId, token, userCpf}) => {
  localStorage.setItem(userPath, String(userId));
  localStorage.setItem(tokenPath, token);
  localStorage.setItem(cpfPath, userCpf);
};

const AuthProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    const { storedUser, storedToken, storedCpf } = getLocallyStoredCredentials();

    if (storedUser !== authState.userId
      || storedToken !== authState.token
      || storedCpf !== authState.userCpf) {
      setAuthState({
        token: storedToken,
        userId: storedUser,
        userCpf: storedCpf,
        checked: true
      });
    }
  }, [authState]);

  const signIn = async (cpf, password) => {
    try {
      const data = await login(cpf, password);
      const { id: userId, token, cpf: userCpf } = data.data;
      setAuthState({
        userId,
        token,
        userCpf,
        checked: true,
      });
      storeCredentialsLocally({ userId, token, userCpf });
      return null;
    } catch (e) {
      const isAuthError = /401/.test(e.message);
      if (isAuthError) {
        return 'CPF ou password incorretos';
      }
      return e.message;
    }
  };

  const signUpAndSignIn = async (data) => {
    const now = new Date();
    const mockedPartialPayload = {
      birthay: now.toISOString(),
      cep: 'cep',
      logradouro: 'rua',
      number: 100,
      city: 'Belo Horizonte',
      complement: 'complemento',
      state: "MG"
    }
    const payload = {
      name: data.name,
      password: data.password,
      cpf: data.cpf,
      ...mockedPartialPayload,
    };
    try {
      await registerUser(payload);
      await signIn(payload.cpf, payload.password);
      return null;
    } catch (e) {
      return e.message;
    }
  };

  const isLoggedIn = () => Boolean(
    authState.token
    && authState.userId
    && authState.userCpf
  )

  return (
    <AuthContext.Provider value={{
      authState, signIn, signUpAndSignIn, isLoggedIn
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => useContext(AuthContext);

export { AuthProvider as default, useAuth };
