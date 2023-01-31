import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "users";
const COLUMN_NAME = "email_verification_token";

export class migrations1675163317864 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME,
        type: "varchar",
        length: "100",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME);
  }
}
