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
  getRandomPostsWithPagenation({ query, pagingOption }) {
    // https://docs.mongodb.com/manual/aggregation/#std-label-aggregation-framework
    const aggregateQuery = this.model.aggregate([{ $match: query }, { $sample: { size: pagingOption.limit } }]);

    return this.model.aggregatePaginate(aggregateQuery, pagingOption);
  }
  createPost(post) {
    return this.model.create(post);
  }
}

module.exports = Posts;

// {
//   "_id": {
//     "$oid": "609c1cf6b1186a7b3c97604c"
//   },
//   "author": {
//     "$oid": "60978fb4597e45176f27c9c1"
//   },
//   "content": "test테스트입니다테스트",
//   "postImageUrl": "dsfsdfsdfdsf/dsfsdfsdf.png",
//   "location": {
//     "type": "Point",
//     "coordinate": [123, 37]
//   },
//   "isAnonymous": true,
//   "area": "역삼동",
//   "season": "winter",
//   "comments": [],
//   "likes": []
// }
