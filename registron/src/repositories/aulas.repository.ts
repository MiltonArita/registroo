import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Aulas, AulasRelations} from '../models';

export class AulasRepository extends DefaultCrudRepository<
  Aulas,
  typeof Aulas.prototype.id,
  AulasRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Aulas, dataSource);
  }
}
