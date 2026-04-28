import { useError } from '../state/useUI';
import './UI.css';

export default function ErrorDisplay() {
  const { hasError, message, hideError } = useError();

  if (!hasError) return null;

  return (
    <div className="error-banner">
      <span className="error-icon">⚠️</span>
      <p>{message}</p>
      <button onClick={hideError} className="error-close">✕</button>
    </div>
  );
}
