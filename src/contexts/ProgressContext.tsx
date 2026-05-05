import React, { createContext, useContext, useState, useEffect } from 'react';

// Badges structure
// badges format: array of strings containing badge IDs
// completedLessons format: array of strings containing lesson IDs
// xp format: number

export interface ProgressState {
  xp: number;
  completedLessons: string[];
  badges: string[];
}

interface ProgressContextType {
  progress: ProgressState;
  addXP: (amount: number) => void;
  markLessonComplete: (lessonId: string, levelId?: string, craftId?: string) => void;
  hasBadge: (badgeId: string) => boolean;
  isLessonCompleted: (lessonId: string) => boolean;
  awardBadge: (badgeId: string) => void;
}

const defaultState: ProgressState = {
  xp: 0,
  completedLessons: [],
  badges: [],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem('hirfati_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultState;
      }
    }
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem('hirfati_progress', JSON.stringify(progress));
  }, [progress]);

  const addXP = (amount: number) => {
    setProgress(p => ({ ...p, xp: p.xp + amount }));
  };

  const awardBadge = (badgeId: string) => {
    setProgress(p => {
      if (p.badges.includes(badgeId)) return p;
      return { ...p, badges: [...p.badges, badgeId] };
    });
  };

  const markLessonComplete = (lessonId: string, levelId?: string, craftId?: string) => {
    setProgress(p => {
      if (p.completedLessons.includes(lessonId)) return p;
      const newCompleted = [...p.completedLessons, lessonId];
      
      // Basic Badge Logic based on milestones
      const newBadges = [...p.badges];
      if (newCompleted.length === 1 && !newBadges.includes('starter')) {
        newBadges.push('starter');
      }
      
      // If we know craftId = data_entry and they complete les_3... maybe give keyboard master?
      if (lessonId === 'les_3_1' && !newBadges.includes('keyboard_master')) {
        newBadges.push('keyboard_master');
      }

      if (lessonId === 'les_4_3' && !newBadges.includes('graduate')) {
        newBadges.push('graduate');
      }

      return { ...p, completedLessons: newCompleted, badges: newBadges };
    });
  };

  const hasBadge = (badgeId: string) => progress.badges.includes(badgeId);
  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId);

  return (
    <ProgressContext.Provider value={{ progress, addXP, markLessonComplete, hasBadge, isLessonCompleted, awardBadge }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
