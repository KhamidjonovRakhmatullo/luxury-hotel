import React from 'react'
import { Link } from "react-router-dom";

const TopnavbarComponent = () => {
  return (
    <div>
        <div
        style={{
          // border: "2px solid red",
          display: "flex",
          padding: "0px 130px",
          justifyContent: "space-between",
          // position: "fixed",
          // width: "100%",
          // zIndex: "3"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "0px",
            backgroundColor: "#E0B973",
            height: "150px",
            width: "256px",
            borderRadius: "0px 0px 40px 40px",
            color: "#14274A",
            // border: "2px solid red",
          }}
        >
          <h1>LUXUARY</h1>
          <h3>HOTELS</h3>
        </div>
        <div
          style={{
            // border: "2px solid blue",
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: "50px",
            color: "white",
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "400",
            cursor: "pointer",
          }}
        >
          <Link to="/">
            <u>Home</u>
          </Link>
          <Link to="/facilities">
            <p>Facilities</p>
          </Link>
          <Link to="rooms">
            <p>Rooms</p>
          </Link>
          <Link to="/contact-us">
          <p>Contact-us</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopnavbarComponent