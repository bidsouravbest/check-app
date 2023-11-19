import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./UserDetailsJson.json";

const Users = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <Link to={`${item.userId}`}>
            <h1>{item.name}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Users;
