"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tag = /** @class */ (function () {
    function Tag(client) {
        this.client = client;
        this.tagsBaseUrl = 'tags';
        this.client = client;
    }
    Tag.prototype.create = function (data) {
        return this.client.post({ url: "/".concat(this.tagsBaseUrl), data: data });
    };
    Tag.prototype.update = function (data) {
        return this.client.post({ url: "/".concat(this.tagsBaseUrl), data: data });
    };
    Tag.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({ url: "/".concat(this.tagsBaseUrl, "/").concat(id) });
    };
    Tag.prototype.tagContact = function (_a) {
        var contactId = _a.contactId, tagId = _a.tagId;
        var data = {
            id: tagId,
        };
        return this.client.post({ url: "/".concat(this.client.contacts.baseUrl, "/").concat(contactId, "/").concat(this.tagsBaseUrl), data: data });
    };
    Tag.prototype.tagConversation = function (_a) {
        var conversationId = _a.conversationId, tagId = _a.tagId, adminId = _a.adminId;
        var data = {
            id: tagId,
            adminId: adminId,
        };
        return this.client.post({ url: "/".concat(this.client.conversations.baseUrl, "/").concat(conversationId, "/").concat(this.tagsBaseUrl), data: data });
    };
    Tag.prototype.tagCompanies = function (_a) {
        var name = _a.tagName, companiesIds = _a.companiesIds;
        var data = {
            name: name,
            companies: companiesIds.map(function (id) { return ({ id: id }); })
        };
        return this.client.post({ url: "/".concat(this.tagsBaseUrl), data: data });
    };
    Tag.prototype.untagContact = function (_a) {
        var contactId = _a.contactId, tagId = _a.tagId;
        return this.client.delete({ url: "/".concat(this.client.contacts.baseUrl, "/").concat(contactId, "/").concat(this.tagsBaseUrl, "/").concat(tagId) });
    };
    Tag.prototype.untagConversation = function (_a) {
        var conversationId = _a.conversationId, tagId = _a.tagId;
        return this.client.delete({ url: "/".concat(this.client.conversations.baseUrl, "/").concat(conversationId, "/").concat(this.tagsBaseUrl, "/").concat(tagId) });
    };
    Tag.prototype.untagCompanies = function (_a) {
        var name = _a.tagName, companiesIds = _a.companiesIds;
        var data = {
            name: name,
            companies: companiesIds.map(function (id) { return ({ id: id, untag: true }); })
        };
        return this.client.post({ url: "/".concat(this.tagsBaseUrl), data: data });
    };
    Tag.prototype.list = function () {
        return this.client.get({ url: "/".concat(this.tagsBaseUrl) });
    };
    return Tag;
}());
exports.default = Tag;

//# sourceMappingURL=tag.js.map
