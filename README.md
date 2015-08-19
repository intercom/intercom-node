# intercom-node
> Official Node bindings to the Intercom API

[![Build Status](https://travis-ci.org/intercom/intercom-node.svg?branch=master)](https://travis-ci.org/intercom/intercom-node)

## Beta

This client library is in active development, and should not be used in production software yet.

## Testing

```node
npm test
```

## Running the code locally

Compile using babel:

```
gulp babel
```

Start a repl:

```
node
```

Require Intercom:

```node
var Intercom = require('./dist/index');
```

Create a client:

```node
var client = new Intercom.Client("app_id", "app_api_key");
```

## Users

```node
// Create/update a user
client.users.create({ email: "jayne@serenity.io" }, function (r) {
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
client.users.find({ id: '1234' }, callback);
```

```node
// Delete user by id
client.users.delete({ id: '1234' }, callback);
```

## Contacts

```node
// Create a contact
client.contacts.create(function (r) {
  console.log(r);
});
```

```node
// Update a contact by id
client.contacts.update({ id: '5435345', email: 'wash@serenity.io' }, callback);
```

```node
// List contacts
client.contacts.list(callback);
```

```node
// List contacts by email
client.contacts.listBy({ email: 'wash@serenity.io' }, callback);
```


```node
// Find contact by id
client.contacts.find({ id: '5342423' }, callback);
```

```node
// Delete contact by id
client.contacts.delete({ id: '5342423' }, callback);
```

```node
// Convert Contacts into Users
var conversion = {
  contact: { user_id: '1234-5678-9876' },
  user: { email: 'mal@serenity.io' }
};
client.contacts.convert(conversion, callback);
```

## Companies

```node
// Create/update a company
client.companies.create({ company_id: "1234", name: "serenity" }, function (r) {
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

## License

Apache-2.0
