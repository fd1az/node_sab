import { Router } from 'express';
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from '../controllers/todo';

const router = Router();

//api/v1/todo
router.get('/', getTodos).put('/', updateTodo).post('/', createTodo);

//api/v1/todo/lakSJDFHLkajsdnñlakCNSlsdiufh
router.delete('/:id', deleteTodo);

export { router as todoRouter };
