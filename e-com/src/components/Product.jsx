import React, { useState } from "react";

const Product = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(parseFloat(0));

  const handleAdd = () => {
    setQuantity(quantity + 1);
    setTotalPrice(parseFloat(totalPrice) + parseFloat(price));
  };

  const handleRemove = () => {
    if (quantity >=1) {
      setQuantity(quantity - 1);
      setTotalPrice(parseFloat(totalPrice) - parseFloat(price));
    }
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-details">
        <h2>Name:{name}</h2>
        <p><b>Price</b>:${parseFloat(price).toFixed(2)}</p>
        <div className="quantity-controls">
          <button className="controlbutton" onClick={handleRemove}>-</button>
          <span>{quantity}</span>
          <button  className="controlbutton" onClick={handleAdd}>+</button>
        </div>
        <p>Total: ${parseFloat(totalPrice).toFixed(2)}</p>
       <div className="button">
        <div >
        <button className="cartbutton" onClick="">Add to Cart</button>
        </div>
        <div >
        <button className="buybutton" onClick="">Buy Now</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
