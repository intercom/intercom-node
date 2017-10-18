import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('visitors', () => {
  it('should be updated', done => {
    nock('https://api.intercom.io').post('/visitors', { id: 'baz', email: 'foo@intercom.io' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.visitors.update({ id: 'baz', email: 'foo@intercom.io' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find by user_id', done => {
    nock('https://api.intercom.io').get('/visitors').query({ user_id: '1234-5678-9876' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.visitors.find({ user_id: '1234-5678-9876' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find by id', done => {
    nock('https://api.intercom.io').get('/visitors/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.visitors.find({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('delete by id', done => {
    nock('https://api.intercom.io').delete('/visitors/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.visitors.delete({ id: 'baz' }).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should convert to user', done => {
    const conversionObject = {
      visitor: { user_id: 'baz' },
      user: { email: 'bang' },
      type: 'user'
    };
    nock('https://api.intercom.io').post('/visitors/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.visitors.convert(conversionObject).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should convert to lead', done => {
    const conversionObject = {
      visitor: { user_id: 'baz' },
      type: 'lead'
    };
    nock('https://api.intercom.io').post('/visitors/convert', conversionObject).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.visitors.convert(conversionObject).then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
