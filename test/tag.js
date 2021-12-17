"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe('tags', function () {
    it('should be created', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestBody = {
                        name: 'haven'
                    };
                    (0, nock_1.default)('https://api.intercom.io').post('/tags', requestBody).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.create({ name: 'haven' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be updated', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestBody = {
                        id: '123',
                        name: 'haven'
                    };
                    (0, nock_1.default)('https://api.intercom.io').post('/tags', requestBody).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.update({ id: '123', name: 'haven' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete tags', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').delete('/tags/baz').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.delete({ id: 'baz' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should tag contacts', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var contactId, requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contactId = 'contactid123';
                    requestBody = {
                        id: 'tagid123'
                    };
                    (0, nock_1.default)('https://api.intercom.io').post("/contacts/".concat(contactId, "/tags"), requestBody).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.tagContact({ contactId: contactId, tagId: requestBody.id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should tag conversations', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var conversationId, requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    conversationId = 'contactid123';
                    requestBody = {
                        id: 'tagid123',
                        admin_id: 'adminid123',
                    };
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(conversationId, "/tags"), requestBody).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.tagConversation({ conversationId: conversationId, tagId: requestBody.id, adminId: requestBody.admin_id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should tag companies', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestBody = {
                        name: 'tagname_69',
                        companies: [{ id: '123' }, { id: '234' }, { id: '456' }],
                    };
                    (0, nock_1.default)('https://api.intercom.io').post("/tags", requestBody).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.tagCompanies({ tagName: requestBody.name, companiesIds: ['123', '234', '456'] })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should untag contacts', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var _a, contactId, tagId, client, response;
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {
                        contactId: 'contactId123',
                        tagId: 'tagId123',
                    }, contactId = _a.contactId, tagId = _a.tagId;
                    (0, nock_1.default)('https://api.intercom.io').delete("/contacts/".concat(contactId, "/tags/").concat(tagId)).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.untagContact({ contactId: contactId, tagId: tagId })];
                case 1:
                    response = _b.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should untag conversations', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var conversationId, requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    conversationId = 'contactid123';
                    requestBody = {
                        id: 'tagid123',
                        admin_id: 'adminid123',
                    };
                    (0, nock_1.default)('https://api.intercom.io').delete("/conversations/".concat(conversationId, "/tags/").concat(requestBody.id)).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.untagConversation({ conversationId: conversationId, tagId: requestBody.id, adminId: requestBody.admin_id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should untag companies', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestBody, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestBody = {
                        name: 'tagname_69',
                        companies: [{ id: '123', untag: true }, { id: '234', untag: true }, { id: '456', untag: true }],
                    };
                    (0, nock_1.default)('https://api.intercom.io').post("/tags", requestBody).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.untagCompanies({ tagName: requestBody.name, companiesIds: ['123', '234', '456'] })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/tags').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.tags.list()];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=tag.js.map
