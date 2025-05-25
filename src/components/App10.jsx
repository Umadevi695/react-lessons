import React, { useState } from "react";

export default function App10() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 45 },
    { id: 3, name: "Product 3", price: 76 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const incrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div>
      <h1>App10 </h1>
      <h2>Products</h2>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} -{" "}
            <button onClick={() => addToCart(product)}>Add</button>
          </li>
        ))}
      </ol>
      <hr />
      <h2>My Cart</h2>
      <ol>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} -{" "}
            <button onClick={() => decrementQty(item.id)}>-</button> {item.qty}{" "}
            <button onClick={() => incrementQty(item.id)}>+</button> - $
            {item.qty * item.price}
          </li>
        ))}
      </ol>
    </div>
  );
}
