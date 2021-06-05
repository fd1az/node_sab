import { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTodos = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany();
  res.json({ data: todos, message: 'Todos los todos' });
};

export const createTodo = async (req: Request, res: Response) => {
  const { description } = req.body;
  //TODO: handler Error

  const todo = await prisma.todo.create({
    data: { description: description },
  });

  res.json({ data: todo, message: 'Todo creado correctamente' });
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id, isComplete } = req.body;

  const todo = await prisma.todo.update({
    data: {
      isComplete: isComplete,
    },
    where: {
      id: id,
    },
  });

  res.json({ data: todo, message: 'Todo actualizado correctamente' });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.todo.delete({ where: { id: Number(id) } });
  res.json({ data: [], message: 'Todo eliminado correctamente' });
};
