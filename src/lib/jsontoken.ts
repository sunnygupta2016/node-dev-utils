import jwt from 'jsonwebtoken';

class JwtWebToken {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  sign(payload: object, expiresIn: string): string {
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  verify(token: string): object | string {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (err) {
      return 'Invalid token';
    }
  }
}
export { JwtWebToken }