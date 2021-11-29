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
