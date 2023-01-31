import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeDefaultValue1675161338280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT new_default_value`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
