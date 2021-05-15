import { Router } from 'express';
import { createPost, getPosts } from '../controller/Posts.js';

const router = Router();

router.get('/', getPosts).post('/', createPost);

export { router as Post };
