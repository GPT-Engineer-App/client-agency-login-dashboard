import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import ProtectedRoute from '@/components/ProtectedRoute';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="bg-white p-4 shadow-md mb-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </nav>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
              />
              <Button onClick={addTask} className="mt-2">Add Task</Button>
            </div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span>{task}</span>
                  <Button variant="destructive" onClick={() => deleteTask(index)}>Delete</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProtectedRoute(Dashboard);