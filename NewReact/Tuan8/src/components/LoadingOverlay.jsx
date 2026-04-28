import { useLoading } from '../state/useUI';
import './UI.css';

export default function LoadingOverlay() {
  const { isLoading, message } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
    </div>
  );
}
