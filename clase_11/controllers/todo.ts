import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find();
  res.json({ data: todos, message: 'Todos los todos' });
};

export const createTodo = async (req: Request, res: Response) => {
  const { description } = req.body;
  //TODO: handler Error

  const todo = await Todo.create({ description });

  res.json({ data: todo, message: 'Todo creado correctamente' });
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id, isComplete } = req.body;

  const todo = await Todo.findByIdAndUpdate(id, { isComplete }, { new: true });

  res.json({ data: todo, message: 'Todo actualizado correctamente' });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ data: [], message: 'Todo eliminado correctamente' });
};
