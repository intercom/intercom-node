"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe.only('conversations', function () {
    it('should be listed', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/conversations').query({ foo: 'bar' }).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.list({ foo: 'bar' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response.status);
                    assert_1.default.deepStrictEqual({}, response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should find', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/conversations/bar').query({ id: 'bar' }).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.find({ id: 'bar' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response.status);
                    assert_1.default.deepStrictEqual({}, response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reply', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').post('/conversations/bar/reply', { id: 'bar', baz: 'bang' }).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.reply({ id: 'bar', baz: 'bang' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response.status);
                    assert_1.default.deepStrictEqual({}, response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should mark as read', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').put('/conversations/bar', { read: true }).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.markAsRead({ id: 'bar' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response.status);
                    assert_1.default.deepStrictEqual({}, response.data);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=conversation.js.map
