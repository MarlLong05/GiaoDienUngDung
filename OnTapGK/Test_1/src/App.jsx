import { useState, useMemo, useRef, useEffect } from 'react';
import './App.css';
import useFetchData from './useFetchData'; // Import custom hook
import ComboBox from './components/ComboBox';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

function App() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const inPutRef = useRef(null);

  // 1. Sử dụng Custom Hook
  const { data: products, loading, error } = useFetchData("/Data.json");

  // 2. Tự động focus vẫn để ở App vì nó liên quan đến DOM của SearchBar
  useEffect(() => {
    if (inPutRef.current) {
      inPutRef.current.focus();
    }
  }, [loading]); // Focus sau khi loading xong cho chắc cú

  const locData = useMemo(() => {
    return products.filter(e =>
      e.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "ALL" || e.status === status)
    );
  }, [products, search, status]);

  // 3. Xử lý các trường hợp hiển thị
  if (error) return <div className="error">Lỗi: {error}</div>;

  return (
    <div className="Name">
      <SearchBar value={search} onChange={setSearch} inputRef={inPutRef} /> 
      <ComboBox value={status} onChange={setStatus} />
      
      {loading ? (
        <div className="loading">Đang tải dữ liệu...</div>
      ) : (
        <TodoList data={locData} />
      )}
    </div>
  );
}

export default App;