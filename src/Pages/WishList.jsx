import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  // eifi function
  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  const handleRemoveFromWishlist = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updateList = existingList.filter((product) => product.id !== id);

    localStorage.setItem("wishlist", JSON.stringify(updateList));
    setWishlist(updateList);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold flex gap-4 items-end">
          <span>Wishlist</span>
          <span className="text-sm to-gray-500">
            ({sortedItem.length}) product found
          </span>
        </h1>
        <label className="form-control w-full max-w-40">
          <select
            // value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select"
          >
            <option value="none">Sort by Price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedItem.map((product) => (
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
              <p className="text-base-content/70">{product.category}</p>
            </div>
            <div className="pr-4 flex justify-between items-center gap-3">
              <div className="text-xl font-semibold">${product.price}</div>
              <button
                onClick={() => {
                  handleRemoveFromWishlist(product.id);
                }}
                className="btn hover:bg-red-600 text-white bg-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
