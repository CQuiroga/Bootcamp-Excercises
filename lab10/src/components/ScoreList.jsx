import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllScores } from 'lab10/store/score.slice'; // Ajusta la ruta según tu estructura

const ScoreList = () => {
  // Usamos el selector `selectAllScores` para acceder a los scores del estado
  const scores = useSelector(selectAllScores);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Player Scores</h2>
      {scores && scores.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {scores.map((score, index) => (
            <li key={index} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    Player: <span className="text-blue-600">{score.playerId}</span>
                  </p>
                  <p className="text-sm text-gray-500">Game: {score.game}</p>
                </div>
                <p className="text-xl font-bold text-green-500">{score.score}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No scores available.</p>
      )}
    </div>
  );
};

export default ScoreList;
