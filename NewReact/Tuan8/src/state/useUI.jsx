import { useContext } from 'react';
import { LoadingContext, ErrorContext, NotificationContext } from './context/UIContext';

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a UIProvider');
  }
  return context;
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('useError must be used within a UIProvider');
  }
  return context;
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a UIProvider');
  }
  return context;
};
