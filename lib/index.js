export { default as Client } from './client';
export { default as User } from './user';
export { default as Snippet } from './snippet';
export { default as UserData } from './user-data';

import crypto from 'crypto';

export class IdentityVerification {
  static userHash(params) {
    let secretKey = params.secretKey;
    let identifier = params.identifier;
    if (!secretKey) {
      throw new Error('secretKey must be provided');
    }
    if (!identifier) {
      throw new Error('identifier must be provided');
    }
    return crypto
      .createHmac('sha256', secretKey)
      .update(identifier)
      .digest('hex');
  }
}
