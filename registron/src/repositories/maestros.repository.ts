import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Maestros, MaestrosRelations} from '../models';

export class MaestrosRepository extends DefaultCrudRepository<
  Maestros,
  typeof Maestros.prototype.id,
  MaestrosRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Maestros, dataSource);
  }
}
