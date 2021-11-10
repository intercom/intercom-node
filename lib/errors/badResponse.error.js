"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadResponseError = void 0;
var tslib_1 = require("tslib");
var BadResponseError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BadResponseError, _super);
    function BadResponseError(message, body, headers, statusCode) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.body = body;
        _this.headers = headers;
        _this.statusCode = statusCode;
        _this.body = body;
        _this.headers = headers;
        _this.statusCode = statusCode;
        return _this;
    }
    return BadResponseError;
}(Error));
exports.BadResponseError = BadResponseError;

//# sourceMappingURL=badResponse.error.js.map
