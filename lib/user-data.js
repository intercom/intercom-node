import { IdentityVerification } from './index';
import htmlencode from 'htmlencode';

export default class UserData {
  constructor(settings) {
    this.loggedOut = !settings.user_id && !settings.email;

    if (!settings.app_id) {
      throw new Error('You must provide an app_id in your Intercom settings');
    }
    if (!this.loggedOut && !settings.verificationSecret) {
      throw new Error('You must provide your verification secret in your Intercom settings');
    }

    this.settings = settings;
  }
  json() {
    const verificationSecret = this.getVerificationSecret();
    const identifier = this.getIdentifier();
    if (this.settings.user_hash === undefined) {
      this.setUserHash(verificationSecret, identifier);
    }
    return this.escapedSettings(this.settings);
  }
  getVerificationSecret() {
    const { verificationSecret } = this.settings;
    delete this.settings.verificationSecret;
    return verificationSecret;
  }
  getIdentifier() {
    if (this.settings.user_id) {
      return this.settings.user_id.toString();
    } else {
      return this.settings.email;
    }
  }
  setUserHash(verificationSecret, identifier) {
    if (this.loggedOut) {
      return;
    }

    const userHash = IdentityVerification.userHash({
      secretKey: verificationSecret,
      identifier
    });

    this.settings.user_hash = userHash;
  }
  escapedSettings(settings) {
    const intercomSettings = {};
    Object.keys(settings).map(key => {
      if (typeof settings[key] === 'object' && settings[key] !== null) {
        intercomSettings[key] = this.escapedSettings(settings[key]);
      } else {
        const escapedKey = this.escapeString(key);
        const value = this.escapeString(settings[key]);
        intercomSettings[escapedKey] = value;
      }
    });
    return intercomSettings;
  }
  escapeString(string) {
    if (typeof string === 'string') {
      string = htmlencode.htmlEncode(string).replace(/\&quot;/gi, '\\"');
    }
    return string;
  }
}
