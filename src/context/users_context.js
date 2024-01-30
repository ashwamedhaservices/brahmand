import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the current user
const CurrentUserContext = createContext();

// Create a context for the current user updater
const CurrentUserUpdateContext = createContext();

// Custom hook to use the current user
export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
};

// Custom hook to use the current user updater
export const useCurrentUserUpdate = () => {
  const context = useContext(CurrentUserUpdateContext);
  if (!context) {
    throw new Error('useCurrentUserUpdate must be used within a CurrentUserProvider');
  }
  return context;
};

// CurrentUserProvider component
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('initialValue');

  const updateCurrentUser = (newValue) => {
    console.log('updateCurrentUser', newValue);
    setCurrentUser(newValue);
    console.log('updatedCurrentUser', currentUser);
  };

    // Use useEffect to log the updated value after the state has been updated
    useEffect(() => {
      console.log('updatedCurrentUser', currentUser);
    }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserUpdateContext.Provider value={updateCurrentUser}>
        {children}
      </CurrentUserUpdateContext.Provider>
    </CurrentUserContext.Provider>
  );
};
