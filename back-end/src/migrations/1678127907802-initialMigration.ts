import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1678127907802 implements MigrationInterface {
    name = 'initialMigration1678127907802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "token_activation" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "token_reset_password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "token_reset_password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "token_activation"`);
    }

}
