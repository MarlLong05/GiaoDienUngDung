import { useNotification } from '../state/useUI';
import './UI.css';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map(notif => (
        <div key={notif.id} className={`notification notification-${notif.type}`}>
          <span className="notification-message">{notif.message}</span>
          <button 
            onClick={() => removeNotification(notif.id)}
            className="notification-close"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
