import assert from 'assert';
import {EncryptedMode} from '../lib';

describe('encrypted mode', () => {
  it('calculates the payload correctly', done => {
    const expected = 'AAAAAAAAAAAAAAAA3dhRww8Q0+iDwrR/+EwhpcpZq7fKDE85W7FOYoo7KoPFnn2D47TttA==';
    const iv = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const payload = {email: 'test@foo.com'};
    const actual = EncryptedMode.payload('abc123', iv, payload);
    assert.equal(expected, actual);
    done();
  });

  it('calculates the payload correctly', done => {
    const expected = 'AAAAAAAAAAAAAAAA3dhRww8Q0+iDwrR/+EwhpcpZq7fKDE9oOsuwgEW7lH0zBMYKHVHr5r67877CANye3BCCyBoKVrOkxXR5htC7oUAaAfhCrfHUeWrjS+OW3GTI6b8/sZcrWJ0KlTyk0U07TXlOfALoXuOSruEiXrMtMkQzD8vO4J8=';
    const iv = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const payload = {email: 'test@foo.com'};
    const actual = EncryptedMode.payload('abc123', iv, payload, { identityVerification: true });
    assert.equal(expected, actual);
    done();
  });
});
