import React, { createContext, useState } from 'react';

// Create and export the MixtapeContext
export const MixtapeContext = createContext();

// Create and export the MixtapeProvider component
export function MixtapeProvider({ children, songs }) {
  // Create state for genre and sortOrder
  const [genre, setGenre] = useState('all');
  const [sortOrder, setSortOrder] = useState('ascending');

  // Create the value object to be passed to the Provider
  const value = {
    songs,
    genre,
    setGenre,
    sortOrder,
    setSortOrder,
  };

  // Render the children wrapped in the MixtapeContext.Provider
  return (
    <MixtapeContext.Provider value={value}>
      {children}
    </MixtapeContext.Provider>
  );
}