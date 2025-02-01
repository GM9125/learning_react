import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState("1");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeQuantity = (event) => setQuantity(event.target.value);
  const handleChangeComment = (event) => setComment(event.target.value);
  const handleChangePayment = (event) => setPayment(event.target.value);
  const handleChangeShipping = (event) => setShipping(event.target.value);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={handleChangeName}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <p className="mt-1 text-gray-600">Name: {name}</p>
      </div>

      {/* Quantity Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          id="quantity"
          value={quantity}
          onChange={handleChangeQuantity}
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <p className="mt-1 text-gray-600">Quantity: {quantity}</p>
      </div>

      {/* Comment Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
          Comment
        </label>
        <input
          id="comment"
          value={comment}
          onChange={handleChangeComment}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <p className="mt-1 text-gray-600">Comment: {comment}</p>
      </div>

      {/* Payment Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="payment">
          Payment
        </label>
        <select
          id="payment"
          value={payment}
          onChange={handleChangePayment}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="">Select an option</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </select>
        <p className="mt-1 text-gray-600">Payment: {payment}</p>
      </div>

      {/* Shipping Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="shipping">
          Shipping
        </label>
        <select
          id="shipping"
          value={shipping}
          onChange={handleChangeShipping}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="Delivery">Delivery</option>
          <option value="Pickup">Pickup</option>
        </select>
        <p className="mt-1 text-gray-600">Shipping: {shipping}</p>
      </div>
    </div>
  );
}

export default MyComponent;
