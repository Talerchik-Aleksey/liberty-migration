import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME = "users";
const COLUMN_NAME_LAT = "lat";
const COLUMN_NAME_LNG = "lng";

export class addColumnsLatLng1675413184439 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME_LAT,
        type: "decimal",
        precision: 8,
        scale: 6,
        default: null,
      })
    );
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: COLUMN_NAME_LNG,
        type: "decimal",
        precision: 9,
        scale: 6,
        default: null,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME_LAT);
    await queryRunner.dropColumn(TABLE_NAME, COLUMN_NAME_LNG);
  }
}
