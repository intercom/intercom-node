"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedactConversationPartType = exports.SortBy = exports.Order = exports.SearchConversationOrderBy = exports.OpenConversationMessageType = exports.CloseConversationType = exports.CloseConversationMessageType = exports.SnoozeConversationMessageType = exports.AssignToConversationUserType = exports.AssignToConversationMessageType = exports.ReplyToConversationUserType = exports.ReplyToConversationMessageType = void 0;
var Conversation = /** @class */ (function () {
    function Conversation(client) {
        this.client = client;
        this.conversationBaseUrl = 'conversations';
        this.client = client;
    }
    Conversation.prototype.create = function (_a) {
        var userId = _a.userId, body = _a.body;
        var requestData = {
            from: {
                id: userId,
                type: 'user'
            },
            body: body
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl), data: requestData });
    };
    Conversation.prototype.find = function (_a) {
        var id = _a.id, inPlainText = _a.inPlainText;
        var data = inPlainText ? {
            display_as: 'plaintext'
        } : undefined;
        return this.client.get({ url: "/".concat(this.conversationBaseUrl, "/").concat(id), data: data });
    };
    Conversation.prototype.update = function (_a) {
        var id = _a.id, markRead = _a.markRead, customAttributes = _a.customAttributes;
        var data = {
            read: markRead,
            custom_attributes: customAttributes,
        };
        return this.client.put({ url: "/".concat(this.conversationBaseUrl, "/").concat(id), data: data });
    };
    Conversation.prototype.replyByIdAsUser = function (_a) {
        var id = _a.id, body = _a.body, intercomUserId = _a.intercomUserId, userId = _a.userId, email = _a.email, attachmentUrls = _a.attachmentUrls;
        var data = {
            message_type: ReplyToConversationMessageType.COMMENT,
            type: ReplyToConversationUserType.USER,
            body: body,
            intercom_user_id: intercomUserId,
            user_id: userId,
            email: email,
            attachment_urls: attachmentUrls,
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/reply"), data: data });
    };
    Conversation.prototype.replyByIdAsAdmin = function (_a) {
        var id = _a.id, adminId = _a.adminId, messageType = _a.messageType, body = _a.body, attachmentUrls = _a.attachmentUrls;
        var data = {
            admin_id: adminId,
            message_type: messageType,
            type: ReplyToConversationUserType.ADMIN,
            body: body,
            attachment_urls: attachmentUrls,
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/reply"), data: data });
    };
    Conversation.prototype.replyByLastAsUser = function (_a) {
        var body = _a.body, intercomUserId = _a.intercomUserId, userId = _a.userId, email = _a.email, attachmentUrls = _a.attachmentUrls;
        var data = {
            message_type: ReplyToConversationMessageType.COMMENT,
            type: ReplyToConversationUserType.USER,
            body: body,
            intercom_user_id: intercomUserId,
            user_id: userId,
            email: email,
            attachment_urls: attachmentUrls,
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/last/reply"), data: data });
    };
    Conversation.prototype.replyByLastAsAdmin = function (_a) {
        var adminId = _a.adminId, messageType = _a.messageType, body = _a.body, attachmentUrls = _a.attachmentUrls;
        var data = {
            admin_id: adminId,
            message_type: messageType,
            type: ReplyToConversationUserType.ADMIN,
            body: body,
            attachment_urls: attachmentUrls,
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/last/reply"), data: data });
    };
    Conversation.prototype.assign = function (_a) {
        var id = _a.id, type = _a.type, adminId = _a.adminId, assigneeId = _a.assigneeId, body = _a.body, _b = _a.withRunningAssignmentRules, withRunningAssignmentRules = _b === void 0 ? false : _b;
        var url = "/".concat(this.conversationBaseUrl, "/").concat(id).concat(withRunningAssignmentRules ? '/run_assignment_rules' : '', "/parts");
        var data = withRunningAssignmentRules ? undefined : {
            message_type: AssignToConversationMessageType.ASSIGNMENT,
            type: type,
            admin_id: adminId,
            assignee_id: assigneeId,
            body: body,
        };
        return this.client.post({ url: url, data: data });
    };
    Conversation.prototype.snooze = function (_a) {
        var id = _a.id, adminId = _a.adminId, snoozedUntil = _a.snoozedUntil;
        var data = {
            message_type: SnoozeConversationMessageType.SNOOZED,
            admin_id: adminId,
            snoozed_until: snoozedUntil
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/reply"), data: data });
    };
    Conversation.prototype.close = function (_a) {
        var id = _a.id, adminId = _a.adminId, body = _a.body;
        var data = {
            message_type: CloseConversationMessageType.CLOSED,
            type: CloseConversationType.ADMIN,
            admin_id: adminId,
            body: body,
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/parts"), data: data });
    };
    Conversation.prototype.open = function (_a) {
        var id = _a.id, adminId = _a.adminId;
        var data = {
            message_type: OpenConversationMessageType.OPEN,
            admin_id: adminId,
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/parts"), data: data });
    };
    Conversation.prototype.attachContactAsAdmin = function (_a) {
        var id = _a.id, adminId = _a.adminId, customer = _a.customer;
        var data = {
            admin_id: adminId,
            customer: {
                intercom_user_id: customer.intercomUserId,
                user_id: customer.userId,
                email: customer.email
            }
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/customers"), data: data });
    };
    Conversation.prototype.attachContactAsContact = function (_a) {
        var id = _a.id, userId = _a.userId, intercomUserId = _a.intercomUserId, email = _a.email, customer = _a.customer;
        var data = {
            intercom_user_id: intercomUserId,
            user_id: userId,
            email: email,
            customer: {
                intercom_user_id: customer.intercomUserId,
                user_id: customer.userId,
                email: customer.email,
            }
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/").concat(id, "/customers"), data: data });
    };
    Conversation.prototype.detachContactAsAdmin = function (_a) {
        var conversationId = _a.conversationId, contactId = _a.contactId, adminId = _a.adminId;
        var data = {
            admin_id: adminId,
        };
        return this.client.delete({ url: "/".concat(this.conversationBaseUrl, "/").concat(conversationId, "/customers/").concat(contactId), data: data });
    };
    Conversation.prototype.search = function (_a) {
        var data = _a.data;
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/search"), data: data });
    };
    Conversation.prototype.list = function (_a) {
        var _b = _a.query, order = _b.order, sort = _b.sort, page = _b.page, per_page = _b.perPage;
        var data = { order: order, sort: sort, page: page, per_page: per_page };
        return this.client.get({ url: "/".concat(this.conversationBaseUrl), data: data });
    };
    Conversation.prototype.redactConversationPart = function (_a) {
        var conversationId = _a.conversationId, conversationPartId = _a.conversationPartId, sourceId = _a.sourceId, type = _a.type;
        var data = {
            conversation_id: conversationId,
            conversation_part_id: conversationPartId,
            source_id: sourceId,
            type: type
        };
        return this.client.post({ url: "/".concat(this.conversationBaseUrl, "/redact"), data: data });
    };
    return Conversation;
}());
exports.default = Conversation;
//
var ReplyToConversationMessageType;
(function (ReplyToConversationMessageType) {
    ReplyToConversationMessageType["COMMENT"] = "comment";
    ReplyToConversationMessageType["NOTE"] = "note";
})(ReplyToConversationMessageType = exports.ReplyToConversationMessageType || (exports.ReplyToConversationMessageType = {}));
var ReplyToConversationUserType;
(function (ReplyToConversationUserType) {
    ReplyToConversationUserType["ADMIN"] = "admin";
    ReplyToConversationUserType["USER"] = "user";
})(ReplyToConversationUserType = exports.ReplyToConversationUserType || (exports.ReplyToConversationUserType = {}));
;
;
//
var AssignToConversationMessageType;
(function (AssignToConversationMessageType) {
    AssignToConversationMessageType["ASSIGNMENT"] = "assignment";
})(AssignToConversationMessageType = exports.AssignToConversationMessageType || (exports.AssignToConversationMessageType = {}));
var AssignToConversationUserType;
(function (AssignToConversationUserType) {
    AssignToConversationUserType["ADMIN"] = "admin";
    AssignToConversationUserType["TEAM"] = "team";
})(AssignToConversationUserType = exports.AssignToConversationUserType || (exports.AssignToConversationUserType = {}));
//
var SnoozeConversationMessageType;
(function (SnoozeConversationMessageType) {
    SnoozeConversationMessageType["SNOOZED"] = "snoozed";
})(SnoozeConversationMessageType = exports.SnoozeConversationMessageType || (exports.SnoozeConversationMessageType = {}));
//
var CloseConversationMessageType;
(function (CloseConversationMessageType) {
    CloseConversationMessageType["CLOSED"] = "closed";
})(CloseConversationMessageType = exports.CloseConversationMessageType || (exports.CloseConversationMessageType = {}));
var CloseConversationType;
(function (CloseConversationType) {
    CloseConversationType["ADMIN"] = "admin";
})(CloseConversationType = exports.CloseConversationType || (exports.CloseConversationType = {}));
//
var OpenConversationMessageType;
(function (OpenConversationMessageType) {
    OpenConversationMessageType["OPEN"] = "open";
})(OpenConversationMessageType = exports.OpenConversationMessageType || (exports.OpenConversationMessageType = {}));
//
var SearchConversationOrderBy;
(function (SearchConversationOrderBy) {
    SearchConversationOrderBy["ASC"] = "ascending";
    SearchConversationOrderBy["DESC"] = "descending";
})(SearchConversationOrderBy = exports.SearchConversationOrderBy || (exports.SearchConversationOrderBy = {}));
//
var Order;
(function (Order) {
    Order["DESC"] = "desc";
    Order["ASC"] = "asc";
    Order["WAITING_SINCE"] = "waiting_since";
})(Order = exports.Order || (exports.Order = {}));
var SortBy;
(function (SortBy) {
    SortBy["CreatedAt"] = "created_at";
    SortBy["UpdatedAt"] = "updated_at";
    SortBy["WaitingSince"] = "waiting_since";
})(SortBy = exports.SortBy || (exports.SortBy = {}));
//
var RedactConversationPartType;
(function (RedactConversationPartType) {
    RedactConversationPartType["CONVERSATION_PART"] = "conversation_part";
    RedactConversationPartType["SOURCE"] = "source";
})(RedactConversationPartType = exports.RedactConversationPartType || (exports.RedactConversationPartType = {}));

//# sourceMappingURL=conversation.js.map
