import { Password } from './password';

describe('Password', () => {
  it('should hash a password correctly', async () => {
    const password = 'mypassword';
    const hash = await Password.toHash(password);
    expect(hash).toMatch(/^[0-9a-f]{64}\.[0-9a-f]{16}$/);
  });

  it('should validate a correct password', async () => {
    const password = 'mypassword';
    const hash = await Password.toHash(password);
    const isValid = await Password.compare(hash, password);
    expect(isValid).toBe(true);
  });

  it('should not validate an incorrect password', async () => {
    const password = 'mypassword';
    const hash = await Password.toHash(password);
    const isValid = await Password.compare(hash, 'wrongpassword');
    expect(isValid).toBe(false);
  });

  it('should hash two different passwords to different hashes', async () => {
    const password1 = 'mypassword';
    const password2 = 'myotherpassword';
    const hash1 = await Password.toHash(password1);
    const hash2 = await Password.toHash(password2);
    expect(hash1).not.toEqual(hash2);
  });

  it('should throw an error with an invalid hash format', async () => {
    const isValid = await Password.compare('invalidhash', 'password');
    expect(isValid).toBe(false);
  });
});