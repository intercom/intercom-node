import assert from 'assert';
import { Client } from '../../lib';
import nock from 'nock';
import sinon from 'sinon';
import { HeadersDefaults } from 'axios';

describe('request-opts', function () {
    it('should be able to change request options', async () => {
        nock('https://api.intercom.io').get('/admins/baz').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        }).useRequestOpts({
            proxy: false,
        });

        const response = await client.admins.find({ id: 'baz' });

        assert.deepStrictEqual({}, response);
        assert.deepStrictEqual(client.requestOpts, {
            baseURL: 'https://api.intercom.io',
            proxy: false,
        });
    });
    it('should be able to change request baseURL option', async () => {
        nock('http://local.test-server.com').get('/admins/baz').reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        }).useRequestOpts({
            baseURL: 'http://local.test-server.com',
        });

        const response = await client.admins.find({ id: 'baz' });

        assert.deepStrictEqual({}, response);
    });
    it('should be able to change request options merging in headers', async () => {
        const customHeaderCheck = sinon.stub().returns(true);
        const userAgentHeaderCheck = sinon.stub().returns(true);
        const acceptHeaderCheck = sinon.stub().returns(true);

        nock('https://api.intercom.io', {
            reqheaders: {
                'x-intercom-header': customHeaderCheck,
                'User-Agent': userAgentHeaderCheck,
                Accept: acceptHeaderCheck,
            },
        })
            .get('/admins/baz')
            .reply(200, {});
        const client = new Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        }).useRequestOpts({
            headers: {
                common: {
                    Accept: 'text/plain',
                    'x-intercom-header': 'bar',
                },
            } as unknown as HeadersDefaults,
        });

        const response = await client.admins.find({ id: 'baz' });

        assert.deepStrictEqual({}, response);
        // Should always have a user-agent
        sinon.assert.calledOnce(userAgentHeaderCheck);
        sinon.assert.calledWithMatch(userAgentHeaderCheck, sinon.match.string);
        // Shouldn't allow accept header to be overriden
        sinon.assert.calledOnce(acceptHeaderCheck);
        sinon.assert.calledWithExactly(acceptHeaderCheck, 'application/json');
        // Should include custom header
        sinon.assert.calledOnce(customHeaderCheck);
        sinon.assert.calledWithExactly(customHeaderCheck, 'bar');
    });
});
