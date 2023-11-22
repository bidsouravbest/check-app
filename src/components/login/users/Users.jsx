import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import data from "./UserDetailsJson.json";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams({ filter: "disb" });
  const status = searchParams.get("filter");
  const message =
    status !== "active"
      ? "Showing All USERS!! (check the url)"
      : "Showing Active USERS Only!! (check the url)";
  return (
    <div>
      <pre>-------------------------------</pre>
      <br />
      <h3>
        <em>{message}</em>
      </h3>
      <pre>-------------------------------</pre>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Show Active Users
      </button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <button onClick={() => setSearchParams({})}>Remove Filters</button>
      {data.map((item) => {
        return (
          <div>
            <Link to={`${item.userId}`}>
              {status === "active" ? (
                item.status === "active" ? (
                  <h1>{item.name}</h1>
                ) : (
                  <></>
                )
              ) : (
                <h1>{item.name}</h1>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
