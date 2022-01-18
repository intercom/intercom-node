"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
var lib_1 = require("../lib");
describe('errors', function () {
    it('should fail with unauthorized (401) error', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response, err_1;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io')
                        .replyContentLength()
                        .get('/admins')
                        .reply(401, {
                        type: 'error.list',
                        request_id: 'b2i3ri5909msvfqskol0',
                        errors: [
                            {
                                code: 'token_unauthorized',
                                message: 'Not authorized to access resource',
                            },
                        ],
                    }, {
                        'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
                        'X-RateLimit-Limit': '83',
                        'X-RateLimit-Remaining': '27',
                        'X-RateLimit-Reset': '1522850540',
                        'X-Request-Id': 'b2i3ri5909msvfqskol0',
                        'X-Runtime': '0.037708',
                    });
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.admins.list()];
                case 2:
                    response = _a.sent();
                    assert_1.default.strictEqual(response, null, 'Valid response');
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    assert_1.default.strictEqual(err_1.statusCode, 401);
                    assert_1.default.strictEqual(err_1.body.request_id, 'b2i3ri5909msvfqskol0');
                    assert_1.default.deepStrictEqual(err_1.body.errors, [
                        {
                            code: 'token_unauthorized',
                            message: 'Not authorized to access resource',
                        },
                    ]);
                    assert_1.default.deepStrictEqual(err_1.message, 'Not authorized to access resource');
                    assert_1.default.strictEqual(err_1.headers['x-request-id'], 'b2i3ri5909msvfqskol0');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    it('should fail with too many requests (429) error', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response, err_2;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io')
                        .replyContentLength()
                        .get('/admins')
                        .reply(429, {
                        type: 'error.list',
                        request_id: 'b2i3mhcboc6pcbe33q80',
                        errors: [
                            {
                                code: 'rate_limit_exceeded',
                                message: 'Exceeded rate limit of 83 in 10_seconds',
                            },
                        ],
                    }, {
                        'X-Intercom-Version': '3736ab533ad11d88d93cdef3fcef9a98a5724229',
                        'X-RateLimit-Limit': '83',
                        'X-RateLimit-Remaining': '0',
                        'X-RateLimit-Reset': '1522849880',
                        'X-Request-Id': 'b2i3mhcboc6pcbe33q80',
                        'X-Runtime': '0.037708',
                    });
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.admins.list()];
                case 2:
                    response = _a.sent();
                    assert_1.default.strictEqual(response, null, 'Valid response');
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    assert_1.default.strictEqual(err_2.statusCode, 429);
                    assert_1.default.strictEqual(err_2.body.request_id, 'b2i3mhcboc6pcbe33q80');
                    assert_1.default.deepStrictEqual(err_2.body.errors, [
                        {
                            code: 'rate_limit_exceeded',
                            message: 'Exceeded rate limit of 83 in 10_seconds',
                        },
                    ]);
                    assert_1.default.deepStrictEqual(err_2.message, 'Exceeded rate limit of 83 in 10_seconds');
                    assert_1.default.strictEqual(err_2.headers['x-request-id'], 'b2i3mhcboc6pcbe33q80');
                    assert_1.default.strictEqual(err_2.headers['x-ratelimit-reset'], '1522849880');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=errors.js.map
