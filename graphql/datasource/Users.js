const { MongoDataSource } = require("apollo-datasource-mongodb");

class Users extends MongoDataSource {
  getUsers() {
    return this.model.find();
  }
  getUser(userId) {
    return this.findOneById(userId);
  }
  getUserByQuery(query) {
    return this.model.find(query);
  }
  getUsersByIds(friendIds) {
    return this.findManyByIds(friendIds);
  }
  createUser(user) {
    return this.model.create(user);
  }
}

module.exports = Users;
