import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('teams', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/teams').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.teams.list().then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
  it('should find teams by id', done => {
    nock('https://api.intercom.io').get('/teams/baz').reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.teams.find('baz').then(r => {
      assert.equal(200, r.statusCode);
      done();
    });
  });
});
