"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = require("./util/time");
var Admin = /** @class */ (function () {
    function Admin(client) {
        this.client = client;
        this.baseUrl = 'admins';
        this.client = client;
    }
    Admin.prototype.find = function (_a) {
        var id = _a.id;
        return this.client.get({ url: "/".concat(this.baseUrl, "/").concat(id) });
    };
    Admin.prototype.away = function (_a) {
        var adminId = _a.adminId, enableAwayMode = _a.enableAwayMode, enableReassignMode = _a.enableReassignMode;
        var data = {
            away_mode_enabled: enableAwayMode,
            away_mode_reassign: enableReassignMode
        };
        return this.client.put({ url: "/".concat(this.baseUrl, "/").concat(adminId, "/away"), data: data });
    };
    Admin.prototype.listAllActivityLogs = function (_a) {
        var before = _a.before, after = _a.after;
        var data = {
            created_at_before: (0, time_1.dateToUnixTimestamp)(before),
            created_at_after: after ? (0, time_1.dateToUnixTimestamp)(after) : undefined,
        };
        return this.client.get({ url: "/".concat(this.baseUrl, "/activity_logs"), data: data });
    };
    Admin.prototype.list = function () {
        return this.client.get({ url: "/".concat(this.baseUrl) });
    };
    return Admin;
}());
exports.default = Admin;

//# sourceMappingURL=admin.js.map
