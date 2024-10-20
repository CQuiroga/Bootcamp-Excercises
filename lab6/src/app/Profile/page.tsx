'use client';

import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import Link from 'next/link';

const Profile = () => {
  const { name, username, email } = useContext(UserContext);

  return (
    <div className="flex justify-center items-center min-h-screen text-gray-700">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">Profile</h2>
        <p className="mb-2"><strong>Name:</strong> {name}</p>
        <p className="mb-2"><strong>Username:</strong> {username}</p>
        <p className="mb-2"><strong>Email:</strong> {email}</p>

        <div className="mt-4 text-center">
          <Link href="/Register" className="text-blue-500 hover:underline">
            Go to Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
