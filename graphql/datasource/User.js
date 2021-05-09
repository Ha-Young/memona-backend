const { MongoDataSource } = require("apollo-datasource-mongodb");

class User extends MongoDataSource {
  getUsers() {
    return this.find();
  }
  getUser(query) {
    return this.find(query);
  }
  getUsersByIds(friendIds) {
    return this.findManyByIds(friendIds);
  }
  createUser(user) {
    return this.create(user);
  }
}

module.exports = User;
