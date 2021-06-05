import mongoose from 'mongoose';

//Interface que describe las propiedades requeridas para crear un nuevo To-Do
export interface TodoAttrs {
  description: string;
}

export interface TodoDoc extends mongoose.Document {
  description: string;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface TodoModel extends mongoose.Model<TodoDoc> {
  build(attrs: TodoAttrs): TodoDoc;
}

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

todoSchema.statics.build = (attr: TodoAttrs) => {
  return new Todo(attr);
};

const Todo = mongoose.model<TodoDoc, TodoModel>('Todo', todoSchema);

export { Todo };
