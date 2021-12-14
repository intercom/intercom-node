"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchContactOrderBy = void 0;
var contact_types_1 = require("./contact/contact.types");
var Contact = /** @class */ (function () {
    function Contact(client) {
        this.client = client;
        this.baseUrl = 'contacts';
        this.client = client;
    }
    Contact.prototype.createUser = function (_a) {
        var externalId = _a.externalId, phone = _a.phone, name = _a.name, avatar = _a.avatar, signedUpAt = _a.signedUpAt, lastSeenAt = _a.lastSeenAt, ownerId = _a.ownerId, isUnsubscribedFromEmails = _a.isUnsubscribedFromEmails, customAttributes = _a.customAttributes;
        var requestData = {
            role: contact_types_1.Role.USER,
            external_id: externalId,
            phone: phone,
            name: name,
            avatar: avatar,
            signed_up_at: signedUpAt,
            last_seen_at: lastSeenAt,
            owner_id: ownerId,
            unsubscribed_from_emails: isUnsubscribedFromEmails,
            custom_attributes: customAttributes,
        };
        return this.client.post({ url: "/".concat(this.baseUrl), data: requestData });
    };
    Contact.prototype.createLead = function (data) {
        var requestData = {
            role: contact_types_1.Role.LEAD,
            phone: data === null || data === void 0 ? void 0 : data.phone,
            name: data === null || data === void 0 ? void 0 : data.name,
            avatar: data === null || data === void 0 ? void 0 : data.avatar,
            signed_up_at: data === null || data === void 0 ? void 0 : data.signedUpAt,
            last_seen_at: data === null || data === void 0 ? void 0 : data.lastSeenAt,
            owner_id: data === null || data === void 0 ? void 0 : data.ownerId,
            unsubscribed_from_emails: data === null || data === void 0 ? void 0 : data.isUnsubscribedFromMails,
            custom_attributes: data === null || data === void 0 ? void 0 : data.customAttributes,
        };
        return this.client.post({ url: "/".concat(this.baseUrl), data: requestData });
    };
    Contact.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({ url: "/".concat(this.baseUrl, "/").concat(id) });
    };
    Contact.prototype.update = function (_a) {
        var id = _a.id, role = _a.role, externalId = _a.externalId, phone = _a.phone, name = _a.name, avatar = _a.avatar, signedUpAt = _a.signedUpAt, lastSeenAt = _a.lastSeenAt, ownerId = _a.ownerId, isUnsubscribedFromMails = _a.isUnsubscribedFromMails, customAttributes = _a.customAttributes;
        var data = {
            role: role,
            external_id: externalId,
            phone: phone,
            name: name,
            avatar: avatar,
            signed_up_at: signedUpAt,
            last_seen_at: lastSeenAt,
            owner_id: ownerId,
            unsubscribed_from_emails: isUnsubscribedFromMails,
            custom_attributes: customAttributes,
        };
        return this.client.put({ url: "/".concat(this.baseUrl, "/").concat(id), data: data });
    };
    Contact.prototype.mergeLeadInUser = function (_a) {
        var leadId = _a.leadId, userId = _a.userId;
        var data = {
            from: leadId,
            into: userId
        };
        return this.client.post({ url: "/".concat(this.baseUrl, "/merge"), data: data });
    };
    Contact.prototype.search = function (_a) {
        var data = _a.data;
        return this.client.post({ url: "/".concat(this.baseUrl, "/search"), data: data });
    };
    Contact.prototype.list = function (_a) {
        var perPage = _a.perPage, startingAfter = _a.startingAfter;
        var queryData = {
            per_page: perPage,
            starting_after: startingAfter
        };
        return this.client.get({ url: "/".concat(this.baseUrl), data: queryData });
    };
    Contact.prototype.delete = function (_a) {
        var id = _a.id;
        return this.client.delete({ url: "/".concat(this.baseUrl, "/").concat(id) });
    };
    Contact.prototype.archive = function (_a) {
        var id = _a.id;
        return this.client.post({ url: "/".concat(this.baseUrl, "/").concat(id, "/archive") });
    };
    Contact.prototype.unarchive = function (_a) {
        var id = _a.id;
        return this.client.post({ url: "/".concat(this.baseUrl, "/").concat(id, "/unarchive") });
    };
    Contact.prototype.listAttachedCompanies = function (_a) {
        var id = _a.id, perPage = _a.perPage, startingAfter = _a.startingAfter;
        var queryData = {
            per_page: perPage,
            starting_after: startingAfter
        };
        return this.client.get({ url: "/".concat(this.baseUrl, "/").concat(id, "/companies"), data: queryData });
    };
    Contact.prototype.listAttachedTags = function (_a) {
        var id = _a.id;
        return this.client.get({ url: "/".concat(this.baseUrl, "/").concat(id, "/tags") });
    };
    Contact.prototype.listAttachedSegments = function (_a) {
        var id = _a.id;
        return this.client.get({ url: "/".concat(this.baseUrl, "/").concat(id, "/segments") });
    };
    Contact.prototype.listAttachedEmailSubscriptions = function (_a) {
        var id = _a.id;
        return this.client.get({ url: "/".concat(this.baseUrl, "/").concat(id, "/subscriptions") });
    };
    return Contact;
}());
exports.default = Contact;
//
var SearchContactOrderBy;
(function (SearchContactOrderBy) {
    SearchContactOrderBy["ASC"] = "ascending";
    SearchContactOrderBy["DESC"] = "descending";
})(SearchContactOrderBy = exports.SearchContactOrderBy || (exports.SearchContactOrderBy = {}));

//# sourceMappingURL=contact.js.map
