'use client';

import LoginForm from 'lab10/components/LoginForm';
import ScoreList from 'lab10/components/ScoreList';
import UserScores from 'lab10/components/UserScores';
import ScoreInput from 'lab10/components/ScoreInput ';

import { useGetScoresQuery } from 'lab10/store/services/scores.api';

export default function HomePage() {

  const { data , isLoading, isError } = useGetScoresQuery();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Game Score Manager</h1>
      
      <div className="max-w-md mx-auto bg-green-950 p-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <LoginForm />
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <div className="bg-green-950 p-4 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Scores</h2>
          <UserScores />
        </div>

        <div className="bg-green-950 p-4 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Add a New Score</h2>
          <ScoreInput />
        </div>

        <div className="bg-green-950 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">All Scores</h2>
          <ScoreList />
        </div>
      </div>

           

    </div>
  );
}
