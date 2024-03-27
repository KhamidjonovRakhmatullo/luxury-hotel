import React from "react";
// import home from "../asserts/home.png";
import { BgImage, Button, DJA,} from "./navbar/style";

const NavbarComponent = () => {
  return (
    //main
    <BgImage>
     <div>
        <h2>Welcome to</h2>
        <h1>LUXUARY</h1>
        <h2>HOTELS</h2>
        <p>
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </div>
      <DJA style={{
        // border: "2px solid red",
        marginTop: "30px",
        flexDirection: "column"
      }}>
        <DJA style={{
          marginTop: "100px"
        }}>
          <Button>BOOK NOW</Button>
        </DJA>
        <DJA style={{marginTop: "30px"}}>
          <p>Scroll</p>
        </DJA>
        <DJA style={{
          padding: "30px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "50px",
          fontWeight: "600",
          fontSize: "25px"
        }}>\/</DJA>
      </DJA>
      </BgImage> //main
  );
};

export default NavbarComponent;
