import React, { useState } from "react";

const Registration = () => {
  const [formFlds, setFormFlds] = useState({
    userid: "",
    name: "",
  });
  const [usersArr, setUsersArr] = useState([]);

  const formFldsHandler = (tgt) => {
    const fldName = tgt.target.name;
    const fldVal = tgt.target.value;

    setFormFlds({ ...formFlds, [fldName]: fldVal });
  };

  const formSubmitHandler = (tgt) => {
    tgt.preventDefault();
    setUsersArr(...setUsersArr, tgt);
    console.log(usersArr);
  };

  return (
    <div className="test-form">
      <h2>Register Yourself Here!</h2>
      <form action="" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="userid">User-ID:</label>
          &nbsp;
          <input
            type="text"
            name="userid"
            value={formFlds.userid}
            onChange={formFldsHandler}
          />
        </div>

        <br />

        <div>
          <label htmlFor="name">Full Name:</label>
          &nbsp;
          <input
            type="text"
            name="name"
            value={formFlds.name}
            onChange={formFldsHandler}
          />
        </div>

        <br />

        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <br />
      <div>
        {usersArr.map((item) => {
          return (<>
            <h2>{item.userid}</h2>
            <h2>{item.name}</h2>
          </>)
      })}
      </div>
    </div>
  );
};

export default Registration;
