import Post from '../models/Post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ message: 'Todos los post', data: posts });
};

export const createPost = async (req, res) => {
  const { title, desc } = req.body;

  const newPost = await Post.create({ title, desc });

  res.status(200).json({ message: 'Post creado con éxito', data: newPost });
};
