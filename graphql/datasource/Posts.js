const { MongoDataSource } = require("apollo-datasource-mongodb");

class Posts extends MongoDataSource {
  getPosts() {
    return this.model.find();
  }
  getPost(id) {
    return this.findOneById(id);
  }
  getPostByQuery(query) {
    return this.model.findOne(query);
  }
  getPostsByIds(ids) {
    return this.findManyByIds(ids);
  }
  createPost(post) {
    return this.model.create(post);
  }
}

module.exports = Posts;
