import { MigrationInterface, QueryRunner } from "typeorm";

const TABLE = "posts";
const COLUMN_NAME = "geo";
const GEO_TYPE = "geometry(Point, 4326)";

export class migrations1676274633979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE ${TABLE} 
      DROP COLUMN ${COLUMN_NAME};
    `);
    await queryRunner.query(`
            ALTER TABLE ${TABLE} ADD COLUMN ${COLUMN_NAME} ${GEO_TYPE};
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE ${TABLE} 
      DROP COLUMN ${COLUMN_NAME};
    `);
    await queryRunner.query(`
      ALTER TABLE ${TABLE} 
      ADD COLUMN ${COLUMN_NAME} VARCHAR(100);
    `);
  }
}
