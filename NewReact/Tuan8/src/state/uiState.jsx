import { useState, useCallback } from 'react';
import { LoadingContext, ErrorContext, NotificationContext } from './context/UIContext';

export const UIProvider = ({ children }) => {
  const [loadingState, setLoadingState] = useState({
    isLoading: false,
    message: '',
  });

  const [errorState, setErrorState] = useState({
    hasError: false,
    message: '',
  });

  const [notifications, setNotifications] = useState([]);

  // Loading functions
  const showLoading = useCallback((message = 'Đang tải...') => {
    setLoadingState({ isLoading: true, message });
  }, []);

  const hideLoading = useCallback(() => {
    setLoadingState({ isLoading: false, message: '' });
  }, []);

  // Error functions
  const showError = useCallback((message) => {
    setErrorState({ hasError: true, message });
  }, []);

  const hideError = useCallback(() => {
    setErrorState({ hasError: false, message: '' });
  }, []);

  // Notification functions
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);

    // Tự động xóa notification sau duration
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, [removeNotification]);

  const loadingValue = {
    isLoading: loadingState.isLoading,
    message: loadingState.message,
    showLoading,
    hideLoading,
  };

  const errorValue = {
    hasError: errorState.hasError,
    message: errorState.message,
    showError,
    hideError,
  };

  const notificationValue = {
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <LoadingContext.Provider value={loadingValue}>
      <ErrorContext.Provider value={errorValue}>
        <NotificationContext.Provider value={notificationValue}>
          {children}
        </NotificationContext.Provider>
      </ErrorContext.Provider>
    </LoadingContext.Provider>
  );
};
