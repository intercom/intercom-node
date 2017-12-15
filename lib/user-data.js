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
    this.setUserHash();
    return this.escapedSettings(this.settings);
  }
  getVerificationSecret() {
    const { verificationSecret } = this.settings;
    delete this.settings.verificationSecret;
    return verificationSecret;
  }
  setUserHash() {
    if (this.loggedOut || this.settings.user_hash !== undefined) {
      return;
    }

    const { verificationSecret } = this.settings;
    delete this.settings.verificationSecret;
    const identifier = this.settings.user_id ? this.settings.user_id.toString() : this.settings.email;


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
