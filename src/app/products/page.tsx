"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductInfo from "@/components/ProductInfo/ProductInfo";
import { fetchProducts, setFilter, setTypeFilter } from "@/store/productsSlice";
import { AppDispatch, RootState } from "@/store/store";

import { IProduct, ProductType } from "@/types/types";

import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, filter, typeFilter } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product: IProduct) => {
    const trimmedFilter = filter.trim().toLowerCase();
    const typeMatch = typeFilter === "all" || product.type === typeFilter;
    return product.name.toLowerCase().includes(trimmedFilter) && typeMatch;
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTypeFilter(e.target.value));
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Products / {filteredProducts.length}</h1>
        <input
          type="text"
          onChange={handleFilterChange}
          value={filter}
          placeholder="Filter products..."
          className={styles.input}
        />
        <select
          onChange={handleTypeFilterChange}
          value={typeFilter}
          className={styles.select}
        >
          <option value={ProductType.All}>All Types</option>
          <option value={ProductType.Laptop}>Laptop</option>
          <option value={ProductType.Monitor}>Monitor</option>
          <option value={ProductType.PC}>Personal Computer</option>
        </select>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: IProduct) => (
              <ProductInfo key={product.id} product={product} />
            ))
          ) : (
            <div className={styles.noProducts}>
              <h2>No products found.</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
