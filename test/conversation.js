"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
var conversation_1 = require("../lib/conversation");
var common_types_1 = require("../lib/common/common.types");
describe('conversations', function () {
    it('should create a conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, message, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    message = {
                        from: {
                            type: 'user',
                            id: id,
                        },
                        body: 'Hello darkness my old friend',
                    };
                    expectedReply = {
                        "type": "user_message",
                        "id": "2001",
                        "created_at": 1401917202,
                        "body": "Hello darkness my old friend",
                        "message_type": "inapp",
                        "conversation_id": "36000324324"
                    };
                    (0, nock_1.default)('https://api.intercom.io').post('/conversations', message).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.create({ userId: id, body: message.body })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should retrieve a conversation as is', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/conversations/".concat(id)).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.find({ id: id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should retrieve a conversation as plain text', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/conversations/".concat(id)).query({ display_as: 'plaintext' }).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.find({ id: id, inPlainText: true })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should update a conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, requestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    requestBody = {
                        read: false,
                        custom_attributes: {
                            yey: 'in the bay'
                        }
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').put("/conversations/".concat(id), requestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.update({ id: id, markRead: requestBody.read, customAttributes: requestBody.custom_attributes })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reply as user to a conversation by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, userRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    userRequestBody = {
                        message_type: conversation_1.ReplyToConversationMessageType.COMMENT,
                        type: conversation_1.ReplyToConversationUserType.USER,
                        body: 'blablbalba',
                        intercom_user_id: id,
                        attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/reply"), userRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.replyByIdAsUser({ id: id, body: userRequestBody.body, intercomUserId: userRequestBody.intercom_user_id, attachmentUrls: userRequestBody.attachment_urls })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reply as admin to a conversation by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, adminId, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    adminId = '536e564f316c83104c000020';
                    adminRequestBody = {
                        admin_id: adminId,
                        message_type: conversation_1.ReplyToConversationMessageType.NOTE,
                        type: conversation_1.ReplyToConversationUserType.ADMIN,
                        body: '<b>blablbalba</b>',
                        attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/reply"), adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.replyByIdAsAdmin({ id: id, adminId: adminId, messageType: adminRequestBody.message_type, body: adminRequestBody.body, attachmentUrls: adminRequestBody.attachment_urls })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reply as user to last conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, userRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    userRequestBody = {
                        message_type: conversation_1.ReplyToConversationMessageType.COMMENT,
                        type: conversation_1.ReplyToConversationUserType.USER,
                        body: 'blablbalba',
                        intercom_user_id: id,
                        attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/last/reply", userRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.replyByLastAsUser({ body: userRequestBody.body, intercomUserId: userRequestBody.intercom_user_id, attachmentUrls: userRequestBody.attachment_urls })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reply as admin to last conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var adminId, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    adminId = '536e564f316c83104c000021';
                    adminRequestBody = {
                        admin_id: adminId,
                        message_type: conversation_1.ReplyToConversationMessageType.NOTE,
                        type: conversation_1.ReplyToConversationUserType.ADMIN,
                        body: '<b>blablbalba</b>',
                        attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/last/reply", adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.replyByLastAsAdmin({ adminId: adminId, messageType: adminRequestBody.message_type, body: adminRequestBody.body, attachmentUrls: adminRequestBody.attachment_urls })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should assign a conversation as team without assignment_rules', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, userRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    userRequestBody = {
                        message_type: conversation_1.AssignToConversationMessageType.ASSIGNMENT,
                        type: conversation_1.AssignToConversationUserType.TEAM,
                        assignee_id: id,
                        admin_id: id,
                        body: '<b>blablbalba</b>',
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/parts"), userRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.assign({ id: id, type: userRequestBody.type, adminId: userRequestBody.admin_id, assigneeId: userRequestBody.assignee_id, body: userRequestBody.body })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should assign a conversation as team with assignment_rules', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/run_assignment_rules/parts")).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.assign({ id: id, withRunningAssignmentRules: true })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should snooze a conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    adminRequestBody = {
                        message_type: conversation_1.SnoozeConversationMessageType.SNOOZED,
                        admin_id: id,
                        snoozed_until: "1501512795"
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/reply"), adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.snooze({ id: id, adminId: adminRequestBody.admin_id, snoozedUntil: adminRequestBody.snoozed_until })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should close a conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    adminRequestBody = {
                        message_type: conversation_1.CloseConversationMessageType.CLOSED,
                        type: conversation_1.CloseConversationType.ADMIN,
                        admin_id: id,
                        body: "Closed conversation because of X."
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/parts"), adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.close({ id: id, adminId: adminRequestBody.admin_id, body: adminRequestBody.body })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should open a conversation', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    adminRequestBody = {
                        message_type: conversation_1.OpenConversationMessageType.OPEN,
                        admin_id: id,
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/parts"), adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.open({ id: id, adminId: adminRequestBody.admin_id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should attach a contact to the conversation as admin', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    adminRequestBody = {
                        admin_id: id,
                        customer: {
                            intercom_user_id: id
                        }
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/customers"), adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.attachContactAsAdmin({ id: id, adminId: adminRequestBody.admin_id, customer: { intercomUserId: adminRequestBody.customer.intercom_user_id } })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should attach a contact to the conversation as contact', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, contactRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    contactRequestBody = {
                        user_id: id,
                        customer: {
                            intercom_user_id: id
                        }
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/".concat(id, "/customers"), contactRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.attachContactAsContact({ id: id, userId: contactRequestBody.user_id, customer: { intercomUserId: contactRequestBody.customer.intercom_user_id } })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should detach a contact from the conversation as admin', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, contactId, conversationId, adminRequestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = '536e564f316c83104c000020';
                    contactId = '536e564f316c83104c000021';
                    conversationId = '536e564f316c83104c000022';
                    adminRequestBody = {
                        admin_id: id,
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').delete("/conversations/".concat(conversationId, "/customers/").concat(contactId), adminRequestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.detachContactAsAdmin({ conversationId: conversationId, contactId: contactId, adminId: adminRequestBody.admin_id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should search for conversations using filters', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
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
                        },
                        "pagination": {
                            "per_page": 5,
                            "starting_after": "WzE2MzU4NjA2NDgwMDAsIjYxODJiNjJlNDM4YjdhM2EwMWE4YWYxNSIsMl0="
                        },
                        "sort": {
                            "field": "name",
                            "order": "ascending",
                        }
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post("/conversations/search", requestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.search({ data: { query: requestBody.query, pagination: requestBody.pagination, sort: requestBody.sort } })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all conversations', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').get("/conversations?order=desc&sort=updated_at&page=1&per_page=10").reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.list({ query: { order: conversation_1.Order.DESC, sort: conversation_1.SortBy.UpdatedAt, page: 1, perPage: 10 } })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should redact a conversation part', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var conversation_id, conversation_part_id, requestBody, expectedReply, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    conversation_id = '536e564f316c83104c000020';
                    conversation_part_id = '536e564f316c83104c000021';
                    requestBody = {
                        type: conversation_1.RedactConversationPartType.CONVERSATION_PART,
                        conversation_id: conversation_id,
                        conversation_part_id: conversation_part_id,
                    };
                    expectedReply = {};
                    (0, nock_1.default)('https://api.intercom.io').post('/conversations/redact', requestBody).reply(200, expectedReply);
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.conversations.redactConversationPart({ type: requestBody.type, conversationId: requestBody.conversation_id, conversationPartId: requestBody.conversation_part_id })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual(expectedReply, response);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=conversation.js.map
