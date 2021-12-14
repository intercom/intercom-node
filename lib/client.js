"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("util");
var user_1 = (0, tslib_1.__importDefault)(require("./user"));
var event_1 = (0, tslib_1.__importDefault)(require("./event"));
var company_1 = (0, tslib_1.__importDefault)(require("./company"));
var contact_1 = (0, tslib_1.__importDefault)(require("./contact"));
var visitor_1 = (0, tslib_1.__importDefault)(require("./visitor"));
var counts_1 = (0, tslib_1.__importDefault)(require("./counts"));
var admin_1 = (0, tslib_1.__importDefault)(require("./admin"));
var tag_1 = (0, tslib_1.__importDefault)(require("./tag"));
var segment_1 = (0, tslib_1.__importDefault)(require("./segment"));
var message_1 = (0, tslib_1.__importDefault)(require("./message"));
var conversation_1 = (0, tslib_1.__importDefault)(require("./conversation"));
var note_1 = (0, tslib_1.__importDefault)(require("./note"));
var customer_1 = (0, tslib_1.__importDefault)(require("./customer"));
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
var lodash_1 = require("lodash");
var badResponse_error_1 = require("./errors/badResponse.error");
var Client = /** @class */ (function () {
    // TO-DO: Fix any
    function Client() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // TO-DO: Refactor it!
        if (args.length === 2) {
            this.usernamePart = args[0];
            this.passwordPart = args[1];
        }
        else if (args.length === 1) {
            if (args[0].token) {
                this.usernamePart = args[0].token;
                this.passwordPart = '';
            }
            else {
                this.usernamePart = args[0].appId;
                this.passwordPart = args[0].appApiKey;
            }
        }
        if (!this.usernamePart || this.passwordPart === undefined) {
            throw new Error('Could not construct a client with those parameters');
        }
        this.users = new user_1.default(this);
        this.events = new event_1.default(this);
        this.companies = new company_1.default(this);
        this.contacts = new contact_1.default(this);
        this.leads = new contact_1.default(this);
        this.visitors = new visitor_1.default(this);
        this.counts = new counts_1.default(this);
        this.admins = new admin_1.default(this);
        this.tags = new tag_1.default(this);
        this.segments = new segment_1.default(this);
        this.messages = new message_1.default(this);
        this.conversations = new conversation_1.default(this);
        this.notes = new note_1.default(this);
        this.customers = new customer_1.default(this);
        this.requestOpts = {
            baseURL: 'https://api.intercom.io'
        };
        this.propertiesToOmitInRequestOpts = ['headers.common.Accept'];
        this.usebaseURL = (0, util_1.deprecate)(function (baseURL) { return _this.useRequestOpts({ baseURL: baseURL }); }, 'intercom-client - client.usebaseURL(url): Use client.useRequestOpts({ baseURL: url }) instead');
        this.axiosInstance = this.initiateAxiosInstance();
    }
    Client.prototype.initiateAxiosInstance = function () {
        // TO-DO: Revise the params
        var defaultHeaders = {
            'User-Agent': 'intercom-node-client/2.0.0',
            Accept: 'application/json'
        };
        var axiosInstance = axios_1.default.create({ auth: { username: this.usernamePart, password: this.passwordPart }, baseURL: this.requestOpts.baseURL });
        axiosInstance.defaults.headers.common = (0, lodash_1.merge)(axiosInstance.defaults.headers.common, defaultHeaders);
        return axiosInstance;
    };
    Client.prototype.useRequestOpts = function (opts) {
        var filteredOpts = this.filterUnwantedProperties(opts);
        this.requestOpts = (0, lodash_1.merge)(this.requestOpts, filteredOpts);
        this.updateAxiosInstanceDefaults();
        return this;
    };
    Client.prototype.updateAxiosInstanceDefaults = function () {
        this.axiosInstance.defaults = (0, lodash_1.merge)(this.axiosInstance.defaults, this.requestOpts);
    };
    Client.prototype.filterUnwantedProperties = function (opts) {
        return (0, lodash_1.omit)(opts, this.propertiesToOmitInRequestOpts);
    };
    Client.prototype.ping = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, err_1, error;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.get('/admins')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_1 = _a.sent();
                        error = err_1.response ? this.checkOnErrorInResponse(err_1.response) : err_1;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.put = function (_a) {
        var url = _a.url, data = _a.data;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, err_2, error;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.put(url, data)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_2 = _b.sent();
                        error = err_2.response ? this.checkOnErrorInResponse(err_2.response) : err_2;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.post = function (_a) {
        var url = _a.url, data = _a.data;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, err_3, error;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.post(url, data)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_3 = _b.sent();
                        error = err_3.response ? this.checkOnErrorInResponse(err_3.response) : err_3;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.get = function (_a) {
        var url = _a.url, data = _a.data;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, err_4, error;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.get(url, { params: data })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_4 = _b.sent();
                        error = err_4.response ? this.checkOnErrorInResponse(err_4.response) : err_4;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.nextPage = function (paginationObject) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, err_5, error;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.get(paginationObject.next, { baseURL: undefined })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_5 = _a.sent();
                        error = err_5.response ? this.checkOnErrorInResponse(err_5.response) : err_5;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.delete = function (_a) {
        var url = _a.url, data = _a.data, params = _a.params;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var response, err_6, error;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axiosInstance.delete(url, { data: data, params: params })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        err_6 = _b.sent();
                        error = err_6.response ? this.checkOnErrorInResponse(err_6.response) : err_6;
                        throw error;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.checkOnErrorInResponse = function (_a) {
        var data = _a.data, headers = _a.headers, status = _a.status;
        if (data.type !== 'error.list') {
            return undefined;
        }
        var message = Array.isArray(data.errors) && data.errors[0].message ? data.errors[0].message : null;
        return new badResponse_error_1.BadResponseError(message || 'Response error', data, headers, status);
    };
    return Client;
}());
exports.default = Client;

//# sourceMappingURL=client.js.map
