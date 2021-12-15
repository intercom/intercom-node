'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = require('tslib');
var assert_1 = (0, tslib_1.__importDefault)(require('assert'));
var lib_1 = require('../lib');
var nock_1 = (0, tslib_1.__importDefault)(require('nock'));
describe('messages', function () {
    it('should be created', function () {
        return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
            var requestBody, client, response;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = {
                            message_type: 'email',
                            subject: 'This is our demand now',
                            body: 'Destroy ponies',
                            template: 'plain',
                            from: {
                                type: 'admin',
                                id: '394051',
                            },
                            to: {
                                type: 'user',
                                id: '536e564f316c83104c000020',
                            },
                        };
                        (0, nock_1.default)('https://api.intercom.io')
                            .post('/messages', requestBody)
                            .reply(200, {});
                        client = new lib_1.Client('foo', 'bar');
                        return [
                            4 /*yield*/,
                            client.messages.create({
                                messageType: requestBody.message_type,
                                subject: requestBody.subject,
                                body: requestBody.body,
                                template: requestBody.template,
                                from: requestBody.from,
                                to: requestBody.to,
                            }),
                        ];
                    case 1:
                        response = _a.sent();
                        assert_1.default.deepStrictEqual({}, response);
                        return [2 /*return*/];
                }
            });
        });
    });
});

//# sourceMappingURL=message.js.map
