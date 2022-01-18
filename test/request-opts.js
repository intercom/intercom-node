"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
var sinon_1 = (0, tslib_1.__importDefault)(require("sinon"));
describe('request-opts', function () {
    var _this = this;
    it('should be able to change request options', function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins/baz').reply(200, {});
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    }).useRequestOpts({
                        proxy: false,
                    });
                    return [4 /*yield*/, client.admins.find({ id: 'baz' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    assert_1.default.deepStrictEqual(client.requestOpts, {
                        baseURL: 'https://api.intercom.io',
                        proxy: false,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to change request baseURL option', function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('http://local.test-server.com').get('/admins/baz').reply(200, {});
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    }).useRequestOpts({
                        baseURL: 'http://local.test-server.com',
                    });
                    return [4 /*yield*/, client.admins.find({ id: 'baz' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to change request options merging in headers', function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
        var customHeaderCheck, userAgentHeaderCheck, acceptHeaderCheck, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customHeaderCheck = sinon_1.default.stub().returns(true);
                    userAgentHeaderCheck = sinon_1.default.stub().returns(true);
                    acceptHeaderCheck = sinon_1.default.stub().returns(true);
                    (0, nock_1.default)('https://api.intercom.io', {
                        reqheaders: {
                            'x-intercom-header': customHeaderCheck,
                            'User-Agent': userAgentHeaderCheck,
                            Accept: acceptHeaderCheck,
                        },
                    })
                        .get('/admins/baz')
                        .reply(200, {});
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    }).useRequestOpts({
                        headers: {
                            common: {
                                Accept: 'text/plain',
                                'x-intercom-header': 'bar',
                            },
                        },
                    });
                    return [4 /*yield*/, client.admins.find({ id: 'baz' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    // Should always have a user-agent
                    sinon_1.default.assert.calledOnce(userAgentHeaderCheck);
                    sinon_1.default.assert.calledWithMatch(userAgentHeaderCheck, sinon_1.default.match.string);
                    // Shouldn't allow accept header to be overriden
                    sinon_1.default.assert.calledOnce(acceptHeaderCheck);
                    sinon_1.default.assert.calledWithExactly(acceptHeaderCheck, 'application/json');
                    // Should include custom header
                    sinon_1.default.assert.calledOnce(customHeaderCheck);
                    sinon_1.default.assert.calledWithExactly(customHeaderCheck, 'bar');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('base-url', function () {
    var _this = this;
    it('should be able to change base url (using old .usebaseURL method)', function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('http://local.test-server.com').get('/admins').reply(200, {});
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    }).usebaseURL('http://local.test-server.com');
                    return [4 /*yield*/, client.admins.list()];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=request-opts.js.map
