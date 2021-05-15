import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  desc: String,
});

const Post = mongoose.model('Post', postSchema);

export default Post;
