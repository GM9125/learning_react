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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Order Form
        </h1>

        {/* Name Field */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={handleChangeName}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            placeholder="Enter your name"
          />
          <p className="mt-2 text-gray-600 text-sm">Name: {name}</p>
        </div>

        {/* Quantity Field */}
        <div className="mb-5">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-semibold mb-2"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            placeholder="Enter quantity"
          />
          <p className="mt-2 text-gray-600 text-sm">Quantity: {quantity}</p>
        </div>

        {/* Comment Field */}
        <div className="mb-5">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-semibold mb-2"
          >
            Comment
          </label>
          <input
            id="comment"
            value={comment}
            onChange={handleChangeComment}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
            placeholder="Enter a comment (optional)"
          />
          <p className="mt-2 text-gray-600 text-sm">Comment: {comment}</p>
        </div>

        {/* Payment Field */}
        <div className="mb-5">
          <label
            htmlFor="payment"
            className="block text-gray-700 font-semibold mb-2"
          >
            Payment Method
          </label>
          <select
            id="payment"
            value={payment}
            onChange={handleChangePayment}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
          >
            <option value="">Select an option</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
          <p className="mt-2 text-gray-600 text-sm">Payment: {payment}</p>
        </div>

        {/* Shipping Field */}
        <div className="mb-5">
          <label
            htmlFor="shipping"
            className="block text-gray-700 font-semibold mb-2"
          >
            Shipping Method
          </label>
          <select
            id="shipping"
            value={shipping}
            onChange={handleChangeShipping}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
          >
            <option value="Delivery">Delivery</option>
            <option value="Pickup">Pickup</option>
          </select>
          <p className="mt-2 text-gray-600 text-sm">Shipping: {shipping}</p>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
