import { createContext, useContext, useEffect, useState } from 'react';

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.get().then(todos => setTodos(todos), [setTodos, todoService]);
  });

  const create = async todo => {
    const newtodo = await todoService.create(todo);
    setTodos(prev => [...prev, newtodo]);
  };

  return <TodoContext.Provider value={{ todos, create }}>{children}</TodoContext.Provider>;
}
