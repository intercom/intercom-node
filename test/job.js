import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('jobs', () => {
  it('should find jobs by id', done => {
    const jobId = 'job_id';
    nock('https://api.intercom.io').get(`/jobs/${jobId}`).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.jobs.find({id: jobId}).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find job\'s errors by id', done => {
    const jobId = 'job_id';
    nock('https://api.intercom.io').get(`/jobs/${jobId}/error`).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.jobs.error({id: jobId}).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
});
