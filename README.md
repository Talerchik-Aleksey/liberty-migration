# Migrations

Setup database settings inside `data-source.ts` file

## Usage

Create migration: `npm run migration:create --name=example-migration`

Run migrations: `npm run migration:run`

Revert last migration: `npm run migration:revert`

Auto-generate post-refactoring migration (useful to check if nothing was missed after writing latest migration): `npm run migration:generate`