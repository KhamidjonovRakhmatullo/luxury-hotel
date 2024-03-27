import React from "react";
import home1 from "../../asserts/img2.png";
import home2 from "../../asserts/img3.png";
import FooterComponent from "../footer";
import NavbarComponent from "../navbar";
// import { BgImage } from "./style";

const HomeComponent = () => {
  return (
    //main
    <div>
      <NavbarComponent></NavbarComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 0px",
          fontFamily: "Montserrat",
          fontSize: "30px",
          fontWeight: "400",
          color: "#14274A",
        }}
      >
        <p>All our room types are including complementary breakfast</p>
      </div>

      <div
        style={{
          display: "flex",
          padding: "10px 130px",
          gap: "18px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "3",
            display: "flex",
            // border: "1px solid red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #14274A",
              height: "334px",
              marginRight: "26px",
              marginBottom: "-50px",
            }}
          ></div>
          <div>
            <h1
              style={{
                fontFamily: "Montserrat",
                fontSize: "50px",
                fontWeight: "700",
                color: "#14274A",
                lineHeight: "72px",
              }}
            >
              Luxury redefined
            </h1>

            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "25px",
                fontWeight: "400",
                color: "#14274A",
                lineHeight: "40px",
                textAlign: "start",
              }}
            >
              Our rooms are designed to transport you into an environment made
              for leisure. Take your mind off the day-to-day of home life and
              find a private paradise for yourself.
            </p>

            <button
              style={{
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "400",
                color: "#14274A",
                lineHeight: "24px",
                color: "white",
                backgroundColor: "#E0B973",
                height: "63px",
                width: "200px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>

        <div
          style={{
            flex: "4",
          }}
        >
          <img src={home1} alt="Home1img" style={{ width: "700px" }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 130px",
          marginTop: "40px",
          gap: "18px",
        }}
      >
        <div
          style={{
            flex: "3",
            display: "flex",
            // border: "1px solid red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #14274A",
              height: "430px",
              marginRight: "26px",
              marginBottom: "-45px",
            }}
          ></div>
          <div>
            <h1
              style={{
                fontFamily: "Montserrat",
                fontSize: "50px",
                fontWeight: "700",
                color: "#14274A",
                lineHeight: "72px",
              }}
            >
              Leave your worries in the sand
            </h1>

            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "25px",
                fontWeight: "400",
                color: "#14274A",
                lineHeight: "40px",
                textAlign: "start",
              }}
            >
              We love life at the beach. Being close to the ocean with access to
              endless sandy beach ensures a relaxed state of mind. It seems like
              time stands still watching the ocean. .
            </p>

            <button
              style={{
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "white",
                backgroundColor: "#E0B973",
                height: "63px",
                width: "200px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>

        <div
          style={{
            flex: "4",
          }}
        >
          <img src={home2} alt="home2img" style={{ width: "700px" }} />
        </div>
      </div>

      <FooterComponent />
    </div> //main
  );
};

export default HomeComponent;
