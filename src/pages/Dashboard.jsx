import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '../integrations/supabase/index.js';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="bg-blue-600 p-4 shadow-md mb-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
        <Button variant="ghost" onClick={handleLogout} className="text-white">Logout</Button>
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

export default Dashboard;