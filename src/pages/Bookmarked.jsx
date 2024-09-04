
import React, { useState, useEffect } from 'react';

const Bookmarked = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedMovies')) || [];
    setBookmarkedMovies(storedBookmarks);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Bookmarked Movies</h2>
        <div className="grid grid-cols-4 gap-4">
          {bookmarkedMovies.map((movie) => (
            <div key={movie.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={movie.poster?.url} alt={movie.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex gap-2">
                <p className="text-sm text-gray-400">{movie.year}</p>
                <p className="text-sm text-gray-400">{movie.type}</p>
              </div>
              <h3 className="text-lg font-semibold">{movie.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
