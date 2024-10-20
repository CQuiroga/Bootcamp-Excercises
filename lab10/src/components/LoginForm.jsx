'use client';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'lab10/store/user.slice';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const token = 'mocked-token'; // En un caso real, obtendrás esto desde la API.
    dispatch(login({ email, token }));
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
      <div className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}
