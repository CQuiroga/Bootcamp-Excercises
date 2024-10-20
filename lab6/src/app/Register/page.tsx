'use client';

import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Importa useRouter

const Register = () => {
  const { name, 
    setName, 
    username, 
    setUsername, 
    email, 
    setEmail, 
    password, 
    setPassword } = useContext(UserContext);
  const router = useRouter();  // Inicializa el router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula un proceso de registro (puedes manejar una lógica de registro real aquí)
    console.log({ name, username, email, password });

    // Redirige a la página Profile
    router.push('/Profile');
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-gray-700">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center">Register</h2>

        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>

        <div className="mt-4 text-center">
          <Link href="/Profile" className="text-blue-500 hover:underline">
            Go to Profile
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
