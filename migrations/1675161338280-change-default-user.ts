import { MigrationInterface, QueryRunner } from "typeorm";

const TABLE_NAME = "users";
const COLUMN_NAME = "is_enabled";
const CURRENT_VALUE = "true";
const NEW_DEFAULT_VALUE = "false";

export class ChangeDefaultValue1675161338280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${TABLE_NAME} ALTER COLUMN ${COLUMN_NAME} SET DEFAULT ${NEW_DEFAULT_VALUE}`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${TABLE_NAME} ALTER COLUMN ${COLUMN_NAME} SET DEFAULT ${CURRENT_VALUE}`
    );
  }
}
