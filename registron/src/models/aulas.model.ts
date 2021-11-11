import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Aulas extends Entity {
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
  numerodeAula: number;

  @property({
    type: 'number',
    required: true,
  })
  nivel: number;

  @property({
    type: 'string',
  })
  departamento?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Aulas>) {
    super(data);
  }
}

export interface AulasRelations {
  // describe navigational properties here
}

export type AulasWithRelations = Aulas & AulasRelations;
