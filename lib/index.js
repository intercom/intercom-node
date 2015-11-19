export Client from './client';
export User from './user';

import crypto from 'crypto';

export class SecureMode {
  static userHash(params) {
    let secretKey = params.secretKey;
    let identifier = params.identifier;
    if (!secretKey) {
      throw new Error('secretKey must be provided');
    }
    if (!identifier) {
      throw new Error('identifier must be provided');
    }
    return crypto.createHmac('sha256', secretKey).update(identifier).digest('hex');
  }
}
