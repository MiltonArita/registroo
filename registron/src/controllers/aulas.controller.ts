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
import {Aulas} from '../models';
import {AulasRepository} from '../repositories';

export class AulasController {
  constructor(
    @repository(AulasRepository)
    public aulasRepository : AulasRepository,
  ) {}

  @post('/aulas')
  @response(200, {
    description: 'Aulas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Aulas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aulas, {
            title: 'NewAulas',
            exclude: ['id'],
          }),
        },
      },
    })
    aulas: Omit<Aulas, 'id'>,
  ): Promise<Aulas> {
    return this.aulasRepository.create(aulas);
  }

  @get('/aulas/count')
  @response(200, {
    description: 'Aulas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Aulas) where?: Where<Aulas>,
  ): Promise<Count> {
    return this.aulasRepository.count(where);
  }

  @get('/aulas')
  @response(200, {
    description: 'Array of Aulas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Aulas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Aulas) filter?: Filter<Aulas>,
  ): Promise<Aulas[]> {
    return this.aulasRepository.find(filter);
  }

  @patch('/aulas')
  @response(200, {
    description: 'Aulas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aulas, {partial: true}),
        },
      },
    })
    aulas: Aulas,
    @param.where(Aulas) where?: Where<Aulas>,
  ): Promise<Count> {
    return this.aulasRepository.updateAll(aulas, where);
  }

  @get('/aulas/{id}')
  @response(200, {
    description: 'Aulas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Aulas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Aulas, {exclude: 'where'}) filter?: FilterExcludingWhere<Aulas>
  ): Promise<Aulas> {
    return this.aulasRepository.findById(id, filter);
  }

  @patch('/aulas/{id}')
  @response(204, {
    description: 'Aulas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aulas, {partial: true}),
        },
      },
    })
    aulas: Aulas,
  ): Promise<void> {
    await this.aulasRepository.updateById(id, aulas);
  }

  @put('/aulas/{id}')
  @response(204, {
    description: 'Aulas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() aulas: Aulas,
  ): Promise<void> {
    await this.aulasRepository.replaceById(id, aulas);
  }

  @del('/aulas/{id}')
  @response(204, {
    description: 'Aulas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.aulasRepository.deleteById(id);
  }
}
