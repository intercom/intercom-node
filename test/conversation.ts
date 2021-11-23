import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';
import { AssignToConversationMessageType, AssignToConversationUserType, CloseConversationMessageType, CloseConversationType, OpenConversationMessageType, Operators, Order, RedactConversationPartType, ReplyToConversationMessageType, ReplyToConversationUserType, SnoozeConversationMessageType, SortBy } from '../lib/conversation';

describe.only('conversations', () => {
  it('should create a conversation', async () => {
    const message = {
      from: {
        type: 'user',
        id: '536e564f316c83104c000020'
      },
      body: 'Hello darkness my old friend',
    };

    const expectedReply = {
      "type": "user_message",
      "id": "2001",
      "created_at": 1401917202,
      "body" : "Hello darkness my old friend",
      "message_type": "inapp",
      "conversation_id": "36000324324"
    }

    nock('https://api.intercom.io').post('/conversations', message).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.create({data: message});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should retrieve a conversation as is', async () => {
    const id = '536e564f316c83104c000020';

    const expectedReply = {}

    nock('https://api.intercom.io').get(`/conversations/${id}`).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.find({id});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should retrieve a conversation as plain text', async () => {
    const id = '536e564f316c83104c000020';

    const expectedReply = {}

    nock('https://api.intercom.io').get(`/conversations/${id}`).query({display_as: 'plaintext'}).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.find({id,  query: {display_as: 'plaintext'}});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should update a conversation', async () => {
    const id = '536e564f316c83104c000020';

    const requestBody = {
      read: false,
      custom_attributes: {
        yey: 'in the bay'
      }
    }
    const expectedReply = {}

    nock('https://api.intercom.io').put(`/conversations/${id}`, requestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.update({id, data: requestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should reply by user to a conversation by id', async () => {
    const id = '536e564f316c83104c000020';

    const userRequestBody = {
      message_type: ReplyToConversationMessageType.COMMENT,
      type: ReplyToConversationUserType.USER,
      body: 'blablbalba',
      intercom_user_id: id,
      attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/reply`, userRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.replyById({id, data: userRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should reply by admin to a conversation by id', async () => {
    const id = '536e564f316c83104c000020';

    const adminRequestBody = {
      admin_id: id,
      message_type: ReplyToConversationMessageType.NOTE,
      type: ReplyToConversationUserType.ADMIN,
      body: '<b>blablbalba</b>',
      attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/reply`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.replyById({id, data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should reply by user to last conversation', async () => {
    const id = '536e564f316c83104c000020';

    const userRequestBody = {
      message_type: ReplyToConversationMessageType.COMMENT,
      type: ReplyToConversationUserType.USER,
      body: 'blablbalba',
      intercom_user_id: id,
      attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/last/reply`, userRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.replyByLast({data: userRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should reply by admin to last conversation', async () => {
    const id = '536e564f316c83104c000020';

    const adminRequestBody = {
      admin_id: id,
      message_type: ReplyToConversationMessageType.NOTE,
      type: ReplyToConversationUserType.ADMIN,
      body: '<b>blablbalba</b>',
      attachment_urls: ['https://definitely-sfw-site.org/bebra.jpg']
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/last/reply`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.replyByLast({data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should assign a conversation as team without assignment_rules', async () => {
    const id = '536e564f316c83104c000020';

    const userRequestBody = {
      message_type: AssignToConversationMessageType.ASSIGNMENT,
      type: AssignToConversationUserType.TEAM,
      assignee_id: id,
      body: '<b>blablbalba</b>',
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}`, userRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.assign({id, data: userRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should assign a conversation as team with assignment_rules', async () => {
    const id = '536e564f316c83104c000020';

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/run_assignment_rules`).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.assign({id, withRunningAssignmentRules: true});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should snooze a conversation', async () => {
    // TO-DO: refactor request body in whole file
    const id = '536e564f316c83104c000020';

    const adminRequestBody = {
      message_type: SnoozeConversationMessageType.SNOOZED,
      admin_id: id,
      snoozed_until: "1501512795"
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/reply`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.snooze({id, data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should close a conversation', async () => {
    const id = '536e564f316c83104c000020';

    const adminRequestBody = {
      message_type: CloseConversationMessageType.CLOSED,
      type: CloseConversationType.ADMIN,
      admin_id: id,
      body: "Closed conversation because of X."
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/parts`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.close({id, data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should open a conversation', async () => {
    const id = '536e564f316c83104c000020';

    const adminRequestBody = {
      message_type: OpenConversationMessageType.OPEN,
      admin_id: id,
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/parts`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.open({id, data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should attach a contact to the conversation as admin', async () => {
    const id = '536e564f316c83104c000020';

    const adminRequestBody = {
      admin_id: id,
      customer: {
        intercom_user_id: id
      }
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/customers`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.attachContact({id, data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should attach a contact to the conversation as contact', async () => {
    const id = '536e564f316c83104c000020';

    const contactRequestBody = {
      user_id: id,
      customer: {
        intercom_user_id: id
      }
    }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/${id}/customers`, contactRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.attachContact({id, data: contactRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should detach a contact from the conversation as admin', async () => {
    const id = '536e564f316c83104c000020';
    const contactId = '536e564f316c83104c000021'
    const conversationId = '536e564f316c83104c000022'

    const adminRequestBody = {
      admin_id: id,
    }

    const expectedReply = {}

    nock('https://api.intercom.io').delete(`/conversations/${conversationId}/customers/${contactId}`, adminRequestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.detachContact({conversationId, contactId, data: adminRequestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should search for conversations using filters', async () => {
    const requestBody =
      {
        "query":  {
           "operator": Operators.AND,
           "value": [
             {
               "operator": Operators.AND,
               "value": [
                 {
                   "field": "updated_at",
                   "operator": Operators.GREATER_THAN,
                   "value": 1560436650
                 },
                 {
                   "field": "conversation_rating.rating",
                   "operator": Operators.EQUALS,
                   "value": 1
                 }
               ]
             },
             {
               "operator": Operators.OR,
               "value": [
                 {
                   "field": "updated_at",
                   "operator": Operators.GREATER_THAN,
                   "value": 1560436650
                 },
                 {
                   "field": "conversation_rating.rating",
                   "operator": Operators.EQUALS,
                   "value": 2
                 }
               ]
             }
           ]
         }
       }

    const expectedReply = {}

    nock('https://api.intercom.io').post(`/conversations/search`, requestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.search({data: requestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should list all conversations', async () => {
    const expectedReply = {}

    nock('https://api.intercom.io').get(`/conversations?order=desc&sort=updated_at`).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.list({query: {order: Order.DESC, sort: SortBy.UpdatedAt}});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });

  it('should redact a conversation part', async () => {
    const conversation_id = '536e564f316c83104c000020';
    const conversation_part_id = '536e564f316c83104c000021';

    const requestBody = {
      type: RedactConversationPartType.CONVERSATION_PART,
      conversation_id,
      conversation_part_id,
    }
    const expectedReply = {}

    nock('https://api.intercom.io').post('/conversations/redact', requestBody).reply(200, expectedReply);

    const client = new Client('foo', 'bar');

    const response = await client.conversations.redactConversationPart({data: requestBody});

    assert.equal(200, response?.status);
    assert.deepStrictEqual(expectedReply, response?.data);
  });
});
