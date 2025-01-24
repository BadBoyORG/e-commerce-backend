import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1737758822087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        alter table public.user add unique(email);
    `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    `);
  }
}
