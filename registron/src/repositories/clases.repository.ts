import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Clases, ClasesRelations} from '../models';

export class ClasesRepository extends DefaultCrudRepository<
  Clases,
  typeof Clases.prototype.id,
  ClasesRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Clases, dataSource);
  }
}
