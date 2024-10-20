'use client';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserScores, deleteScore } from 'lab10/store/score.slice';
import { selectUser } from 'lab10/store/user.slice';

export default function UserScores() {
  const { email } = useSelector(selectUser);
  const userScores = useSelector(selectUserScores(email));
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteScore({ id }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Scores</h2>
      {userScores.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {userScores.map((score) => (
            <li key={score.id} className="py-4 flex justify-between items-center">
              <div className="text-lg font-medium text-gray-700">
                {score.game}: <span className="text-green-500 font-bold">{score.score}</span>
              </div>
              <button
                onClick={() => handleDelete(score.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No scores available.</p>
      )}
    </div>
  );
}
