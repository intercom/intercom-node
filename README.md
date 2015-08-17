# intercom-node
> Official Node bindings to the Intercom API

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

## License

Apache-2.0
