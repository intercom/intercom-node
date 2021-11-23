# [Conversations API]

## Added

1. Method to create Conversation `conversation.create({data})`
2. New param to find Conversation – `display_as` –> `conversation.find({id, query: {display_as}})`
3. Method to update Conversation `conversation.update({id, data})`
4. Method to assign Conversaton `conversation.assign({id, data, withRunningAssignmentRules})`
5. Method to snooze Conversation `conversation.snooze({id, data})`
6. Method to close Conversation `conversation.close({id, data})`
7. Method to open Conversation `conversation.open({id, data})`
8. Method to attach contact to Conversation `conversation.attach({id, data})`
9. Method to detach contact from Conversation `conversation.detach({conversationId, contactId, data})`
10. Method to search Conversation using nested/flat filters `conversation.search({data})`
11. Method to redact Conversation's part `conversation.redactConversationPart({data})`

## Changed

1. Method to reply to conversation is now split to two different ones: 
  1.1. `replyById({id, data})`
  1.2. `replyByLast({data})`
2. Method to list conversations is now accept next object as param:
```
{
  query: {
    order: "desc",
    sort: "updated_at"
  }
}
```
