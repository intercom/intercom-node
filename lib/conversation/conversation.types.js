"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactType = void 0;
;
;
;
;
;
;
;
;
var ConversationState;
(function (ConversationState) {
    ConversationState["OPEN"] = "open";
    ConversationState["CLOSED"] = "closed";
    ConversationState["SNOOZED"] = "snoozed";
})(ConversationState || (ConversationState = {}));
var ConversationPriority;
(function (ConversationPriority) {
    ConversationPriority["PRIORITY"] = "priority";
    ConversationPriority["NOT_PRIORITY"] = "not_priority";
})(ConversationPriority || (ConversationPriority = {}));
var ConversationSourceType;
(function (ConversationSourceType) {
    ConversationSourceType["CONVERASTION"] = "conversation";
    ConversationSourceType["PUSH"] = "push";
    ConversationSourceType["FACEBOOK"] = "facebook";
    ConversationSourceType["TWITTER"] = "twitter";
    ConversationSourceType["EMAIL"] = "email";
})(ConversationSourceType || (ConversationSourceType = {}));
var ContactType;
(function (ContactType) {
    ContactType["USER"] = "user";
    ContactType["LEAD"] = "lead";
})(ContactType = exports.ContactType || (exports.ContactType = {}));
var FromOneToFiveRating;
(function (FromOneToFiveRating) {
    FromOneToFiveRating[FromOneToFiveRating["ONE"] = 1] = "ONE";
    FromOneToFiveRating[FromOneToFiveRating["TWO"] = 2] = "TWO";
    FromOneToFiveRating[FromOneToFiveRating["THREE"] = 3] = "THREE";
    FromOneToFiveRating[FromOneToFiveRating["FOUR"] = 4] = "FOUR";
    FromOneToFiveRating[FromOneToFiveRating["FIVE"] = 5] = "FIVE";
})(FromOneToFiveRating || (FromOneToFiveRating = {}));
var SLAStatus;
(function (SLAStatus) {
    SLAStatus["HIT"] = "hit";
    SLAStatus["MISSED"] = "missed";
    SLAStatus["CANCELLED"] = "cancelled";
    SLAStatus["ACTIVE"] = "active";
})(SLAStatus || (SLAStatus = {}));
var AuthorType;
(function (AuthorType) {
    AuthorType["USER"] = "user";
    AuthorType["ADMIN"] = "admin";
    AuthorType["BOT"] = "bot";
})(AuthorType || (AuthorType = {}));

//# sourceMappingURL=conversation.types.js.map
