import React from "react";
import rome1 from "../../asserts/room1.png";
import rome2 from "../../asserts/room2.png";
import rome3 from "../../asserts/room3.png";
import { BgImage, DJA, Button } from "./style";
import FooterComponent from "../footer";
import roomsBg from '../../asserts/roomsImage.png'

const RoomsComponent = () => {
  return (
  <div>
    <BgImage style={{
      backgroundImage: `url(${roomsBg})`
    }}>
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
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 130px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
          ROOMS AND RATES
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
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </p>
      </div>

      <div
        style={{
          gap: "80px",
          display: "flex",
          flexDirection: "column",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={rome1}
              alt="Single Room"
              style={{
                width: "1000px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#14274A",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "73px",
              color: "white",
              marginTop: "-5px",
            }}
          >
            <h1>SINGLE ROOM</h1>
          </div>
          <div
            style={{
              border: "1.5px solid #14274A",
              borderRadius: "0px 0px 5px 5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "30px 110px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E0B973",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  color: "white",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <p>+</p>
              </div>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "#14274A",
                }}
              >
                VIEW ROOM DETAILS
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "16px",
                padding: "0px 50px",
                backgroundColor: "#E0B973",
                color: "white",
                cursor: "pointer",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "30px",
              }}
            >
              <p>147$ Avg/night</p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={rome2}
              alt="Double Room"
              style={{
                width: "1000px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#14274A",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "73px",
              color: "white",
              marginTop: "-5px",
            }}
          >
            <h1>DOUBLE ROOM</h1>
          </div>
          <div
            style={{
              border: "1.5px solid #14274A",
              borderRadius: "0px 0px 5px 5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "30px 110px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E0B973",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  color: "white",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <p>+</p>
              </div>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "#14274A",
                }}
              >
                VIEW ROOM DETAILS
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "16px",
                padding: "0px 50px",
                backgroundColor: "#E0B973",
                color: "white",
                cursor: "pointer",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "30px",
              }}
            >
              <p>187$ Avg/night</p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={rome3}
              alt="Twin Room"
              style={{
                width: "1000px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#14274A",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "73px",
              color: "white",
              marginTop: "-5px",
            }}
          >
            <h1>TWIN ROOM</h1>
          </div>
          <div
            style={{
              border: "1.5px solid #14274A",
              borderRadius: "0px 0px 5px 5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "30px 110px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E0B973",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  color: "white",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <p>+</p>
              </div>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  color: "#14274A",
                }}
              >
                VIEW ROOM DETAILS
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "16px",
                padding: "0px 50px",
                backgroundColor: "#E0B973",
                color: "white",
                cursor: "pointer",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "30px",
              }}
            >
              <p>200$ Avg/night</p>
            </div>
          </div>
        </div>
      </div>
  
    </div>   
    <FooterComponent/>
    </div>//main
  );
};

export default RoomsComponent;
