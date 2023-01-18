import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

const TABLE_NAME = "thread-messages";

export class createThreadsMessagesTable1674039173462
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: "id",
            type: "uuid",
            isNullable: false,
            isUnique: true,
            isPrimary: true,
          },
          {
            name: "thread_id",
            type: "uuid",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "user_id",
            type: "int",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "message",
            type: "text",
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
        columnNames: ["thread_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "threads",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME);
  }
}
