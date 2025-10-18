import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold flex gap-4 items-end">
          <span>Wishlist</span>
          <span className="text-sm to-gray-500">
            ({wishlist.length}) product found
          </span>
        </h1>
        <button>Short</button>
      </div>

      <div className="space-y-3">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="card card-side bg-base-100 shadow border"
          >
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={product.image}
                alt={product.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-base-content/70">{product.description}</p>
            </div>
            <div className="pr-4 flex justify-between items-center gap-3">
              <div className="text-xl font-semibold">${product.price}</div>
              <button className="btn btn-outline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
