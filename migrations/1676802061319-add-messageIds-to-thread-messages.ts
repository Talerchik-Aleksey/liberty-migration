import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "thread_messages";
const COLUMN_NAME_SENT_MSG_ID = "sent_message_id";
const COLUMN_NAME_RECEIVED_MSG_ID = "received_message_id";

export class addMessageIdsToThreadMessages1676802061319 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME_SENT_MSG_ID,
        type: "varchar",
        length: "255",
        isNullable: true,
        default: null,
      })
    );
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME_RECEIVED_MSG_ID,
        type: "varchar",
        length: "255",
        isNullable: true,
        default: null,
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME_SENT_MSG_ID);
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME_RECEIVED_MSG_ID);
  }
}
