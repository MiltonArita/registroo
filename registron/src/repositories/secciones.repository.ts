import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Secciones, SeccionesRelations} from '../models';

export class SeccionesRepository extends DefaultCrudRepository<
  Secciones,
  typeof Secciones.prototype.id,
  SeccionesRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Secciones, dataSource);
  }
}
