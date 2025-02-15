# New Feature Workflow

### Update the DB schema
Go to `services/db/prisma/schema.prisma` and add the new tables or fields.

### Create new migration
Run `yarn migrate describe_the_migration` to create a new migration (this will also update the local db)

### Update Hasura metadata
Go to `services/hasura/` - use the `hasura metadata reload` to resync with the local db's schema.

### Update Hasura via the GUI
Do whatever you need to do in the GUI.

### export the metadata
Run `hasura metadata export` to export the metadata.


