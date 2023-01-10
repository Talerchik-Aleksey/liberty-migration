import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

const TABLE_NAME = "posts";

export class createPostsTable1673263177064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: "id",
            type: "int",
            isNullable: false,
            isUnique: true,
            isPrimary: true,
          },
          {
            name: "author_id",
            type: "int",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "title",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "category",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "description",
            type: "text",
            isNullable: false,
          },
          {
            name: "is_public",
            type: "boolean",
            isNullable: false,
          },
          {
            name: "location_name",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "street",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "city",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "state",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "zip",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "geo",
            type: "varchar",
            length: "100",
            isNullable: true,
          },
          {
            name: "is_enabled",
            type: "boolean",
            isNullable: false,
            default: true,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "deleted_at",
            type: "timestamp with time zone",
            isNullable: true,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKeys(TABLE_NAME, [
        new TableForeignKey({
          columnNames: ['author_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
        }),
      ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME);
  }
}
