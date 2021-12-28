"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event(client) {
        this.client = client;
        this.baseUrl = 'events';
        this.client = client;
    }
    Event.prototype.create = function (_a) {
        var event_name = _a.eventName, created_at = _a.createdAt, user_id = _a.userId, id = _a.id, email = _a.email, metadata = _a.metadata;
        var data = {
            event_name: event_name,
            created_at: created_at,
            user_id: user_id,
            id: id,
            email: email,
            metadata: metadata,
        };
        return this.client.post({ url: "/".concat(this.baseUrl), data: data });
    };
    Event.prototype.listBy = function (_a) {
        var user_id = _a.userId, email = _a.email, intercom_user_id = _a.intercomUserId, per_page = _a.perPage, summary = _a.summary;
        var params = {
            type: 'user',
            user_id: user_id,
            email: email,
            intercom_user_id: intercom_user_id,
            per_page: per_page,
            summary: summary,
        };
        // TO-DO: Change to `params` from `data: params`
        return this.client.get({ url: "/".concat(this.baseUrl), data: params });
    };
    return Event;
}());
exports.default = Event;

//# sourceMappingURL=event.js.map
