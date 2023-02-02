import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "posts";
const COLUMN_NAME = "is_blocked";

export class migrations1675336153544 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME,
        type: "boolean",
        isNullable: false,
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
