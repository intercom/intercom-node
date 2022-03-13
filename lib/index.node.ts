import crypto from 'crypto';

export class IdentityVerification {
    static userHash({
        secretKey,
        identifier,
    }: {
        secretKey?: string;
        identifier?: string;
    }) {
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

export { default as Client } from './client';

export * from './index';
