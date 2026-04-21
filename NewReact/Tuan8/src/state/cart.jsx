export const addToCart = (cart, product) => {
  const exist = cart.find(item => item.id === product.id);

  if (exist) {
    return cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};

export const increaseItem = (cart, id) => {
  return cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};

export const decreaseItem = (cart, id) => {
  return cart
    .map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter(item => item.quantity > 0);
};

export const getTotal = (cart) => {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};