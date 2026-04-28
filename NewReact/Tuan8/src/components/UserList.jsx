import { useUsers } from '../state/useUsers';

export default function UserList() {
  const { data, loading, error, fetchUsers } = useUsers();

  if (loading) return <div className="loading">Đang tải danh sách user...</div>;
  if (error) return <div className="error">Lỗi: {error}</div>;

  return (
    <div className="user-list">
      <h2>Danh sách Users ({data.length})</h2>
      <button onClick={fetchUsers}>Refresh</button>
      
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}