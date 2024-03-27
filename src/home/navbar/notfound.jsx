import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
    console.log("Clicked");
  };
  return (
    <div>
      <button
        style={{
          padding: "20px 40px",
          color: "red",
          backgroundColor: "white",
          
        }} onClick={handleBack}
      >
        BACK
      </button>
      <img
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
        alt="404"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default Notfound;
