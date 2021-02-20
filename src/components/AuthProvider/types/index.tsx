import { IUserRegistration } from "../../../services/types";

export interface IAuthState {
    token: string,
    userId: number,
    userCpf: string,
    checked: boolean,
}

export interface IAuthContext {
    authState: IAuthState,
    signIn(cpf: string, password: string): Promise<string|null>,
    signUpAndSignIn(user: Partial<IUserRegistration>): Promise<string|null>,
    isLoggedIn(): boolean,
}
