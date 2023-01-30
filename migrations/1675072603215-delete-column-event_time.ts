import { MigrationInterface, QueryRunner } from "typeorm";

const TABLE_NAME = "posts";
const COLUMN_NAME = "event_time";

export class deleteColumnEventTime1675072603215 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${TABLE_NAME} DROP COLUMN ${COLUMN_NAME}`
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${TABLE_NAME} ADD COLUMN ${COLUMN_NAME} type`
    );
  }
}
