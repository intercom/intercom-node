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
this.client.appCounts(callback);

this.client.conversationCounts(callback);

this.client.conversationAdminCounts(callback);

this.client.userTagCounts(callback);

this.client.userSegmentCounts(callback);

this.client.companyTagCounts(callback);

this.client.companySegmentCounts(callback);

this.client.companyUserCounts(callback);
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
