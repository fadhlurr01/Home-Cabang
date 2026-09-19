import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('id');
  const [theme, setTheme] = useState('light');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Sync theme with HTML data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openConsultModal = () => {
    setIsConsultModalOpen(true);
  };

  const closeConsultModal = () => {
    setIsConsultModalOpen(false);
  };

  const openPreviewModal = (item) => {
    setPreviewItem(item);
  };

  const closePreviewModal = () => {
    setPreviewItem(null);
  };

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  // Translation helper
  const t = (key) => {
    const keys = key.split('.');
    let current = translations[language] || translations['id'];
    for (const k of keys) {
      if (!current || current[k] === undefined) return key;
      current = current[k];
    }
    return current;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        toggleTheme,
        isConsultModalOpen,
        openConsultModal,
        closeConsultModal,
        previewItem,
        openPreviewModal,
        closePreviewModal,
        toasts,
        showToast,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
