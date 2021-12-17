"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe('admins', function () {
    it('should find admins by id', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins/baz').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.find({ id: 'baz' })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should set an admin away', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var id, requestData, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = 'baz';
                    requestData = {
                        "away_mode_enabled": true,
                        "away_mode_reassign": false
                    };
                    (0, nock_1.default)('https://api.intercom.io').put("/admins/".concat(id, "/away"), requestData).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.away({ adminId: id, enableAwayMode: true, enableReassignMode: false })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all activites logs', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var date, dateInUnix, client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = new Date('Fri, 17 Dec 2021 18:02:18 GMT');
                    dateInUnix = '1639764138';
                    (0, nock_1.default)('https://api.intercom.io').get("/admins/activity_logs?created_at_after=".concat(dateInUnix, "&created_at_before=").concat(dateInUnix)).reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.listAllActivityLogs({ before: date, after: date })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list all', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var client, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, nock_1.default)('https://api.intercom.io').get('/admins').reply(200, {});
                    client = new lib_1.Client('foo', 'bar');
                    return [4 /*yield*/, client.admins.list()];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=admin.js.map
