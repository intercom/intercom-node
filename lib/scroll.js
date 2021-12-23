"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Scroll = /** @class */ (function () {
    function Scroll(client, scrollUrlDataType, scrollParam) {
        this.client = client;
        this.scrollUrlDataType = scrollUrlDataType;
        this.scrollParam = scrollParam;
        this.client = client;
        this.scrollParam = scrollParam;
    }
    Scroll.prototype.each = function (params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                this.scrollParam = params.scrollParam;
                return [2 /*return*/, this.eachInternal()];
            });
        });
    };
    Scroll.prototype.eachInternal = function (storedData) {
        if (storedData === void 0) { storedData = []; }
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, dataFromResponse, combinedData;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.get({
                            url: this.scrollUrl(),
                        })];
                    case 1:
                        response = _a.sent();
                        dataFromResponse = response.data;
                        combinedData = (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(dataFromResponse), false), (0, tslib_1.__read)(storedData), false);
                        if (dataFromResponse.length > 0) {
                            this.scrollParam = response.scroll_param;
                            return [2 /*return*/, this.eachInternal(combinedData)];
                        }
                        return [2 /*return*/, combinedData];
                }
            });
        });
    };
    Scroll.prototype.next = function (_a) {
        var scrollParam = _a.scrollParam;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.scrollParam = scrollParam;
                        return [4 /*yield*/, this.client.get({
                                url: this.scrollUrl(),
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Scroll.prototype.scrollUrl = function () {
        var baseScrollUrl = "/".concat(this.scrollUrlDataType, "/scroll");
        return this.scrollParam && this.scrollParam.length > 0
            ? "".concat(baseScrollUrl, "?scroll_param=").concat(this.scrollParam)
            : baseScrollUrl;
    };
    return Scroll;
}());
exports.default = Scroll;

//# sourceMappingURL=scroll.js.map
