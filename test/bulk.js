import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('bulk', () => {
  it('should send bulk users', done => {
    nock('https://api.intercom.io').post('/bulk/users', {
      items: [
        {
          method: 'post',
          data_type: 'user',
          data: {
            email: 'wash@serenity.io'
          }
        },
        {
          method: 'post',
          data_type: 'user',
          data: {
            email: 'mal@serenity.io'
          }
        }
      ]
    }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.bulk([
      { create: { email: 'wash@serenity.io' }},
      { create: { email: 'mal@serenity.io'}}
    ]).then(r => {
      let reqJSON = JSON.parse(r.request.body.toString());
      assert.equal(200, r.status);
      assert.equal(undefined, reqJSON.job);
      done();
    });
  });
  it('should send bulk users with job id', done => {
    nock('https://api.intercom.io').post('/bulk/users', {
      items: [
        {
          method: 'post',
          data_type: 'user',
          data: {
            email: 'wash@serenity.io'
          }
        },
        {
          method: 'post',
          data_type: 'user',
          data: {
            email: 'mal@serenity.io'
          }
        }
      ]
    }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.users.bulkJob([
      { create: { email: 'wash@serenity.io' }},
      { create: { email: 'mal@serenity.io'}}
    ], 'jobId').then(r => {
      let reqJSON = JSON.parse(r.request.body.toString());
      assert.equal(200, r.status);
      assert.equal('jobId', reqJSON.job.id);
      done();
    });
  });
  it('should send bulk events', done => {
    nock('https://api.intercom.io').post('/bulk/events', {
      items: [
        {
          method: 'post',
          data_type: 'event',
          data: {
            foo: 'bar'
          }
        },
        {
          method: 'post',
          data_type: 'event',
          data: {
            bar: 'baz'
          }
        }
      ]
    }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.events.bulk([
      { create: { foo: 'bar' }},
      { create: { bar: 'baz'}}
    ]).then(r => {
      let reqJSON = JSON.parse(r.request.body.toString());
      assert.equal(200, r.status);
      assert.equal(undefined, reqJSON.job);
      done();
    });
  });
  it('should send bulk events with job id', done => {
    nock('https://api.intercom.io').post('/bulk/events', {
      items: [
        {
          method: 'post',
          data_type: 'event',
          data: {
            foo: 'bar'
          }
        },
        {
          method: 'post',
          data_type: 'event',
          data: {
            bar: 'baz'
          }
        }
      ]
    }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.events.bulkJob([
      { create: { foo: 'bar' }},
      { create: { bar: 'baz'}}
    ], 'jobId').then(r => {
      let reqJSON = JSON.parse(r.request.body.toString());
      assert.equal(200, r.status);
      assert.equal('jobId', reqJSON.job.id);
      done();
    });
  });
});
