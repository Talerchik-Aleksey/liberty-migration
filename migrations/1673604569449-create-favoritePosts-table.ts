import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TABLE_NAME = "favorite_posts";

export class createFavoritePostsTable1673604569449
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: "id",
            type: "int",
            isNullable: false,
            isUnique: true,
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "user_id",
            type: "int",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "post_id",
            type: "int",
            isNullable: false,
            isUnique: false,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME);
  }
}
