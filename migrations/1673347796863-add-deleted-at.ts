import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "users";

export class addDeletedAt1673347796863 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: "deleted_at",
        type: "timestamp with time zone",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME, "deleted_at");
  }
}
