// API wrapper tự động thêm token vào header
export const apiCall = async (url, options = {}) => {
  const token = localStorage.getItem('auth_token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Thêm Authorization header nếu có token
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    // Nếu 401, có thể token hết hạn
    if (response.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      // Có thể redirect về login ở đây
    }
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Helper để GET request
export const apiGet = (url) => {
  return apiCall(url, {
    method: 'GET',
  });
};

// Helper để POST request
export const apiPost = (url, data) => {
  return apiCall(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// Helper để PUT request
export const apiPut = (url, data) => {
  return apiCall(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

// Helper để DELETE request
export const apiDelete = (url) => {
  return apiCall(url, {
    method: 'DELETE',
  });
};
