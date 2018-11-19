# intercom-node
> Official Node bindings to the Intercom API

[![Circle CI](https://circleci.com/gh/intercom/intercom-node.png?style=badge)](https://circleci.com/gh/intercom/intercom-node)

[![npm version](https://badge.fury.io/js/intercom-client.svg)](http://badge.fury.io/js/intercom-client)

## Installation

[![docker_image 1](https://cloud.githubusercontent.com/assets/15954251/17524401/5743439e-5e56-11e6-8567-d3d9da1727da.png)](https://hub.docker.com/r/intercom/sdk-images/) <br>
Try out our [Docker Image (Beta)](https://hub.docker.com/r/intercom/sdk-images/) to help you get started more quickly. <br>
It should make it easier to get setup with the SDK and start interacting with the API. <br>
(Note, this is in Beta and is for testing purposes only, it should not be used in production)

```bash
npm install intercom-client
```

**This client is intended for server side use only. Please use the [Intercom Javascript SDK](https://developers.intercom.com/v2.0/docs/intercom-javascript) for client-side operations.**

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
#### Using Access Tokens

```node
var client = new Intercom.Client({ token: 'my_token' });
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

This client library also supports using Promises instead of callbacks:

```node
client.users.create({ email: 'foo@bar.com' }).then(function (r) {
  // ...
});
```

## Request Options

This client library also supports passing in [`request` options](https://github.com/request/request#requestoptions-callback):

```node
var client = new Intercom.Client({ token: 'my_token' });
client.useRequestOpts({
  baseUrl: 'http://local.test-server.com',
  // Uses the forever-agent / http(s).Agent({keepAlive:true})
  forever: true
});
```

Note that certain request options (such as `json`, and certain `headers` names cannot be overriden).


## Users

```node
// Create a user
client.users.create({
  email: 'jayne@serenity.io',
  custom_attributes: {
    foo: 'bar'
  }
}, callback);

// Update a user
client.users.update({
  email: 'jayne@serenity.io',
  custom_attributes: {
    foo: 'bar'
  }
}, callback);
```

```node
// Create/update a user with custom attributes
client.users.create({ email: 'jayne@serenity.io', custom_attributes: { invited_friend: true } }, callback);
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
// Scroll through users list
client.users.scroll.each({}, function(res) {
  // if you return a promise from your callback, the client will only scroll
  // after this promise has resolved
  new Bluebird((resolve) => {
    setTimeout(() => {
      console.log(res.body.users.length);
      // Your custom logic
      resolve();
   }, 500)
 })
});

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
// Archive user by id (https://developers.intercom.com/intercom-api-reference/reference#archive-a-user)
client.users.archive({ id: '1234' }, callback);
```

```node
// Permanently delete a user by id (https://developers.intercom.com/intercom-api-reference/reference#delete-users)
const intercomUserId = '123'
client.users.requestPermanentDeletion(intercomUserId, callback);
```

```node
// Permanently delete a user by id in params
client.users.requestPermanentDeletionByParams({ id: '55b9eaf' }, callback);

// Permanently delete a user by user_id
client.users.requestPermanentDeletionByParams({ user_id: 'foobar' }, callback);

// Permanently delete a user by email
client.users.requestPermanentDeletionByParams({ email: 'jayne@serenity.io' }, callback);
```

## Leads

```node
// Create a contact
client.leads.create(function (r) {
  console.log(r);
});

// Create a contact with attributes
client.leads.create({ email: 'jayne@serenity.io' }, function (r) {
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
// Scroll through contacts list
client.leads.scroll.each({}, function(res) {
  // if you return a promise from your callback, the client will only scroll
  // after this promise has resolved
  new Bluebird((resolve) => {
    setTimeout(() => {
      console.log(res.body.contacts.length);
      // Your custom logic
      resolve();
   }, 500)
 })
});
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

## Visitors

```node
// Update a visitor by id
client.visitors.update({ id: '5435345', email: 'wash@serenity.io' }, callback);
```

```node
// Find visitor by id or user_id
client.visitors.find({ id: '5342423' }, callback);
client.visitors.find({ user_id: '5b868511-ca3b-4eac-8d26-cfd82a83ac76' }, callback);
```

```node
// Delete visitor by id
client.visitors.delete({ id: '5342423' }, callback);
```

```node
// Convert visitors into Users
var conversion = {
  visitor: { user_id: '1234-5678-9876' },
  user: { email: 'mal@serenity.io' },
  type: "user"
};
client.visitors.convert(conversion, callback);
```

```node
// Convert visitors into Lead
var conversion = {
  visitor: { user_id: '1234-5678-9876' },
  type: "lead"
};
client.visitors.convert(conversion, callback);
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
// Scroll through companies list
client.companies.scroll.each({}, function(res) {
  // if you return a promise from your callback, the client will only scroll
  // after this promise has resolved
  new Bluebird((resolve) => {
    setTimeout(() => {
      console.log(res.body.companies.length);
      // Your custom logic
      resolve();
   }, 500)
 })
});
```


```node
// Find company by id
client.companies.find({ id: '1234' }, callback);
```

```node
// List company users by id or company_id
client.companies.listUsers({ id: '1234' }, callback);
client.companies.listUsers({ company_id: '1234' }, callback);
```


## Events

Note: events will work when identified by 'email'. The `event_name` and `created_at` params are both required. Either `user_id` OR `email` is required.

```node
// Create a event
client.events.create({
  event_name: 'Foo',
  created_at: 1439826340,
  user_id: 'bar',
  metadata: { type: 'baz' }
}, function (d) {
  console.log(d);
});
```

```node
// List events by user
client.events.listBy({
    type: 'user',
    user_id: 'bar'
}, callback);
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

```node
// Find current admin (only works with OAuth tokens)
client.admins.me(callback);
```

```
// Find admin by ID
client.admins.find('123456789', callback);
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

Listing conversations ([documentation](https://developers.intercom.com/intercom-api-reference/reference#list-conversations)):

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
// Assign a conversation to an admin
var assignment = {
  id: '13879167940',
  type: 'admin',
  admin_id: '1309092',
  assignee_id: '1723471',
  message_type: 'assignment'
};

client.conversations.reply(assignment, callback);

// Assign a conversation to unassigned
var assignment = {
  id: '13879167940',
  type: 'admin',
  admin_id: '1309092',
  assignee_id: '0',
  message_type: 'assignment'
}

client.conversations.reply(assignment, callback);
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

```node
client.nextPage(response.pages, callback);
```

## Identity verification

`intercom-node` provides a helper for using [identity verification](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product):

``` node
import { IdentityVerification } from 'intercom-client';

IdentityVerification.userHash({secretKey: 's3cre7', identifier: 'jayne@serenity.io'});
```

## License

Apache-2.0


## Pull Requests

- **Add tests!** Your patch won't be accepted if it doesn't have tests.

- **Document any change in behaviour**. Make sure the README and any other
  relevant documentation are kept up-to-date.

- **Create topic branches**. Don't ask us to pull from your master branch.

- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests.

- **Send coherent history**. Make sure each individual commit in your pull
  request is meaningful. If you had to make multiple intermediate commits while
  developing, please squash them before sending them to us.
