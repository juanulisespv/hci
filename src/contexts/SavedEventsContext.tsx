"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface SavedEventsContextType {
  savedEventIds: string[];
  isSaved: (id: string) => boolean;
  toggleSavedEvent: (id: string) => void;
}

const SavedEventsContext = createContext<SavedEventsContextType | undefined>(undefined);

export const useSavedEvents = () => {
  const context = useContext(SavedEventsContext);
  if (!context) {
    throw new Error('useSavedEvents must be used within a SavedEventsProvider');
  }
  return context;
};

export const SavedEventsProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedEventIds, setSavedEventIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem('savedEvents');
      if (item) {
        setSavedEventIds(JSON.parse(item));
      }
    } catch (error) {
      console.warn('Error reading localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        window.localStorage.setItem('savedEvents', JSON.stringify(savedEventIds));
      } catch (error) {
        console.warn('Error writing to localStorage:', error);
      }
    }
  }, [savedEventIds, isLoaded]);

  const toggleSavedEvent = useCallback((id: string) => {
    setSavedEventIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(eventId => eventId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  }, []);

  const isSaved = useCallback((id: string) => savedEventIds.includes(id), [savedEventIds]);

  const value = {
    savedEventIds,
    isSaved,
    toggleSavedEvent,
  };

  return (
    <SavedEventsContext.Provider value={value}>
      {children}
    </SavedEventsContext.Provider>
  );
};
