"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert_1 = (0, tslib_1.__importDefault)(require("assert"));
var lib_1 = require("../lib");
var nock_1 = (0, tslib_1.__importDefault)(require("nock"));
describe.only('events', function () {
    var client = new lib_1.Client('foo', 'bar');
    it('should be submitted (created)', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestBody, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestBody = {
                        event_name: 'placed-order',
                        created_at: 1389913941,
                        user_id: 'f4ca124298',
                        metadata: {
                            order_date: 1392036272,
                            stripe_invoice: 'inv_3434343434',
                            order_number: {
                                value: '3434-3434',
                                url: 'https://example.org/orders/3434-3434',
                            },
                            price: {
                                currency: 'usd',
                                amount: 2999,
                            },
                        },
                    };
                    (0, nock_1.default)('https://api.intercom.io')
                        .post('/events', requestBody)
                        .reply(200, {});
                    return [4 /*yield*/, client.events.create({
                            eventName: requestBody.event_name,
                            createdAt: requestBody.created_at,
                            userId: requestBody.user_id,
                            metadata: requestBody.metadata,
                        })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should list by params', function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var requestParams, response;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestParams = {
                        type: 'user',
                        user_id: '1234',
                        per_page: 2,
                        summary: true,
                        email: 'i_love_memes@gmail.com',
                    };
                    (0, nock_1.default)('https://api.intercom.io')
                        .get('/events')
                        .query(requestParams)
                        .reply(200, {});
                    return [4 /*yield*/, client.events.listBy({
                            userId: requestParams.user_id,
                            perPage: requestParams.per_page,
                            summary: requestParams.summary,
                            email: requestParams.email,
                        })];
                case 1:
                    response = _a.sent();
                    assert_1.default.deepStrictEqual({}, response);
                    return [2 /*return*/];
            }
        });
    }); });
});

//# sourceMappingURL=event.js.map
