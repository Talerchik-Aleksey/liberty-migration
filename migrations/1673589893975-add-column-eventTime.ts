import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "posts";
const COLUMN_NAME = "event_time";

export class addColumnEventTime1673589893975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME,
        type: "timestamp with time zone",
        isNullable: false,
        default: "CURRENT_TIMESTAMP",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME);
  }
}
