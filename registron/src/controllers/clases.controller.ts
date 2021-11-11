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
import {Clases} from '../models';
import {ClasesRepository} from '../repositories';

export class ClasesController {
  constructor(
    @repository(ClasesRepository)
    public clasesRepository : ClasesRepository,
  ) {}

  @post('/clases')
  @response(200, {
    description: 'Clases model instance',
    content: {'application/json': {schema: getModelSchemaRef(Clases)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clases, {
            title: 'NewClases',
            exclude: [''],
          }),
        },
      },
    })
    clases: Omit<Clases, ''>,
  ): Promise<Clases> {
    return this.clasesRepository.create(clases);
  }

  @get('/clases/count')
  @response(200, {
    description: 'Clases model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Clases) where?: Where<Clases>,
  ): Promise<Count> {
    return this.clasesRepository.count(where);
  }

  @get('/clases')
  @response(200, {
    description: 'Array of Clases model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Clases, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Clases) filter?: Filter<Clases>,
  ): Promise<Clases[]> {
    return this.clasesRepository.find(filter);
  }

  @patch('/clases')
  @response(200, {
    description: 'Clases PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clases, {partial: true}),
        },
      },
    })
    clases: Clases,
    @param.where(Clases) where?: Where<Clases>,
  ): Promise<Count> {
    return this.clasesRepository.updateAll(clases, where);
  }

  @get('/clases/{id}')
  @response(200, {
    description: 'Clases model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Clases, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Clases, {exclude: 'where'}) filter?: FilterExcludingWhere<Clases>
  ): Promise<Clases> {
    return this.clasesRepository.findById(id, filter);
  }

  @patch('/clases/{id}')
  @response(204, {
    description: 'Clases PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Clases, {partial: true}),
        },
      },
    })
    clases: Clases,
  ): Promise<void> {
    await this.clasesRepository.updateById(id, clases);
  }

  @put('/clases/{id}')
  @response(204, {
    description: 'Clases PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clases: Clases,
  ): Promise<void> {
    await this.clasesRepository.replaceById(id, clases);
  }

  @del('/clases/{id}')
  @response(204, {
    description: 'Clases DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clasesRepository.deleteById(id);
  }
}
