# New Feature Workflow

### Update the DB schema
go to `services/db/prisma/schema.prisma` and add the new tables or fields.

### Create new migration
run `yarn migrate describe_the_migration` to create a new migration (this will also update the local db)




