# intercom-node
> Official Node bindings to the Intercom API

[![Build Status](https://travis-ci.org/intercom/intercom-node.svg?branch=master)](https://travis-ci.org/intercom/intercom-node)

[![npm version](https://badge.fury.io/js/intercom-client.svg)](http://badge.fury.io/js/intercom-client)

## Installation

```bash
npm install intercom-client
```

## Testing

```bash
npm test
```

## Running the code locally

Compile using babel:

```bash
gulp babel
```

Require Intercom:

```node
var Intercom = require('./dist/index');
```

## Usage

Require Intercom:

```node
var Intercom = require('intercom-client');
```

Create a client:

```node
var client = new Intercom.Client('app_id', 'app_api_key');

// Or

var client = new Intercom.Client({ appId: 'app_id', appApiKey: 'app_api_key' });
```

## Callbacks

This client library supports two kinds of callbacks:

```node
client.users.list(function (d) {
  // d is the response from the server
});

// Or

client.users.list(function (err, d) {
  // err is an error response object, or null
  // d is a successful response object, or null
});
```

## Promises

This client library also supports using Promises instead of callbacks by calling `usePromises` on the client object:

```node
let client = new Client('foo', 'bar').usePromises();
client.users.create({ email: 'foo@bar.com' }).then(function (r) {
  // ...
});
```

## Users

```node
// Create/update a user
client.users.create({ email: 'jayne@serenity.io' }, function (r) {
  console.log(r);
});
```

```node
// List users
client.users.list(callback);
```

```node
// List users by tag or segment
client.users.listBy({ tag_id: 'haven' }, callback);
```

```node
// Find user by id
client.users.find({ id: '55b9eaf' }, callback);

// Find user by user_id
client.users.find({ user_id: 'foobar' }, callback);

// Find user by email
client.users.find({ email: 'jayne@serenity.io' }, callback);
```

```node
// Delete user by id
client.users.delete({ id: '1234' }, callback);
```

## Leads

```node
// Create a contact
client.leads.create(function (r) {
  console.log(r);
});
```

```node
// Update a contact by id
client.leads.update({ id: '5435345', email: 'wash@serenity.io' }, callback);
```

```node
// List contacts
client.leads.list(callback);
```

```node
// List contacts by email
client.leads.listBy({ email: 'wash@serenity.io' }, callback);
```


```node
// Find contact by id
client.leads.find({ id: '5342423' }, callback);
```

```node
// Delete contact by id
client.leads.delete({ id: '5342423' }, callback);
```

```node
// Convert Leads into Users
var conversion = {
  contact: { user_id: '1234-5678-9876' },
  user: { email: 'mal@serenity.io' }
};
client.leads.convert(conversion, callback);
```

## Companies

```node
// Create/update a company
client.companies.create({ company_id: '1234', name: 'serenity' }, function (r) {
  console.log(r);
});
```

```node
// List companies
client.companies.list(callback);
```

```node
// List companies by tag or segment
client.companies.listBy({ tag_id: 'haven' }, callback);
```

```node
// Find company by id
client.companies.find({ id: '1234' }, callback);
```

```node
// List company users
client.companies.listUsers({ id: '1234' }, callback);
```

## Events

Note: events will work when identified by 'email'.

```node
// Create a event
client.events.create({
  event_name: 'Foo',
  created_at: 1439826340,
  user_id: 'bar'
}, function (d) {
  console.log(d);
});
```

## Counts

```node
client.counts.appCounts(callback);

client.counts.conversationCounts(callback);

client.counts.conversationAdminCounts(callback);

client.counts.userTagCounts(callback);

client.counts.userSegmentCounts(callback);

client.counts.companyTagCounts(callback);

client.counts.companySegmentCounts(callback);

client.counts.companyUserCounts(callback);
```

## Admins

```node
// List admins
client.admins.list(callback);
```

## Tags

```node
// Create a tag
client.tags.create({ name: 'haven' }, callback);
```

```node
// Tag a user by id
client.tags.tag({ name: 'haven', users: [{ id: '54645654' }] }, callback);
```

```node
// Tag a company by id
client.tags.tag({ name: 'haven', companies: [{ id: '54645654' }] }, callback);
```

```node
// Untag a user by id
client.tags.untag({ name: 'haven', users: [{ id: '5345342' }] }, callback);
```

```node
// List tags
client.tags.list(callback);
```

```node
// Delete a tag by id
client.tags.delete({ id: '130963' }, callback);
```

## Segments

```node
// List segments
client.segments.list(callback);
```

```node
// Find segment by id
client.segments.find({ id: '55719a4a' }, callback);
```

## Bulk users

The Bulk APIs allow for the asynchronous creation and deletion of users:

```node
client.users.bulk([
  { create: { email: 'wash@serenity.io' }},
  { create: { email: 'mal@serenity.io'}}
], callback);
```

## Bulk events

```node
var event = {
  event_name: 'foo',
  created: 1438944979,
  email: 'wash@serenity.io',
  metadata: { bar: 'baz' }
};

client.events.bulk([{ create: event }], callback);
```

## Messages

```node
// Admin initiated messages:
// Sending an email to a User
var message = {
  message_type: "email",
  subject: "Hey",
  body: "Ponies, cute small horses or something more sinister?",
  template: "plain",
  from: {
    type: "admin",
    id: "21599"
  },
  to: {
    type: "user",
    id: "55c1ce1def857c31f80001af"
  }
}

client.messages.create(message, callback);
```

```node
// Creating a user-initiated message:
var message = {
  from: {
    type: "user",
    id: "55c1ce1def857c31f80001af"
  },
  body: "Howdy"
}

client.messages.create(message, callback);
```

## Conversations

Listing conversations ([documentation](https://doc.intercom.io/api/#list-conversations)):

```node
client.conversations.list({ type: 'admin', admin_id: 21599 }, callback);
```


```node
// Fetch a conversation
client.conversations.find({ id: '1062682196' }, callback);
```

```node
// Reply to a conversation
var reply = {
  id: '1039067180',
  intercom_user_id: '55b26822ce97179e52001334',
  body: 'Some reply :)',
  type: 'user',
  message_type: 'comment'
};

client.conversations.reply(reply, callback);

// Reply to a conversation with attachments
var reply = {
  id: '1039067180',
  intercom_user_id: '55b26822ce97179e52001334',
  body: 'Some reply :)',
  type: 'user',
  message_type: 'comment',
  attachment_urls: ['http://www.example.com/myattachment.jpg']
};

client.conversations.reply(reply, callback);
```

```node
// Mark a conversation as read
client.conversations.markAsRead({ id: '1039067180' }, callback);
```

## Notes

```node
// Create a note
var note = {
  admin_id: 21599,
  body: 'Hello notes!',
  user: {
    id: '55b26822ce97179e52001334'
  }
};

client.notes.create(note, callback);
```

```node
// List notes by user
client.notes.list({ email: 'bob@intercom.io' }, callback);
```

```node
//Fetch a note
client.notes.find({ id: '3342887' }, callback);
```

## Pagination

When listing, the Intercom API may return a pagination object:

```json
{
  "pages": {
    "next": "..."
  }
}
```

You can grab the next page of results using the client:

```
client.nextPage(response.pages, callback);
```

## Secure mode

`intercom-node` provides a helper for using [Secure Mode](https://docs.intercom.io/configuring-intercom/enable-secure-mode):

```
import {SecureMode} from 'intercom-client';

SecureMode.userHash({secretKey: 's3cre7', identifier: 'jayne@serenity.io'});
```

## License

Apache-2.0
