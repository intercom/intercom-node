"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe('clients', function () {
    it('should resolve promises', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins').reply(200, {});
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    return [4 /*yield*/, client.admins.list()];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reject promises', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, err_1;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io')
                        .get('/admins')
                        .reply(200, { type: 'error.list' });
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.admins.list()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    assert_1.default.deepStrictEqual({ type: 'error.list' }, err_1.body);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should reject promises with error objects', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, err_2;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io')
                        .get('/admins')
                        .reply(200, { type: 'error.list' });
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.admins.list()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    assert_1.default.equal(true, err_2 instanceof Error);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should construct with two fields', function () {
        var client = new lib_1.Client({
            usernameAuth: { username: 'foo', password: 'bar' },
        });
        assert_1.default.equal('foo', client.usernamePart);
        assert_1.default.equal('bar', client.passwordPart);
    });
    it('should construct with an object', function () {
        var client = new lib_1.Client({
            apiKeyAuth: { appId: 'foo', appApiKey: 'bar' },
        });
        assert_1.default.equal('foo', client.usernamePart);
        assert_1.default.equal('bar', client.passwordPart);
    });
    it('should construct with an object containing an OAuth token', function () {
        var client = new lib_1.Client({ tokenAuth: { token: 'foo' } });
        assert_1.default.equal('foo', client.usernamePart);
        assert_1.default.equal('', client.passwordPart);
    });
    it('should throw if no credentials found', function () {
        assert_1.default.throws(function () {
            var client = new lib_1.Client({});
            console.log(client.usernamePart);
        }, /Could not construct a client with those parameters/);
    });
});

//# sourceMappingURL=client.js.map
