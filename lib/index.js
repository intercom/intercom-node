'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IdentityVerification =
    exports.UserData =
    exports.Snippet =
    exports.User =
    exports.Client =
        void 0;
var tslib_1 = require('tslib');
var client_1 = require('./client');
Object.defineProperty(exports, 'Client', {
    enumerable: true,
    get: function () {
        return (0, tslib_1.__importDefault)(client_1).default;
    },
});
var user_1 = require('./user');
Object.defineProperty(exports, 'User', {
    enumerable: true,
    get: function () {
        return (0, tslib_1.__importDefault)(user_1).default;
    },
});
var snippet_1 = require('./snippet');
Object.defineProperty(exports, 'Snippet', {
    enumerable: true,
    get: function () {
        return (0, tslib_1.__importDefault)(snippet_1).default;
    },
});
var user_data_1 = require('./user-data');
Object.defineProperty(exports, 'UserData', {
    enumerable: true,
    get: function () {
        return (0, tslib_1.__importDefault)(user_data_1).default;
    },
});
var crypto_1 = (0, tslib_1.__importDefault)(require('crypto'));
var IdentityVerification = /** @class */ (function () {
    function IdentityVerification() {}
    IdentityVerification.userHash = function (params) {
        var secretKey = params.secretKey;
        var identifier = params.identifier;
        if (!secretKey) {
            throw new Error('secretKey must be provided');
        }
        if (!identifier) {
            throw new Error('identifier must be provided');
        }
        return crypto_1.default
            .createHmac('sha256', secretKey)
            .update(identifier)
            .digest('hex');
    };
    return IdentityVerification;
})();
exports.IdentityVerification = IdentityVerification;

//# sourceMappingURL=index.js.map
