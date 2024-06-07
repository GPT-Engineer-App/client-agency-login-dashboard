import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { SupabaseAuthUI } from '@/components/SupabaseAuthUI';
import { Button } from '@/components/ui/button';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import './App.css';

const Login = () => {
  const { user } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SupabaseAuthUI />
    </div>
  );
};

const Home = () => {
  const { user, signOut } = useSupabaseAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <Button onClick={signOut}>Logout</Button>
      ) : (
        <Button onClick={() => navigate('/login')}>Login</Button>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;