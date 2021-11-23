"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedactConversationPartType = exports.SortBy = exports.Order = exports.Operators = exports.OpenConversationMessageType = exports.CloseConversationType = exports.CloseConversationMessageType = exports.SnoozeConversationMessageType = exports.AssignToConversationUserType = exports.AssignToConversationMessageType = exports.ReplyToConversationUserType = exports.ReplyToConversationMessageType = void 0;
var Conversation = /** @class */ (function () {
    function Conversation(client) {
        this.client = client;
        this.conversationBaseUrl = 'conversations';
        this.client = client;
    }
    Conversation.prototype.create = function (_a) {
        var data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl, data: data });
    };
    Conversation.prototype.find = function (_a) {
        var id = _a.id, query = _a.query;
        return this.client.get({ url: "/" + this.conversationBaseUrl + "/" + id, data: query });
        ;
    };
    Conversation.prototype.update = function (_a) {
        var id = _a.id, data = _a.data;
        return this.client.put({ url: "/" + this.conversationBaseUrl + "/" + id, data: data });
    };
    Conversation.prototype.replyById = function (_a) {
        var id = _a.id, data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/" + id + "/reply", data: data });
    };
    Conversation.prototype.replyByLast = function (_a) {
        var data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/last/reply", data: data });
    };
    Conversation.prototype.assign = function (_a) {
        var id = _a.id, requestData = _a.data, _b = _a.withRunningAssignmentRules, withRunningAssignmentRules = _b === void 0 ? false : _b;
        var url = "/" + this.conversationBaseUrl + "/" + id + "/" + (withRunningAssignmentRules ? 'run_assignment_rules' : '');
        var data = withRunningAssignmentRules ? undefined : requestData;
        return this.client.post({ url: url, data: data });
    };
    Conversation.prototype.snooze = function (_a) {
        var id = _a.id, data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/" + id + "/reply", data: data });
    };
    Conversation.prototype.close = function (_a) {
        var id = _a.id, data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/" + id + "/parts", data: data });
    };
    Conversation.prototype.open = function (_a) {
        var id = _a.id, data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/" + id + "/parts", data: data });
    };
    Conversation.prototype.attachContact = function (_a) {
        var id = _a.id, data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/" + id + "/customers", data: data });
    };
    Conversation.prototype.detachContact = function (_a) {
        var conversationId = _a.conversationId, contactId = _a.contactId, data = _a.data;
        return this.client.delete({ url: "/" + this.conversationBaseUrl + "/" + conversationId + "/customers/" + contactId, data: data });
    };
    Conversation.prototype.search = function (_a) {
        var data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/search", data: data });
    };
    Conversation.prototype.list = function (_a) {
        var query = _a.query;
        return this.client.get({ url: "/" + this.conversationBaseUrl, data: query });
    };
    Conversation.prototype.redactConversationPart = function (_a) {
        var data = _a.data;
        return this.client.post({ url: "/" + this.conversationBaseUrl + "/redact", data: data });
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
var Operators;
(function (Operators) {
    Operators["AND"] = "AND";
    Operators["OR"] = "OR";
    Operators["EQUALS"] = "=";
    Operators["NOT_EQUALS"] = "!=";
    Operators["IN"] = "IN";
    Operators["NIN"] = "NIN";
    Operators["GREATER_THAN"] = ">";
    Operators["LESS_THAN"] = "<";
    Operators["CONTAINS"] = "~";
    Operators["NOT_CONTAINS"] = "!~";
    Operators["STARTS_WITH"] = "^";
    Operators["ENDS_WITH"] = "$";
})(Operators = exports.Operators || (exports.Operators = {}));
//
var Order;
(function (Order) {
    Order["DESC"] = "desc";
    Order["ASC"] = "asc";
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
