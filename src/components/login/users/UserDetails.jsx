import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./UserDetailsJson.json";

const UserDetails = () => {
  const navigate = useNavigate();
  const userId = useParams().userId;
  return (
    <div>
      {data.map((item) => {
        const status = item.status === "disb" ? "Not Active" : "Active";
        if (item.userId == userId) {
          return (
            <div>
              <p>-----------------------------</p>
              <h1>USER ID: {item.userId}</h1>
              <h2>USER-NAME: {item.username}</h2>
              <h2>NAME: {item.name}</h2>
              <h3>Account Status: {status}</h3>
            </div>
          );
        }
      })}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
