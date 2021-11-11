import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Secciones} from '../models';
import {SeccionesRepository} from '../repositories';

export class RegistronController {
  constructor(
    @repository(SeccionesRepository)
    public seccionesRepository : SeccionesRepository,
  ) {}

  @post('/secciones')
  @response(200, {
    description: 'Secciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Secciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Secciones, {
            title: 'NewSecciones',
            exclude: ['id'],
          }),
        },
      },
    })
    secciones: Omit<Secciones, 'id'>,
  ): Promise<Secciones> {
    return this.seccionesRepository.create(secciones);
  }

  @get('/secciones/count')
  @response(200, {
    description: 'Secciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Secciones) where?: Where<Secciones>,
  ): Promise<Count> {
    return this.seccionesRepository.count(where);
  }

  @get('/secciones')
  @response(200, {
    description: 'Array of Secciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Secciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Secciones) filter?: Filter<Secciones>,
  ): Promise<Secciones[]> {
    return this.seccionesRepository.find(filter);
  }

  @patch('/secciones')
  @response(200, {
    description: 'Secciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Secciones, {partial: true}),
        },
      },
    })
    secciones: Secciones,
    @param.where(Secciones) where?: Where<Secciones>,
  ): Promise<Count> {
    return this.seccionesRepository.updateAll(secciones, where);
  }

  @get('/secciones/{id}')
  @response(200, {
    description: 'Secciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Secciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Secciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Secciones>
  ): Promise<Secciones> {
    return this.seccionesRepository.findById(id, filter);
  }

  @patch('/secciones/{id}')
  @response(204, {
    description: 'Secciones PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Secciones, {partial: true}),
        },
      },
    })
    secciones: Secciones,
  ): Promise<void> {
    await this.seccionesRepository.updateById(id, secciones);
  }

  @put('/secciones/{id}')
  @response(204, {
    description: 'Secciones PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() secciones: Secciones,
  ): Promise<void> {
    await this.seccionesRepository.replaceById(id, secciones);
  }

  @del('/secciones/{id}')
  @response(204, {
    description: 'Secciones DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.seccionesRepository.deleteById(id);
  }
}
