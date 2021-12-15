'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.RecepientType = void 0;
var Message = /** @class */ (function () {
    function Message(client) {
        this.client = client;
        this.messagesBaseUrl = 'messages';
        this.client = client;
    }
    Message.prototype.create = function (_a) {
        var message_type = _a.messageType,
            subject = _a.subject,
            body = _a.body,
            template = _a.template,
            from = _a.from,
            to = _a.to;
        var data = {
            message_type: message_type,
            subject: subject,
            body: body,
            template: template,
            from: from,
            to: to,
        };
        return this.client.post({
            url: '/'.concat(this.messagesBaseUrl),
            data: data,
        });
    };
    return Message;
})();
exports.default = Message;
var RecepientType;
(function (RecepientType) {
    RecepientType['ADMIN'] = 'admin';
    RecepientType['USER'] = 'user';
    RecepientType['LEAD'] = 'lead';
})((RecepientType = exports.RecepientType || (exports.RecepientType = {})));

//# sourceMappingURL=message.js.map
