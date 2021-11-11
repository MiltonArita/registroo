import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Secciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  NumSeccion: number;

  @property({
    type: 'number',
  })
  periodo?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Secciones>) {
    super(data);
  }
}

export interface SeccionesRelations {
  // describe navigational properties here
}

export type SeccionesWithRelations = Secciones & SeccionesRelations;
