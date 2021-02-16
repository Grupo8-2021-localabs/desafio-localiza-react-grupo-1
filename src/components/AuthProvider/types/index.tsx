export interface IAuthState {
    token: string,
    userId: number,
}

export interface IAutoContext {
    authState: IAuthState,
    signIn(userId: string, token: string): Promise<string|null>,
}
