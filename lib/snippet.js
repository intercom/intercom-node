import { IdentityVerification } from './index';
import htmlencode from 'htmlencode';

export default class Snippet {
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
  create() {
    const verificationSecret = this.getVerificationSecret();
    const identifier = this.getIdentifier();
    this.setUserHash(verificationSecret, identifier);
    return this.generateSnippetHTML();
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
  generateSnippetHTML() {
    return `
<script>
  window.intercomSettings = {
    ${this.settingsToString(this.settings)}
  };
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${this.settings.app_id}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
    `;
  }
  settingsToString(settings) {
    const intercomSettings = [];
    Object.keys(settings).map(key => {
      if (typeof settings[key] === 'object' && settings[key] !== null) {
        intercomSettings.push(`${key}: { ${this.settingsToString(settings[key])} }`);
      } else {
        const escapedKey = this.escapeString(key);
        const value = this.escapeString(settings[key]);
        if (typeof settings[key] === 'string') {
          intercomSettings.push(`${escapedKey}: "${value}"`);
        } else {
          intercomSettings.push(`${escapedKey}: ${value}`);
        }
      }
    });
    return intercomSettings.join(', ');
  }
  escapeString(string) {
    if (typeof string === 'string') {
      string = htmlencode.htmlEncode(string).replace(/\&quot;/gi, '\\"');
    }
    return string;
  }
}
