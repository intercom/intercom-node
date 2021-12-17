<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe('admins', function () {
    it('should find admins by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins/baz').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.find({ id: 'baz' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should set an admin away', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, requestData, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = 'baz';
                    requestData = {
                        "away_mode_enabled": true,
                        "away_mode_reassign": false
                    };
                    (0, nock_1.default)('https://api.intercom.io').put("/admins/".concat(id, "/away"), requestData).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.away({ adminId: id, enableAwayMode: true, enableReassignMode: false })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all activites logs', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var date, dateInUnix, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = new Date('Fri, 17 Dec 2021 18:02:18 GMT');
                    dateInUnix = '1639764138';
                    (0, nock_1.default)('https://api.intercom.io').get("/admins/activity_logs?created_at_after=".concat(dateInUnix, "&created_at_before=").concat(dateInUnix)).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.listAllActivityLogs({ before: date, after: date })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.list()];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
=======
// TO-DO: Rethink testing framework
// Workaround for old gulp-mocha to use async functions
import '@babel/polyfill';

import assert from 'assert';
import { Client } from '../lib';
import nock from 'nock';

describe('admins', () => {
    it('should be listed', async () => {
        nock('https://api.intercom.io').get('/admins').reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.admins.list();

        assert.deepStrictEqual({}, response);
    });
    it('should find current admin', async () => {
        nock('https://api.intercom.io').get('/me').reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.admins.me();

        assert.deepStrictEqual({}, response);
    });
    it('should find admins by id', async () => {
        nock('https://api.intercom.io').get('/admins/baz').reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.admins.find('baz');

        assert.deepStrictEqual({}, response);
    });
    it('should update admin away mode and reassign settings', async () => {
        const params = { away_mode_enabled: true, away_mode_reassign: false };
        nock('https://api.intercom.io')
            .put('/admins/baz/away', params)
            .reply(200, {});
        const client = new Client('foo', 'bar');
        const response = await client.admins.away('baz', params);

        assert.deepStrictEqual({}, response);
    });
>>>>>>> f0adc623c95754bf3d65543f80aa797a3b11384d
});

//# sourceMappingURL=admin.js.map
