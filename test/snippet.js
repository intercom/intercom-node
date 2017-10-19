import Snippet from '../lib/snippet';
import assert from 'assert';

describe('snippet', () => {
  it('should be able to grab the verification secret', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.getVerificationSecret(), 'abc123');
  });

  it('should grab the user_id as the identifier', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'peter@intercom.io'
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.getIdentifier(), 1);
  });

  it('should grab the email as the identifier if no user_id', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      email: 'peter@intercom.io'
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.getIdentifier(), 'peter@intercom.io');
  });

  it('should throw an error if there\'s no verification secret', () => {
    const settings = {
      app_id: 'xyz789',
      user_id: 1
    };
    assert.throws(() => new Snippet(settings), Error);
  });

  it('should error if there\'s no app_id', () => {
    const settings = {
      verificationSecret: 'abc123',
      user_id: 1
    };
    assert.throws(() => new Snippet(settings), Error);
  });

  it('should return the logged out snippet if no identifier', () => {
    const settings = {
      app_id: 'xyz789'
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.settingsToString(settings), 'app_id: "xyz789"');
  });

  it('should escape bad stuff', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      email: 'peter@"<script>alert(1)</script>intercom.io'
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.settingsToString(settings), 'verificationSecret: "abc123", app_id: "xyz789", email: "peter@\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io"');
  });

  it('should not include the verification secret in the snippet html', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'peter@intercom.io',
      name: 'Peter McKenna',
      company: {
        id: 123,
        name: 'Intercom'
      }
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.create().indexOf(settings.verificationSecret), -1);
  });

  it('should return the snippet html', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'peter@intercom.io',
      name: 'Peter McKenna',
      company: {
        id: 123,
        name: 'Intercom'
      }
    };
    const snippet = new Snippet(settings);
    assert.equal(snippet.create(), `
<script>
  window.intercomSettings = {
    app_id: "xyz789", user_id: 1, email: "peter@intercom.io", name: "Peter McKenna", company: { id: 123, name: "Intercom" }, user_hash: "f02877f24c9dd37542268a28627ebaf2e07d0d114d9482abcdc20f60874b40b3"
  };
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/xyz789';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
    `);
  });
});
