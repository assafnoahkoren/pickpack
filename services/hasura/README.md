Make sure to have the following env variables in the .env file:
```
HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey
```

### Apply Metadata
```sh
hasura metadata apply
```

### export metadata
```sh
hasura metadata export
```

### pick up changes in the db
```sh
hasura metadata reload
```
