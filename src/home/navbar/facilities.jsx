import React from "react";
import gym from "../../asserts/gym.png";
import bar from "../../asserts/bar.png";
import spa from "../../asserts/spa.png";
import swpool from "../../asserts/swpool.png";
import restourant from "../../asserts/restourant.png";
import laundry from "../../asserts/laundry.png";
import FooterComponent from "../footer";
import { BgImage, DJA, Button } from "./style";

const FacilitiesComponent = () => {
  return (
    <div>
      <BgImage $facilityId>
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
      </BgImage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 130px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontFamily: "Montserrat",
              fontSize: "60px",
              fontWeight: "700",
              color: "#14274A",
              lineHeight: "72px",
            }}
          >
            FACILITIES
          </h1>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "25px",
              fontWeight: "400",
              color: "#14274A",
              lineHeight: "30px",
              textAlign: "center",
            }}
          >
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so that we can
            ensure an experience quite uniquw. Luxury hotels offers the perfect
            setting with stunning views for leisure and our modern luxury resort
            facilities will help you enjoy the best of all.{" "}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "100px",
          }}
        >
          <img src={gym} alt="gymImg" style={{ width: "85%" }} />
          <img src={bar} alt="barImg" style={{ width: "85%" }} />
          <img src={spa} alt="spaImg" style={{ width: "85%" }} />
          <img src={swpool} alt="swpoolImg" style={{ width: "85%" }} />
          <img src={restourant} alt="restourantImg" style={{ width: "85%" }} />
          <img src={laundry} alt="laundrtImg" style={{ width: "85%" }} />
        </div>
      </div>
      <FooterComponent />
    </div> //main
  );
};

export default FacilitiesComponent;
