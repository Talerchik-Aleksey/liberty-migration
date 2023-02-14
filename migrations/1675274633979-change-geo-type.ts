import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE = "posts";
const COLUMN_NAME = "geo";

export class migrations1676274633979 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE ${TABLE} 
      DROP COLUMN ${COLUMN_NAME};
    `);
    await queryRunner.query(`
            ALTER TABLE posts ADD COLUMN geo geometry(Point, 4326);
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
