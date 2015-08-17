# intercom-node
> Official Node bindings to the Intercom API

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
client.users.list(function (d) { console.log(d.body.users.length) });
```

```node
// List users by tag or segment
client.users.listBy({ tag_id: 'haven' }, function (d) {
  console.log(d.body.users.length)
});
```

```node
// Find user by id
client.users.find({ id: '1234' }, function (d) {
  console.log(d.body)
});
```

```node
// Delete user by id
client.users.delete({ id: '1234' }, function (d) {
  console.log(d.body)
});
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

## License

Apache-2.0
