import UserData from '../lib/user-data';
import { IdentityVerification } from '../lib/index';
import assert from 'assert';
import sinon from 'sinon';

describe('userData', () => {
  it('should be able to grab the verification secret', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1
    };
    const userData = new UserData(settings);
    assert.equal(userData.getVerificationSecret(), 'abc123');
  });

  it('should grab the user_id as the identifier', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io'
    };
    const userData = new UserData(settings);
    const userHash = sinon.spy(IdentityVerification, 'userHash');
    userData.json();
    userHash.restore();
    sinon.assert.calledWith(userHash, {
      secretKey: 'abc123',
      identifier: '1'
    });
  });

  it('should grab the email as the identifier if no user_id', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      email: 'jess@intercom.io'
    };
    const userData = new UserData(settings);
    const userHash = sinon.spy(IdentityVerification, 'userHash');
    userData.json();
    userHash.restore();
    sinon.assert.calledWith(userHash, {
      secretKey: 'abc123',
      identifier: 'jess@intercom.io'
    });
  });

  it('should throw an error if there\'s no verification secret', () => {
    const settings = {
      app_id: 'xyz789',
      user_id: 1
    };
    assert.throws(() => new UserData(settings), Error);
  });

  it('should error if there\'s no app_id', () => {
    const settings = {
      verificationSecret: 'abc123',
      user_id: 1
    };
    assert.throws(() => new UserData(settings), Error);
  });

  it('should return the logged out userData if no identifier', () => {
    const settings = {
      app_id: 'xyz789'
    };
    const userData = new UserData(settings);
    assert.equal(JSON.stringify(userData.json()), JSON.stringify({ app_id: 'xyz789'}));
  });

  it('should escape bad stuff in values', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      email: 'jess@"<script>alert(1)</script>intercom.io'
    };
    const userData = new UserData(settings);
    assert.equal(userData.json().email, 'jess@\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io');
  });

  it('should escape bad stuff in object keys', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: '1'
    };
    settings['<script>doSomethingEvil();</script>'] = 'jess@"<script>alert(1)</script>intercom.io';
    const userData = new UserData(settings);
    const result = userData.json();
    assert.equal(result['&lt;script&gt;doSomethingEvil();&lt;/script&gt;'], 'jess@\\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io');
  });

  it('should escape bad stuff in next object keys and values', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: '1'
    };
    settings.maliciousSettings = {
      '<script>doSomethingEvil();</script>': 'jess@"<script>alert(1)</script>intercom.io'
    };
    const userData = new UserData(settings);
    const result = userData.json();
    assert.equal(result.maliciousSettings['&lt;script&gt;doSomethingEvil();&lt;/script&gt;'], 'jess@\\"&lt;script&gt;alert(1)&lt;/script&gt;intercom.io');
  });

  it('should not include the verification secret in the userData', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io',
      name: 'Jess OB',
      company: {
        id: 123,
        name: 'Intercom'
      }
    };
    const userData = new UserData(settings);
    const result = userData.json();
    assert.equal(Object.keys(result).indexOf(settings.verificationSecret), -1);
  });

  it('should skip setUserHash if user_hash is already defined', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1
    };
    const userData = new UserData(settings);
    const userHash = sinon.spy(IdentityVerification, 'userHash');
    userData.json();
    userData.json();
    userHash.restore();
    sinon.assert.calledOnce(userHash);
  });

  it('should return the userData', () => {
    const settings = {
      verificationSecret: 'abc123',
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io',
      name: 'Jess OB',
      company: {
        id: 123,
        name: 'Intercom'
      }
    };
    const userData = new UserData(settings);
    assert.equal(JSON.stringify(userData.json()), JSON.stringify({
      app_id: 'xyz789',
      user_id: 1,
      email: 'jess@intercom.io',
      name: 'Jess OB',
      company: {
        id: 123,
        name: 'Intercom'
      },
      user_hash: 'f02877f24c9dd37542268a28627ebaf2e07d0d114d9482abcdc20f60874b40b3'
    }));
  });
});
