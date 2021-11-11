import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Maestros extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreMaestro: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  clasequeimparte: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Maestros>) {
    super(data);
  }
}

export interface MaestrosRelations {
  // describe navigational properties here
}

export type MaestrosWithRelations = Maestros & MaestrosRelations;
