import { useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { Id } from '../convex/_generated/dataModel';
import { api } from '../convex/_generated/api';
import Search from './Search';
import Create from './Create';
import Tasks from './Tasks';
import { Task } from './global';
import './App.css'
import Loading from './Loading';

function App() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const tasks = useQuery(api.tasks.getTasks, { query });
  const createTask = useMutation(api.tasks.createTask);
  const deleteTask = useMutation(api.tasks.deleteTask);

  // Create task
  const handleCreate = async (data: Task) => {
    setIsLoading(true);
    await createTask(data);
    setIsLoading(false);
  };

  // Delete task
  const handleDelete = (id: Id<"tasks">) => {
    setIsLoading(true);
    deleteTask({ id });
    setIsLoading(false);
  };

  return (
    <div id="app">
      <header><h1>Convex Todo App</h1></header>

      {/* Loading */}
      <Loading show={isLoading} />

      {/* Search */}
      <Search onChange={setQuery}/>

      {/* List */}
      <Tasks data={tasks} onDelete={handleDelete} />

      {/* Create */}
      <Create onSubmit={handleCreate}/>
    </div>
  );
}

export default App
