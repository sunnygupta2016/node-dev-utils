declare function IsEqualArrays(a: [any] | [], b: [any] | []): boolean;
declare function getCountryFromCode(code: string): string;
declare class OTPGenerator {
    private static readonly NUMERIC;
    private static readonly CHARACTERS;
    private static readonly ALPHANUMERIC;
    private generateRandomString;
    generateNumericOTP(length: number): string;
    generateCharacterOTP(length: number): string;
    generateAlphanumericOTP(length: number): string;
}
declare class CryptoService {
    private encryptionKey;
    private Iv;
    constructor(encryptionKey: string, Iv: string);
    encrypt(text: string): string;
    decrypt(cipherText: string): string;
}
export { IsEqualArrays, getCountryFromCode, OTPGenerator, CryptoService };
