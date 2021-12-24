# [Conversations API]

## Added

1. Method to create Conversation `conversation.create({userId, body})`
2. New param to find Conversation – `display_as` –> `conversation.find({id, inPlainText})`
3. Method to update Conversation `conversation.update({id, markRead, customAttributes})`
4. Method to assign Conversaton `conversation.assign({id, type, adminId, assigneeId, body, withRunningAssignmentRules})`
5. Method to snooze Conversation `conversation.snooze({id, adminId, snoozedUntil})`
6. Method to close Conversation `conversation.close({id, adminId, body})`
7. Method to open Conversation `conversation.open({id, adminId})`
8. Method to attach contact to Conversation:
   8.1. As admin `conversation.attachContact({id, adminId, customer})`
   8.2. As contact `conversation.attachContact({id, userId, intercomUserId, email, customer})`
9. Method to detach contact from Conversation as admin `conversation.detachContact({conversationId, contactId, adminId})`
10. Method to search Conversation using nested/flat filters `conversation.search({data})`
11. Method to redact Conversation's part `conversation.redactConversationPart({conversationId, conversationPartId, sourceId, type})`

## Changed

1. Method to reply to conversation is now split to two different ones:
   1.1. Reply by ID:
   1.1.1. `replyByIdAsUser({id, body, intercomUserId, userId, email, attachmentUrls})`
   1.1.2. `replyByIdAsAdmin({id, adminId, body, messageType, attachmentUrls})`
   1.2. Reply by last:
   1.2.1. `replyByLastAsUser({body, intercomUserId, userId, email, attachmentUrls})`
   1.2.2. `replyByLastAsAdmin({adminId, body, messageType, attachmentUrls})`
2. Method to list conversations is now accept next object as param:

```
{
  query: {
    order: "desc",
    sort: "updated_at"
  }
}
```

# [Contacts API]

## Added

1. Method to archive Contact -> `contacts.archive({id})`
2. Method to unarchive Contact -> `contacts.unarchive({id})`
3. Method to list attached companies -> `contacts.listAttachedCompanies({id})`
4. Method to list attached tags -> `contacts.listAttachedTags({id})`
5. Method to list attached segments -> `contacts.listAttachedSegments({id})`
6. Method to list attached email subscriptions -> `contacts.listAttachedEmailSubscriptions({id})`
7. Method to search Contact by filters `contacts.search({data})`

## Changed

1. Methods to create Contact:
   1.1. Create User -> `contacts.createUser({externalId phone, name, avatar, signedUpAt, lastSeenAt, ownerId, isUnsubscribedFromEmails, customAttributes})`
   1.2. Create Lead -> `contacts.createLead({phone, name, avatar, signedUpAt, lastSeenAt, ownerId, isUnsubscribedFromEmails, customAttributes})`
2. Method to find Contact –> `contact.find({id})`
3. Method to update Contact -> `contact.update({id, role, externalId, phone, name, avatar, signedUpAt, lastSeenAt, ownerId, isUnsubscribedFromMails, customAttributes})`
4. Removed `listBy` method
5. Removed `convert` method

# [Tags API]

## Added

1. Method to tag Contact -> `tags.tagContact({contactId, tagId})`
2. Method to untag Contact -> `tags.untagContact({contactId, tagId})`
3. Method to tag Conversation -> `tags.tagConversation({conversationId, tagId, adminId})`
4. Method to untag Conversation -> `tags.untagConversation({conversationId, tagId})`
5. Method to tag Companies -> `tags.tagCompanies({companiesIds, tagName})`
6. Method to untag Companies -> `tags.untagCompanies({companiesIds, tagName})`

## Changed

1. Methods to Create/Update Tag:
   1.1. Create -> `tags.create({name})`
   1.2. Update -> `tags.update({id, name})`

# [Admin API]

## Added

1. List all activities logs `admin.listAllActivities`

## Changed

1. Params for `admin.away` method -> `admin.away({adminId, enableAwayMode, enableReassignMode})`

## Removed

1. `admin.me` method.

# [Companies API]

## Added

1. Method to delete Company `companies.delete({ id })`
2. Method to attach Contact to Company `companies.attachContact({ companyId, contactId })`
3. Method to detach Contact from Company `companies.detachContact({ companyId, contactId })`
4. Method to list attached Contacts for Company `companies.listAttachedContacts({ companyId, page, perPage })`

## Changed

1. Method to create Companies `companies.create({createdAt, companyId, name, monthlySpend, plan, size, website, industry, customAttributes})`
2. Method to update Companies `companies.update({createdAt, name, monthlySpend, plan, size, website, industry, customAttributes})`
3. Method to find Company `companies.find({ name, companyId })`
4. Method to list Companies `companies.list({tagId, segmentId, page, perPage, order})`
5. Method to infinitely scroll (till the last Company) Companies `companies.scroll.each({scrollParam})`
6. Method to manually scroll Companies `companies.scroll.next({scrollParam})`
