"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe('clients', function () {
    it('ping', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins').reply(200, {});
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    return [4 /*yield*/, client.ping()];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('paginate', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, paginationObject, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io')
                        .get('/foo/bar/baz')
                        .query({ blue: 'red' })
                        .reply(200, { foo: 'bar' });
                    client = new lib_1.Client({
                        usernameAuth: { username: 'foo', password: 'bar' },
                    });
                    paginationObject = {
                        next: 'https://api.intercom.io/foo/bar/baz?blue=red',
                    };
                    return [4 /*yield*/, client.nextPage(paginationObject)];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({ foo: 'bar' }, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should compute user hashes', function () {
        // TO-DO: Check if hashing algorithm wasn't compromised
        assert_1.default.equal('c8acc43edc084edb8207a50320ba4ec5d113686cf8050274a305480c98512e45', lib_1.IdentityVerification.userHash({
            secretKey: 'bar',
            identifier: 'baz',
        }));
    });
});

//# sourceMappingURL=index.js.map
