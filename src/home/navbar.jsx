import React from "react";
// import home from "../asserts/home.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    //main
    <div
      style={{
        backgroundColor: "#14274A80",
        // zIndex: "2",
      }}
    >
      {/* <div>
        <img src={home} alt="background"
        style={{
          zIndex: "1",
          width: "100%"
        }} />
    </div> */}
      <div
        style={{
          // border: "2px solid red",
          display: "flex",
          padding: "0px 130px",
          justifyContent: "space-between",
          // position: "fixed",
          // width: "100%"
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
          <Link to="/home">
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

      <div
        style={{
          // padding: "0px 130px",
          margin: "90px",
          lineHeight: "10px",
          // border: "1px solid black",
          color: "white",
        }}
      >
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "50px",
            fontWeight: "400",
            // text-align: left;
          }}
        >
          {" "}
          WELCOME TO
        </h2>

        <h1
          style={{
            fontFamily: "Montserrat",
            fontSize: "100px",
            fontWeight: "700",
          }}
        >
          {" "}
          LUXUARY
        </h1>

        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "60px",
            fontWeight: "700",
          }}
        >
          HOTELS
        </h2>

        <p
          style={{
            fontFamily: "Montserrat",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          Book your stay and enjoy Luxuary redefined at the most affordible
          rates.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid red",
          gap: "30px",
          color: "white",
        }}
      >
        <div
          style={{
            // border: "1px solid red",
            width: "268px",
            height: "68px",
            backgroundColor: "#E0B973",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            cursor: "pointer",
          }}
        >
          <h2>BOOK NOW</h2>
        </div>
        <div>
          <h2>Scroll</h2>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "60px",
            height: "60px",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontWeight: "700px",
            marginTop: "-45px",
            marginBottom: "20px",
          }}
        >
          <p>\/</p>
        </div>
      </div>
    </div> //main
  );
};

export default NavbarComponent;
