import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "thread_messages";
const COLUMN_NAME_MSG_ID = "message_id";
const COLUMN_NAME_IS_SENT = "is_sent";

export class addMessageIdToThreadMessages1676800087100 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME_MSG_ID,
        type: "varchar",
        length: "255",
        isNullable: true,
        default: null,
      })
    );
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME_IS_SENT,
        type: "boolean",
        isNullable: false,
        default: false,
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME_MSG_ID);
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME_IS_SENT);
  }
}
