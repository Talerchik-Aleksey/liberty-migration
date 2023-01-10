import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

const TABLE_NAME = "user_posts";

export class createUsersPostTable1673264463933 implements MigrationInterface {
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
            isGenerated: true,
          },
          {
            name: "user_id",
            type: "int",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "post_id",
            type: "int",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKeys(TABLE_NAME, [
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      }),
      new TableForeignKey({
        columnNames: ["post_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "posts",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME);
  }
}
