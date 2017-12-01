import crypto from 'crypto';
import aes from 'node-aes-gcm';
import {IdentityVerification} from './';

export default class EncryptedMode {
  static payload(secret, iv, payload, options = {}) {
    const key = crypto.createHash('sha256').update(secret).digest();
    if (options.identityVerification) {
      payload.user_hash = IdentityVerification.userHash({
        secretKey: secret,
        identifier: payload.email || payload.user_id
      });
    }
    const bufferPayload = Buffer.from(JSON.stringify(payload), 'utf-8');
    const result = aes.encrypt(key, iv, bufferPayload, new Buffer(0));
    return Buffer.concat([iv, result.ciphertext, result.auth_tag]).toString('base64');
  }
}
