declare class JwtWebToken {
    private secretKey;
    constructor(secretKey: string);
    sign(payload: object, expiresIn: string): string;
    verify(token: string): object | string;
}
export { JwtWebToken };
