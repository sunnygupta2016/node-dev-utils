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
declare class AgeCalculator {
    protected birthDateTime: Date;
    constructor(birthDateTime: Date);
    private validateBirthDateTime;
    getAge(): number;
}
declare class ZodiacSignCalculator extends AgeCalculator {
    constructor(birthDateTime: Date);
    getZodiacSign(): string;
}
export { IsEqualArrays, getCountryFromCode, OTPGenerator, CryptoService, AgeCalculator, ZodiacSignCalculator };
