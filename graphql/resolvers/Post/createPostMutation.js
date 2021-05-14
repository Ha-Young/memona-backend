const { fileUpload } = require("../../../utils/s3");
const { AWS_S3_IMAGE_BUCKET_NAME } = process.env;

async function createPostMutation(args, dataSources) {
  const file = args.postImageFile;

  delete args.postImageFile;

  const { url } = await fileUpload({ file, bucketName: AWS_S3_IMAGE_BUCKET_NAME });

  const post = {
    ...args,
    postImageUrl: url,
  };

  const result = dataSources.posts.createPost(post);

  return result.toJson();
}

module.exports = createPostMutation;
