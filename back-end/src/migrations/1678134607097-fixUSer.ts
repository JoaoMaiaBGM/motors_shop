import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUSer1678134607097 implements MigrationInterface {
    name = 'fixUSer1678134607097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "token_activation" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "token_reset_password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "token_reset_password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "token_activation"`);
    }

}
