import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('errors', () => {
  describe('with promises', () => {
    it('should fail with ESOCKETTIMEDOUT error', () => {

      const socketErr = new Error('Socket timeout');
      socketErr.code = 'ESOCKETTIMEDOUT';

      nock('https://api.intercom.io').replyContentLength().get('/admins').replyWithError(socketErr);
      const client = new Client('foo', 'bar').usePromises();
      return client.admins.list().then(r => {
        assert.strictEqual(r, null, 'Valid response');
      }).catch(err => {
        assert.deepStrictEqual(err, socketErr);
      });
    });
    it('should fail with unauthorized (401) error', () => {
      nock('https://api.intercom.io').replyContentLength().get('/admins').reply(401,
        {
          type: 'error.list',
          request_id: 'b2i3ri5909msvfqskol0',
          errors: [
            {
              code: 'token_unauthorized',
              message: 'Not authorized to access resource'
            }
          ]
        },
        {
          'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
          'X-RateLimit-Limit': '83',
          'X-RateLimit-Remaining': '27',
          'X-RateLimit-Reset': '1522850540',
          'X-Request-Id': 'b2i3ri5909msvfqskol0',
          'X-Runtime': '0.037708'
        }
      );
      const client = new Client('foo', 'bar').usePromises();
      return client.admins.list().then(r => {
        assert.strictEqual(r, null, 'Valid response');
      }).catch(err => {
        assert.strictEqual(err.statusCode, 401);
        assert.strictEqual(err.body.request_id, 'b2i3ri5909msvfqskol0');
        assert.deepStrictEqual(err.body.errors, [{ code: 'token_unauthorized', message: 'Not authorized to access resource' }]);
        assert.deepStrictEqual(err.message, 'Not authorized to access resource');
        assert.strictEqual(err.headers['x-request-id'], 'b2i3ri5909msvfqskol0');
      });
    });
    it('should fail with too many requests (429) error', () => {
      nock('https://api.intercom.io').replyContentLength().get('/me').reply(429,
        {
          type: 'error.list',
          request_id: 'b2i3mhcboc6pcbe33q80',
          errors: [
            {
              code: 'rate_limit_exceeded',
              message: 'Exceeded rate limit of 83 in 10_seconds'
            }
          ]
        },
        {
          'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
          'X-RateLimit-Limit': '83',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': '1522849880',
          'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
          'X-Runtime': '0.037708'
        }
      );
      const client = new Client('foo', 'bar').usePromises();
      return client.admins.me().then(r => {
        assert.strictEqual(r, null, 'Valid response');
      }).catch(err => {
        assert.strictEqual(err.statusCode, 429);
        assert.strictEqual(err.body.request_id, 'b2i3mhcboc6pcbe33q80');
        assert.deepStrictEqual(err.body.errors, [{ code: 'rate_limit_exceeded', message: 'Exceeded rate limit of 83 in 10_seconds' }]);
        assert.deepStrictEqual(err.message, 'Exceeded rate limit of 83 in 10_seconds');
        assert.strictEqual(err.headers['x-request-id'], 'b2i3mhcboc6pcbe33q80');
        assert.strictEqual(err.headers['x-ratelimit-reset'], '1522849880');
      });
    });
  });

  describe('with callback', () => {
    describe('with 1 arg', () => {
      it('should fail with ESOCKETTIMEDOUT error', done => {

        const socketErr = new Error('Socket timeout');
        socketErr.code = 'ESOCKETTIMEDOUT';

        nock('https://api.intercom.io').replyContentLength().get('/admins').replyWithError(socketErr);
        const client = new Client('foo', 'bar');
        client.admins.list(r => {
          assert.strictEqual(r, null, 'Valid response');

          done();
        });
      });
      it('should fail with unauthorized (401) error', done => {
        nock('https://api.intercom.io').replyContentLength().get('/admins').reply(401,
          {
            type: 'error.list',
            request_id: 'b2i3ri5909msvfqskol0',
            errors: [
              {
                code: 'token_unauthorized',
                message: 'Not authorized to access resource'
              }
            ]
          },
          {
            'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
            'X-RateLimit-Limit': '83',
            'X-RateLimit-Remaining': '27',
            'X-RateLimit-Reset': '1522850540',
            'X-Request-Id': 'b2i3ri5909msvfqskol0',
            'X-Runtime': '0.037708'
          }
        );
        const client = new Client('foo', 'bar');
        client.admins.list(r => {
          assert.strictEqual(r.statusCode, 401);
          assert.strictEqual(r.body.type, 'error.list');
          assert.strictEqual(r.body.request_id, 'b2i3ri5909msvfqskol0');
          assert.ok(Array.isArray(r.body.errors));

          done();
        });
      });
      it('should fail with too many requests (429) error', done => {
        nock('https://api.intercom.io').replyContentLength().get('/me').reply(429,
          {
            type: 'error.list',
            request_id: 'b2i3mhcboc6pcbe33q80',
            errors: [
              {
                code: 'rate_limit_exceeded',
                message: 'Exceeded rate limit of 83 in 10_seconds'
              }
            ]
          },
          {
            'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
            'X-RateLimit-Limit': '83',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': '1522849880',
            'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
            'X-Runtime': '0.037708'
          }
        );
        const client = new Client('foo', 'bar');
        client.admins.me(r => {
          assert.strictEqual(r.statusCode, 429);
          assert.strictEqual(r.body.type, 'error.list');
          assert.strictEqual(r.body.request_id, 'b2i3mhcboc6pcbe33q80');
          assert.ok(Array.isArray(r.body.errors));

          done();
        });
      });
    });
    describe('with 2 args', () => {
      it('should fail with ESOCKETTIMEDOUT error', done => {

        const socketErr = new Error('Socket timeout');
        socketErr.code = 'ESOCKETTIMEDOUT';

        nock('https://api.intercom.io').replyContentLength().get('/admins').replyWithError(socketErr);
        const client = new Client('foo', 'bar');
        client.admins.list((err, r) => {
          assert.strictEqual(r, null, 'Valid response');

          assert.deepStrictEqual(err, socketErr);

          done();
        });
      });
      it('should fail with unauthorized (401) error', done => {
        nock('https://api.intercom.io').replyContentLength().get('/admins').reply(401,
          {
            type: 'error.list',
            request_id: 'b2i3ri5909msvfqskol0',
            errors: [
              {
                code: 'token_unauthorized',
                message: 'Not authorized to access resource'
              }
            ]
          },
          {
            'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
            'X-RateLimit-Limit': '83',
            'X-RateLimit-Remaining': '27',
            'X-RateLimit-Reset': '1522850540',
            'X-Request-Id': 'b2i3ri5909msvfqskol0',
            'X-Runtime': '0.037708'
          }
        );
        const client = new Client('foo', 'bar');
        client.admins.list((err, r) => {
          assert.strictEqual(r, null, 'Valid response');

          assert.strictEqual(err.statusCode, 401);
          assert.strictEqual(err.body.request_id, 'b2i3ri5909msvfqskol0');
          assert.deepStrictEqual(err.body.errors, [{ code: 'token_unauthorized', message: 'Not authorized to access resource' }]);
          assert.deepStrictEqual(err.message, 'Not authorized to access resource');
          assert.strictEqual(err.headers['x-request-id'], 'b2i3ri5909msvfqskol0');

          done();
        });
      });
      it('should fail with too many requests (429) error', done => {
        nock('https://api.intercom.io').replyContentLength().get('/me').reply(429,
          {
            type: 'error.list',
            request_id: 'b2i3mhcboc6pcbe33q80',
            errors: [
              {
                code: 'rate_limit_exceeded',
                message: 'Exceeded rate limit of 83 in 10_seconds'
              }
            ]
          },
          {
            'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
            'X-RateLimit-Limit': '83',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': '1522849880',
            'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
            'X-Runtime': '0.037708'
          }
        );
        const client = new Client('foo', 'bar');
        client.admins.me((err, r) => {
          assert.strictEqual(r, null, 'Valid response');

          assert.strictEqual(err.statusCode, 429);
          assert.strictEqual(err.body.request_id, 'b2i3mhcboc6pcbe33q80');
          assert.deepStrictEqual(err.body.errors, [{ code: 'rate_limit_exceeded', message: 'Exceeded rate limit of 83 in 10_seconds' }]);
          assert.deepStrictEqual(err.message, 'Exceeded rate limit of 83 in 10_seconds');
          assert.strictEqual(err.headers['x-request-id'], 'b2i3mhcboc6pcbe33q80');
          assert.strictEqual(err.headers['x-ratelimit-reset'], '1522849880');

          done();
        });
      });
    });
  });
});
