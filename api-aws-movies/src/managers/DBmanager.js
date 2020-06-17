import dynamoose from 'dynamoose';

dynamoose.aws.sdk.config.update({ region: 'us-east-1' });

export default class DBManager {
  db;

  constructor(tableName, schema) {
    // definicion de las tablas
    this.db = dynamoose.model(tableName, schema);
  }

  // eslint-disable-next-line class-methods-use-this
  toDBFormat() {
    throw new Error('Method not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  toDBUpdateFormat() {
    throw new Error('Method not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  getKey() {
    throw new Error('Method not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  fromDBResponse() {
    throw new Error('Method not implemented');
  }

  async get() {
    const entities = await this.db.scan().exec(); // se manda llamar una funcion de db, todos los items que encuentre se regresan en entities
    return entities.map(e => this.fromDBResponse(e)); //
  }

  async getByKey() {
    const entity = await this.db.get(this.getKey());
    return entity ? this.fromDBResponse(entity) : null; // promesa
  }

  create() {
    return this.db.create(this.toDBFormat()); // promesa
  }

  update() {
    return this.db.update(this.getKey(), this.toDBUpdateFormat()); // el segundo argumento son los datos que van a cambiar
  }

  delete() {
    return this.db.delete(this.getKey());
  }
}
