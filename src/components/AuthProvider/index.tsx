import {
  createContext, FC, useContext, useEffect, useState,
} from 'react';
import { IAutoContext, IAuthState } from './types';
import { login } from '../../services/api';

const userPath = '@localiza-academy:userId';
const tokenPath = '@localiza-academy:token';
const initialAuthState: IAuthState = {
  token: undefined,
  userId: undefined,
};

const AuthContext = createContext<IAutoContext | null>(null);

const getLocallyStoredCredentials = () => {
  const storedUser = Number(localStorage.getItem(userPath));
  const storedToken = localStorage.getItem(tokenPath);
  return {
    storedUser,
    storedToken,
  };
};

const storeCredentialsLocally = ({ userId, token }) => {
  localStorage.setItem(userPath, String(userId));
  localStorage.setItem(tokenPath, token);
};

const AuthProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    const { storedUser, storedToken } = getLocallyStoredCredentials();

    if (storedUser !== authState.userId || storedToken !== authState.token) {
      setAuthState({
        token: storedToken,
        userId: storedUser,
      });
    }
  }, [authState]);

  const signIn = async (cpf, password) => {
    try {
      const data = await login(cpf, password);
      const { id: userId, token } = data.data;
      setAuthState({
        userId,
        token,
      });
      storeCredentialsLocally({ userId, token });
      return null;
    } catch (e) {
      const isAuthError = /401/.test(e.message);
      if (isAuthError) {
        return 'CPF ou password incorretos';
      }
      return e.message;
    }
  };

  return (
    <AuthContext.Provider value={{
      authState, signIn,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAutoContext => useContext(AuthContext);

export { AuthProvider as default, useAuth };
