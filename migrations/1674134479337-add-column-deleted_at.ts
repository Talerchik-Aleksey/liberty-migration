import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

const TABLE_NAME_FAVORITE_POSTS = "favorite_posts";
const TABLE_NAME_USER_POSTS = "user_posts";
const TABLE_NAME_THREADS = "threads";
const TABLE_NAME_THREAD_MESSAGES = "thread_messages";
const COLUMN_NAME = "event_time";

export class addColumnDeletedAt1674134479337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME_FAVORITE_POSTS,
      new TableColumn({
        name: COLUMN_NAME,
        type: "timestamp with time zone",
        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      TABLE_NAME_USER_POSTS,
      new TableColumn({
        name: COLUMN_NAME,
        type: "timestamp with time zone",
        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      TABLE_NAME_THREADS,
      new TableColumn({
        name: COLUMN_NAME,
        type: "timestamp with time zone",
        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      TABLE_NAME_THREAD_MESSAGES,
      new TableColumn({
        name: COLUMN_NAME,
        type: "timestamp with time zone",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(TABLE_NAME_FAVORITE_POSTS, COLUMN_NAME);
    await queryRunner.dropColumn(TABLE_NAME_USER_POSTS, COLUMN_NAME);
    await queryRunner.dropColumn(TABLE_NAME_THREADS, COLUMN_NAME);
    await queryRunner.dropColumn(TABLE_NAME_THREAD_MESSAGES, COLUMN_NAME);
  }
}
