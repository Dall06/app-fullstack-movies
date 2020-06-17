import DBManager from '../managers/DBmanager';

const userDBSchema = {
  email: {
    type: String,
    hashKey: true // asi se define partition key
  },
  password: {
    type: String,
    rangeKye: true
  },
  accountType: String,
  createdAt: String
};

export default class User extends DBManager {
  email;

  password;

  accountType;

  createdAt;

  constructor(email, accountType, password, createdAt = new Date()) {
    super('db-aws-user', userDBSchema); // se manda llamar el constructor de la clase padre
    this.email = email;
    this.password = password;
    this.accountType = accountType;
    this.createdAt = createdAt;
  }

  toDBFormat() {
    return {
      ...this, // spread,
      createdAt: this.createdAt.toString()
    };
  }

  getKey() {
    return this.email;
  }

  // eslint-disable-next-line class-methods-use-this
  fromDBResponse(user) {
    return new User(
      user.email,
      user.accountType,
      user.password,
      new Date(user.createdAt)
    );
  }

  static newUser(email, accountType, password, createdAt) {
    return new User(email, accountType, password, createdAt);
  }
}
