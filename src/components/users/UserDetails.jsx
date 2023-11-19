import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./UserDetailsJson.json";

const UserDetails = () => {
  const navigate = useNavigate();
  const userId = useParams().userId;
  return (
    <div>
      {data.map((item) => {
        if (item.userId == userId) {
          return (
            <div>
              <h1>USER ID: {item.userId}</h1>
              <h2>NAME: {item.name}</h2>
            </div>
          );
        }
      })}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
