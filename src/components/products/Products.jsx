import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <h1>Products Page!!!</h1>
      <Link to='featured-products'>Featured</Link>
      -----||-----
      <Link to='new-products'>New</Link>
      <Outlet />
    </div>
  );
};
