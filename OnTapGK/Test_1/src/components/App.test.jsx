/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, expect, test, describe } from 'vitest';
import App from '../App'; 

// Giả lập API ngay từ đầu
vi.stubGlobal('fetch', vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: 'Apple', status: 'completed' },
      { id: 2, name: 'Banana', status: 'Pending' }
    ]),
  })
));

describe('Kiểm tra toàn bộ App', () => {

  test('1. App render và tự động focus vào ô Search', async () => {
    render(<App />);
    // Chờ cho input xuất hiện để tránh lỗi null
    const input = await screen.findByPlaceholderText(/Search/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveFocus();
  });

  test('2. Logic lọc: Kết hợp Search và ComboBox', async () => {
    render(<App />);

    // Chờ dữ liệu từ fetch đổ vào
    await waitFor(() => {
      expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText(/Search/i);
    const combo = screen.getByRole('combobox');

    // Test Search "Banana"
    fireEvent.change(input, { target: { value: 'Banana' } });
    expect(screen.getByText(/Banana/i)).toBeInTheDocument();
    expect(screen.queryByText(/Apple/i)).not.toBeInTheDocument();

    // Test Combo: chọn cái không khớp để nó biến mất
    fireEvent.change(combo, { target: { value: 'completed' } });
    expect(screen.queryByText(/Banana/i)).not.toBeInTheDocument();
  });
});