"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
var contact_types_1 = require("../lib/contact/contact.types");
var common_types_1 = require("../lib/common/common.types");
describe('contacts', function () {
    it('should create a contact with user role', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, contact, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    contact = {
                        role: 'user',
                        external_id: id,
                        phone: '+48370044567',
                        name: 'Niko Bellic',
                        avatar: 'https://nico-from-gta-iv.com/lets_go_bowling.jpg',
                        signed_up_at: 1638203719,
                        last_seen_at: 1638203719,
                        owner_id: 1,
                        unsubscribed_from_emails: true,
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post('/contacts', contact).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.createUser({ externalId: contact.external_id, phone: contact.phone, name: contact.name, avatar: contact.avatar, signedUpAt: contact.signed_up_at, lastSeenAt: contact.last_seen_at, ownerId: contact.owner_id, isUnsubscribedFromEmails: contact.unsubscribed_from_emails })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create a contact with lead role', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var contact, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contact = {
                        role: 'lead',
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post('/contacts', contact).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.createLead()];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should retrieve a contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/contacts/" + id).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.find({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should update a contact', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, requestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    requestBody = {
                        role: contact_types_1.Role.USER,
                        name: 'Roman The Bowling Fan',
                        custom_attributes: {
                            callBrother: "Hey Niko, it's me – Roman. Let's go bowling!"
                        }
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').put("/contacts/" + id, requestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.update({ id: id, role: requestBody.role, name: requestBody.name, customAttributes: requestBody.custom_attributes })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should delete a contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').delete("/contacts/" + id).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.delete({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should archive a contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/contacts/" + id + "/archive").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.archive({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should unarchive a contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/contacts/" + id + "/unarchive").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.unarchive({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should merge two contacts', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var leadId, userId, requestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    leadId = '536e564f316c83104c000020';
                    userId = '536e564f316c83104c000021';
                    requestBody = {
                        from: leadId,
                        into: userId,
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/contacts/merge", requestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.mergeLeadInUser({ leadId: leadId, userId: userId })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should search for contacts using filters', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestBody = {
                        "query": {
                            "operator": common_types_1.Operators.AND,
                            "value": [
                                {
                                    "operator": common_types_1.Operators.AND,
                                    "value": [
                                        {
                                            "field": "updated_at",
                                            "operator": common_types_1.Operators.GREATER_THAN,
                                            "value": 1560436650
                                        },
                                        {
                                            "field": "conversation_rating.rating",
                                            "operator": common_types_1.Operators.EQUALS,
                                            "value": 1
                                        }
                                    ]
                                },
                                {
                                    "operator": common_types_1.Operators.OR,
                                    "value": [
                                        {
                                            "field": "updated_at",
                                            "operator": common_types_1.Operators.GREATER_THAN,
                                            "value": 1560436650
                                        },
                                        {
                                            "field": "conversation_rating.rating",
                                            "operator": common_types_1.Operators.EQUALS,
                                            "value": 2
                                        }
                                    ]
                                }
                            ]
                        }
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/contacts/search", requestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.search({ data: requestBody })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all contacts', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/contacts').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.list()];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response.status);
                    assert_1.default.deepStrictEqual({}, response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list attached companies of contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/contacts/" + id + "/companies").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.listAttachedCompanies({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list attached tags of contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/contacts/" + id + "/tags").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.listAttachedTags({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list attached segments of contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/contacts/" + id + "/segments").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.listAttachedSegments({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list attached email subscriptions of contact by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/contacts/" + id + "/subscriptions").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.contacts.listAttachedEmailSubscriptions({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.equal(200, response === null || response === void 0 ? void 0 : response.status);
                    assert_1.default.deepStrictEqual(expectedReply, response === null || response === void 0 ? void 0 : response.data);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=contact.js.map
