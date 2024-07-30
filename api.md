# Shared

Types:

- <code><a href="./src/resources/shared.ts">Admin</a></code>
- <code><a href="./src/resources/shared.ts">ArticleContent</a></code>
- <code><a href="./src/resources/shared.ts">ArticleTranslatedContent</a></code>
- <code><a href="./src/resources/shared.ts">Company</a></code>
- <code><a href="./src/resources/shared.ts">Contact</a></code>
- <code><a href="./src/resources/shared.ts">ContactReference</a></code>
- <code><a href="./src/resources/shared.ts">Conversation</a></code>
- <code><a href="./src/resources/shared.ts">CursorPages</a></code>
- <code><a href="./src/resources/shared.ts">GroupContent</a></code>
- <code><a href="./src/resources/shared.ts">GroupTranslatedContent</a></code>
- <code><a href="./src/resources/shared.ts">Message</a></code>
- <code><a href="./src/resources/shared.ts">MultipleFilterSearchRequest</a></code>
- <code><a href="./src/resources/shared.ts">Note</a></code>
- <code><a href="./src/resources/shared.ts">PaginatedResponse</a></code>
- <code><a href="./src/resources/shared.ts">PartAttachment</a></code>
- <code><a href="./src/resources/shared.ts">Reference</a></code>
- <code><a href="./src/resources/shared.ts">SearchRequest</a></code>
- <code><a href="./src/resources/shared.ts">SingleFilterSearchRequest</a></code>
- <code><a href="./src/resources/shared.ts">StartingAfterPaging</a></code>
- <code><a href="./src/resources/shared.ts">SubscriptionTypeList</a></code>
- <code><a href="./src/resources/shared.ts">Tag</a></code>
- <code><a href="./src/resources/shared.ts">TagList</a></code>
- <code><a href="./src/resources/shared.ts">Ticket</a></code>
- <code><a href="./src/resources/shared.ts">TicketTypeAttribute</a></code>

# Me

Types:

- <code><a href="./src/resources/me.ts">AdminWithApp</a></code>

Methods:

- <code title="get /me">client.me.<a href="./src/resources/me.ts">retrieve</a>({ ...params }) -> AdminWithApp | null</code>

# Admins

Types:

- <code><a href="./src/resources/admins/admins.ts">AdminList</a></code>

Methods:

- <code title="get /admins/{id}">client.admins.<a href="./src/resources/admins/admins.ts">retrieve</a>(id, { ...params }) -> Admin | null</code>
- <code title="get /admins">client.admins.<a href="./src/resources/admins/admins.ts">list</a>({ ...params }) -> AdminList</code>
- <code title="put /admins/{id}/away">client.admins.<a href="./src/resources/admins/admins.ts">setAway</a>(id, { ...params }) -> Admin | null</code>

## ActivityLogs

Types:

- <code><a href="./src/resources/admins/activity-logs.ts">ActivityLogList</a></code>

Methods:

- <code title="get /admins/activity_logs">client.admins.activityLogs.<a href="./src/resources/admins/activity-logs.ts">list</a>({ ...params }) -> ActivityLogList</code>

# Articles

Types:

- <code><a href="./src/resources/articles.ts">Article</a></code>
- <code><a href="./src/resources/articles.ts">ArticleList</a></code>
- <code><a href="./src/resources/articles.ts">ArticleSearchResponse</a></code>
- <code><a href="./src/resources/articles.ts">DeletedArticleObject</a></code>

Methods:

- <code title="post /articles">client.articles.<a href="./src/resources/articles.ts">create</a>({ ...params }) -> Article</code>
- <code title="get /articles/{id}">client.articles.<a href="./src/resources/articles.ts">retrieve</a>(id, { ...params }) -> Article</code>
- <code title="put /articles/{id}">client.articles.<a href="./src/resources/articles.ts">update</a>(id, { ...params }) -> Article</code>
- <code title="get /articles">client.articles.<a href="./src/resources/articles.ts">list</a>({ ...params }) -> ArticleList</code>
- <code title="delete /articles/{id}">client.articles.<a href="./src/resources/articles.ts">remove</a>(id, { ...params }) -> DeletedArticleObject</code>
- <code title="get /articles/search">client.articles.<a href="./src/resources/articles.ts">search</a>({ ...params }) -> ArticleSearchResponse</code>

# HelpCenter

Types:

- <code><a href="./src/resources/help-center/help-center.ts">HelpCenter</a></code>
- <code><a href="./src/resources/help-center/help-center.ts">HelpCenterList</a></code>

## Collections

Types:

- <code><a href="./src/resources/help-center/collections.ts">Collection</a></code>
- <code><a href="./src/resources/help-center/collections.ts">CollectionList</a></code>
- <code><a href="./src/resources/help-center/collections.ts">DeletedCollection</a></code>

Methods:

- <code title="post /help_center/collections">client.helpCenter.collections.<a href="./src/resources/help-center/collections.ts">create</a>({ ...params }) -> Collection</code>
- <code title="get /help_center/collections/{id}">client.helpCenter.collections.<a href="./src/resources/help-center/collections.ts">retrieve</a>(id, { ...params }) -> Collection</code>
- <code title="put /help_center/collections/{id}">client.helpCenter.collections.<a href="./src/resources/help-center/collections.ts">update</a>(id, { ...params }) -> Collection</code>
- <code title="get /help_center/collections">client.helpCenter.collections.<a href="./src/resources/help-center/collections.ts">list</a>({ ...params }) -> CollectionList</code>
- <code title="delete /help_center/collections/{id}">client.helpCenter.collections.<a href="./src/resources/help-center/collections.ts">delete</a>(id, { ...params }) -> DeletedCollection</code>

## HelpCenters

Methods:

- <code title="get /help_center/help_centers/{id}">client.helpCenter.helpCenters.<a href="./src/resources/help-center/help-centers.ts">retrieve</a>(id, { ...params }) -> HelpCenter</code>
- <code title="get /help_center/help_centers">client.helpCenter.helpCenters.<a href="./src/resources/help-center/help-centers.ts">list</a>({ ...params }) -> HelpCenterList</code>

# Companies

Types:

- <code><a href="./src/resources/companies/companies.ts">CompanyList</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyScroll</a></code>
- <code><a href="./src/resources/companies/companies.ts">DeletedCompanyObject</a></code>

Methods:

- <code title="post /companies">client.companies.<a href="./src/resources/companies/companies.ts">create</a>({ ...params }) -> Company</code>
- <code title="get /companies/{id}">client.companies.<a href="./src/resources/companies/companies.ts">retrieve</a>(id, { ...params }) -> Company</code>
- <code title="put /companies/{id}">client.companies.<a href="./src/resources/companies/companies.ts">update</a>(id, { ...params }) -> Company</code>
- <code title="post /companies/list">client.companies.<a href="./src/resources/companies/companies.ts">list</a>({ ...params }) -> CompanyList</code>
- <code title="delete /companies/{id}">client.companies.<a href="./src/resources/companies/companies.ts">delete</a>(id, { ...params }) -> DeletedCompanyObject</code>
- <code title="get /companies">client.companies.<a href="./src/resources/companies/companies.ts">retrieveList</a>({ ...params }) -> CompanyList</code>
- <code title="get /companies/scroll">client.companies.<a href="./src/resources/companies/companies.ts">scroll</a>({ ...params }) -> CompanyScroll | null</code>

## Contacts

Types:

- <code><a href="./src/resources/companies/contacts.ts">CompanyAttachedContacts</a></code>

Methods:

- <code title="get /companies/{id}/contacts">client.companies.contacts.<a href="./src/resources/companies/contacts.ts">list</a>(id, { ...params }) -> CompanyAttachedContacts</code>

## Segments

Types:

- <code><a href="./src/resources/companies/segments.ts">CompanyAttachedSegments</a></code>

Methods:

- <code title="get /companies/{id}/segments">client.companies.segments.<a href="./src/resources/companies/segments.ts">list</a>(id, { ...params }) -> CompanyAttachedSegments</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts/contacts.ts">ContactArchived</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactDeleted</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactList</a></code>
- <code><a href="./src/resources/contacts/contacts.ts">ContactUnarchived</a></code>

Methods:

- <code title="post /contacts">client.contacts.<a href="./src/resources/contacts/contacts.ts">create</a>({ ...params }) -> Contact</code>
- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts/contacts.ts">retrieve</a>(id, { ...params }) -> Contact</code>
- <code title="put /contacts/{id}">client.contacts.<a href="./src/resources/contacts/contacts.ts">update</a>(id, { ...params }) -> Contact</code>
- <code title="get /contacts">client.contacts.<a href="./src/resources/contacts/contacts.ts">list</a>({ ...params }) -> ContactList</code>
- <code title="delete /contacts/{id}">client.contacts.<a href="./src/resources/contacts/contacts.ts">delete</a>(id, { ...params }) -> ContactDeleted</code>
- <code title="post /contacts/{id}/archive">client.contacts.<a href="./src/resources/contacts/contacts.ts">archive</a>(id, { ...params }) -> ContactArchived</code>
- <code title="post /contacts/merge">client.contacts.<a href="./src/resources/contacts/contacts.ts">merge</a>({ ...params }) -> Contact</code>
- <code title="post /contacts/search">client.contacts.<a href="./src/resources/contacts/contacts.ts">search</a>({ ...params }) -> ContactList</code>
- <code title="post /contacts/{id}/unarchive">client.contacts.<a href="./src/resources/contacts/contacts.ts">unarchive</a>(id, { ...params }) -> ContactUnarchived</code>

## Companies

Types:

- <code><a href="./src/resources/contacts/companies.ts">ContactAttachedCompanies</a></code>

Methods:

- <code title="post /contacts/{contact_id}/companies">client.contacts.companies.<a href="./src/resources/contacts/companies.ts">create</a>(contactId, { ...params }) -> Company</code>
- <code title="get /contacts/{contact_id}/companies">client.contacts.companies.<a href="./src/resources/contacts/companies.ts">list</a>(contactId, { ...params }) -> ContactAttachedCompanies</code>
- <code title="delete /contacts/{contact_id}/companies/{id}">client.contacts.companies.<a href="./src/resources/contacts/companies.ts">delete</a>(contactId, id, { ...params }) -> Company</code>

## Notes

Types:

- <code><a href="./src/resources/contacts/notes.ts">NoteList</a></code>

Methods:

- <code title="post /contacts/{id}/notes">client.contacts.notes.<a href="./src/resources/contacts/notes.ts">create</a>(id, { ...params }) -> Note</code>
- <code title="get /contacts/{id}/notes">client.contacts.notes.<a href="./src/resources/contacts/notes.ts">list</a>(id, { ...params }) -> NoteList</code>

## Segments

Types:

- <code><a href="./src/resources/contacts/segments.ts">ContactSegments</a></code>

Methods:

- <code title="get /contacts/{contact_id}/segments">client.contacts.segments.<a href="./src/resources/contacts/segments.ts">list</a>(contactId, { ...params }) -> ContactSegments</code>

## Subscriptions

Types:

- <code><a href="./src/resources/contacts/subscriptions.ts">SubscriptionType</a></code>

Methods:

- <code title="post /contacts/{contact_id}/subscriptions">client.contacts.subscriptions.<a href="./src/resources/contacts/subscriptions.ts">create</a>(contactId, { ...params }) -> SubscriptionType</code>
- <code title="get /contacts/{contact_id}/subscriptions">client.contacts.subscriptions.<a href="./src/resources/contacts/subscriptions.ts">list</a>(contactId, { ...params }) -> SubscriptionTypeList</code>
- <code title="delete /contacts/{contact_id}/subscriptions/{id}">client.contacts.subscriptions.<a href="./src/resources/contacts/subscriptions.ts">delete</a>(contactId, id, { ...params }) -> SubscriptionType</code>

## Tags

Methods:

- <code title="post /contacts/{contact_id}/tags">client.contacts.tags.<a href="./src/resources/contacts/tags.ts">create</a>(contactId, { ...params }) -> Tag</code>
- <code title="get /contacts/{contact_id}/tags">client.contacts.tags.<a href="./src/resources/contacts/tags.ts">list</a>(contactId, { ...params }) -> TagList</code>
- <code title="delete /contacts/{contact_id}/tags/{id}">client.contacts.tags.<a href="./src/resources/contacts/tags.ts">delete</a>(contactId, id, { ...params }) -> Tag</code>

# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationSearchResponse</a></code>

Methods:

- <code title="post /conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">create</a>({ ...params }) -> Message</code>
- <code title="get /conversations/{id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">retrieve</a>(id, { ...params }) -> Conversation</code>
- <code title="put /conversations/{id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">update</a>(id, { ...params }) -> Conversation</code>
- <code title="get /conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">list</a>({ ...params }) -> ConversationListResponsesCursorPagination</code>
- <code title="post /conversations/{id}/convert">client.conversations.<a href="./src/resources/conversations/conversations.ts">convert</a>(id, { ...params }) -> Ticket | null</code>
- <code title="post /conversations/redact">client.conversations.<a href="./src/resources/conversations/conversations.ts">redact</a>({ ...params }) -> Conversation</code>
- <code title="post /conversations/search">client.conversations.<a href="./src/resources/conversations/conversations.ts">search</a>({ ...params }) -> ConversationSearchResponse</code>

## Tags

Methods:

- <code title="post /conversations/{conversation_id}/tags">client.conversations.tags.<a href="./src/resources/conversations/tags.ts">create</a>(conversationId, { ...params }) -> Tag</code>
- <code title="delete /conversations/{conversation_id}/tags/{id}">client.conversations.tags.<a href="./src/resources/conversations/tags.ts">delete</a>(conversationId, id, { ...params }) -> Tag</code>

## Reply

Methods:

- <code title="post /conversations/{id}/reply">client.conversations.reply.<a href="./src/resources/conversations/reply.ts">create</a>(id, { ...params }) -> Conversation</code>

## Parts

Methods:

- <code title="post /conversations/{id}/parts">client.conversations.parts.<a href="./src/resources/conversations/parts.ts">create</a>(id, { ...params }) -> Conversation</code>

## RunAssignmentRules

Methods:

- <code title="post /conversations/{id}/run_assignment_rules">client.conversations.runAssignmentRules.<a href="./src/resources/conversations/run-assignment-rules.ts">create</a>(id, { ...params }) -> Conversation</code>

## Customers

Methods:

- <code title="post /conversations/{id}/customers">client.conversations.customers.<a href="./src/resources/conversations/customers.ts">create</a>(id, { ...params }) -> Conversation</code>
- <code title="delete /conversations/{conversation_id}/customers/{contact_id}">client.conversations.customers.<a href="./src/resources/conversations/customers.ts">delete</a>(conversationId, contactId, { ...params }) -> Conversation</code>

# DataAttributes

Types:

- <code><a href="./src/resources/data-attributes.ts">DataAttribute</a></code>
- <code><a href="./src/resources/data-attributes.ts">DataAttributeList</a></code>

Methods:

- <code title="post /data_attributes">client.dataAttributes.<a href="./src/resources/data-attributes.ts">create</a>({ ...params }) -> DataAttribute</code>
- <code title="put /data_attributes/{id}">client.dataAttributes.<a href="./src/resources/data-attributes.ts">update</a>(id, { ...params }) -> DataAttribute</code>
- <code title="get /data_attributes">client.dataAttributes.<a href="./src/resources/data-attributes.ts">list</a>({ ...params }) -> DataAttributeList</code>

# DataEvents

Types:

- <code><a href="./src/resources/data-events.ts">DataEventSummary</a></code>

Methods:

- <code title="post /events">client.dataEvents.<a href="./src/resources/data-events.ts">create</a>({ ...params }) -> void</code>
- <code title="get /events">client.dataEvents.<a href="./src/resources/data-events.ts">list</a>({ ...params }) -> DataEventSummary</code>
- <code title="post /events/summaries">client.dataEvents.<a href="./src/resources/data-events.ts">summaries</a>({ ...params }) -> void</code>

# DataExports

Types:

- <code><a href="./src/resources/data-exports.ts">DataExport</a></code>

Methods:

- <code title="post /export/content/data">client.dataExports.<a href="./src/resources/data-exports.ts">contentData</a>({ ...params }) -> DataExport</code>

# Export

Methods:

- <code title="post /export/cancel/{job_identifier}">client.export.<a href="./src/resources/export/export.ts">cancel</a>(jobIdentifier, { ...params }) -> DataExport</code>

## Content

### Data

Methods:

- <code title="get /export/content/data/{job_identifier}">client.export.content.data.<a href="./src/resources/export/content/data.ts">retrieve</a>(jobIdentifier, { ...params }) -> DataExport</code>

# Download

## Content

### Data

Methods:

- <code title="get /download/content/data/{job_identifier}">client.download.content.data.<a href="./src/resources/download/content/data.ts">retrieve</a>(jobIdentifier, { ...params }) -> void</code>

# Messages

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> Message</code>

# News

## NewsItems

Types:

- <code><a href="./src/resources/news/news-items.ts">NewsItem</a></code>
- <code><a href="./src/resources/news/news-items.ts">NewsItemDeleteResponse</a></code>

Methods:

- <code title="post /news/news_items">client.news.newsItems.<a href="./src/resources/news/news-items.ts">create</a>({ ...params }) -> NewsItem</code>
- <code title="get /news/news_items/{id}">client.news.newsItems.<a href="./src/resources/news/news-items.ts">retrieve</a>(id, { ...params }) -> NewsItem</code>
- <code title="put /news/news_items/{id}">client.news.newsItems.<a href="./src/resources/news/news-items.ts">update</a>(id, { ...params }) -> NewsItem</code>
- <code title="get /news/news_items">client.news.newsItems.<a href="./src/resources/news/news-items.ts">list</a>({ ...params }) -> PaginatedResponse</code>
- <code title="delete /news/news_items/{id}">client.news.newsItems.<a href="./src/resources/news/news-items.ts">delete</a>(id, { ...params }) -> NewsItemDeleteResponse</code>

## Newsfeeds

Types:

- <code><a href="./src/resources/news/newsfeeds/newsfeeds.ts">Newsfeed</a></code>

Methods:

- <code title="get /news/newsfeeds/{id}">client.news.newsfeeds.<a href="./src/resources/news/newsfeeds/newsfeeds.ts">retrieve</a>(id, { ...params }) -> Newsfeed</code>
- <code title="get /news/newsfeeds">client.news.newsfeeds.<a href="./src/resources/news/newsfeeds/newsfeeds.ts">list</a>({ ...params }) -> PaginatedResponse</code>

### Items

Methods:

- <code title="get /news/newsfeeds/{id}/items">client.news.newsfeeds.items.<a href="./src/resources/news/newsfeeds/items.ts">list</a>(id, { ...params }) -> PaginatedResponse</code>

# Notes

Methods:

- <code title="get /notes/{id}">client.notes.<a href="./src/resources/notes.ts">retrieve</a>(id, { ...params }) -> Note</code>

# Segments

Types:

- <code><a href="./src/resources/segments.ts">Segment</a></code>
- <code><a href="./src/resources/segments.ts">SegmentList</a></code>

Methods:

- <code title="get /segments/{id}">client.segments.<a href="./src/resources/segments.ts">retrieve</a>(id, { ...params }) -> Segment</code>
- <code title="get /segments">client.segments.<a href="./src/resources/segments.ts">list</a>({ ...params }) -> SegmentList</code>

# SubscriptionTypes

Methods:

- <code title="get /subscription_types">client.subscriptionTypes.<a href="./src/resources/subscription-types.ts">list</a>({ ...params }) -> SubscriptionTypeList</code>

# PhoneCallRedirects

Types:

- <code><a href="./src/resources/phone-call-redirects.ts">PhoneSwitch</a></code>

Methods:

- <code title="post /phone_call_redirects">client.phoneCallRedirects.<a href="./src/resources/phone-call-redirects.ts">create</a>({ ...params }) -> PhoneSwitch | null</code>

# Tags

Methods:

- <code title="get /tags/{id}">client.tags.<a href="./src/resources/tags.ts">retrieve</a>(id, { ...params }) -> Tag</code>
- <code title="get /tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagList</code>
- <code title="delete /tags/{id}">client.tags.<a href="./src/resources/tags.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /tags">client.tags.<a href="./src/resources/tags.ts">createOrUpdate</a>({ ...params }) -> Tag</code>

# Teams

Types:

- <code><a href="./src/resources/teams.ts">Team</a></code>
- <code><a href="./src/resources/teams.ts">TeamList</a></code>

Methods:

- <code title="get /teams/{id}">client.teams.<a href="./src/resources/teams.ts">retrieve</a>(id, { ...params }) -> Team</code>
- <code title="get /teams">client.teams.<a href="./src/resources/teams.ts">list</a>({ ...params }) -> TeamList</code>

# TicketTypes

Types:

- <code><a href="./src/resources/ticket-types/ticket-types.ts">TicketType</a></code>
- <code><a href="./src/resources/ticket-types/ticket-types.ts">TicketTypeList</a></code>

Methods:

- <code title="post /ticket_types">client.ticketTypes.<a href="./src/resources/ticket-types/ticket-types.ts">create</a>({ ...params }) -> TicketType | null</code>
- <code title="get /ticket_types/{id}">client.ticketTypes.<a href="./src/resources/ticket-types/ticket-types.ts">retrieve</a>(id, { ...params }) -> TicketType | null</code>
- <code title="put /ticket_types/{id}">client.ticketTypes.<a href="./src/resources/ticket-types/ticket-types.ts">update</a>(id, { ...params }) -> TicketType | null</code>
- <code title="get /ticket_types">client.ticketTypes.<a href="./src/resources/ticket-types/ticket-types.ts">list</a>({ ...params }) -> TicketTypeList</code>

## Attributes

Methods:

- <code title="post /ticket_types/{ticket_type_id}/attributes">client.ticketTypes.attributes.<a href="./src/resources/ticket-types/attributes.ts">create</a>(ticketTypeId, { ...params }) -> TicketTypeAttribute | null</code>
- <code title="put /ticket_types/{ticket_type_id}/attributes/{id}">client.ticketTypes.attributes.<a href="./src/resources/ticket-types/attributes.ts">update</a>(ticketTypeId, id, { ...params }) -> TicketTypeAttribute | null</code>

# Tickets

Types:

- <code><a href="./src/resources/tickets/tickets.ts">TicketList</a></code>
- <code><a href="./src/resources/tickets/tickets.ts">TicketReply</a></code>

Methods:

- <code title="post /tickets">client.tickets.<a href="./src/resources/tickets/tickets.ts">create</a>({ ...params }) -> Ticket | null</code>
- <code title="post /tickets/{id}/reply">client.tickets.<a href="./src/resources/tickets/tickets.ts">reply</a>(id, { ...params }) -> TicketReply</code>
- <code title="get /tickets/{id}">client.tickets.<a href="./src/resources/tickets/tickets.ts">retrieveById</a>(id, { ...params }) -> Ticket | null</code>
- <code title="post /tickets/search">client.tickets.<a href="./src/resources/tickets/tickets.ts">search</a>({ ...params }) -> TicketList</code>
- <code title="put /tickets/{id}">client.tickets.<a href="./src/resources/tickets/tickets.ts">updateById</a>(id, { ...params }) -> Ticket | null</code>

## Tags

Methods:

- <code title="post /tickets/{ticket_id}/tags">client.tickets.tags.<a href="./src/resources/tickets/tags.ts">create</a>(ticketId, { ...params }) -> Tag</code>
- <code title="delete /tickets/{ticket_id}/tags/{id}">client.tickets.tags.<a href="./src/resources/tickets/tags.ts">remove</a>(ticketId, id, { ...params }) -> Tag</code>

# Visitors

Types:

- <code><a href="./src/resources/visitors.ts">Visitor</a></code>
- <code><a href="./src/resources/visitors.ts">VisitorDeletedObject</a></code>

Methods:

- <code title="get /visitors">client.visitors.<a href="./src/resources/visitors.ts">retrieve</a>({ ...params }) -> Visitor | null</code>
- <code title="put /visitors">client.visitors.<a href="./src/resources/visitors.ts">update</a>({ ...params }) -> Visitor | null</code>
- <code title="post /visitors/convert">client.visitors.<a href="./src/resources/visitors.ts">convert</a>({ ...params }) -> Contact</code>
