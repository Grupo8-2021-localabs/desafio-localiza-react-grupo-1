import { UserRegistration } from "../../../services/types";

export interface IAuthState {
    token: string,
    userId: number,
}

export interface IAuthContext {
    authState: IAuthState,
    signIn(cpf: string, password: string): Promise<string|null>,
    signUpAndSignIn(user: Partial<UserRegistration>): Promise<string|null>,
}
