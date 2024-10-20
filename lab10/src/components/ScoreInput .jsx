'use client';
import { useState } from 'react';
import { useAddNewScoreMutation } from 'lab10/store/services/scores.api';
import { useDispatch, useSelector } from 'react-redux';
import { addScore } from 'lab10/store/score.slice';
import { selectUser } from 'lab10/store/user.slice';

export default function ScoreInput() {
  const [game, setGame] = useState('');
  const [score, setScore] = useState('');
  const { email } = useSelector(selectUser);
  const [addNewScore] = useAddNewScoreMutation();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const newScore = { game, score: parseInt(score, 10), userId: email };
    try {
      await addNewScore(newScore);
      dispatch(addScore(newScore));
      // Reset input fields after submission
      setGame('');
      setScore('');
    } catch (error) {
      console.error('Error adding score:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Score</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          placeholder="Game Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Score"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Add Score
        </button>
      </div>
    </div>
  );
}
