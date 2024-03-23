import React from "react";
import facebook from "../asserts/facebook.png";
import twitter from "../asserts/twitter.png";
import instagram from "../asserts/instagram.png";

const FooterComponent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          color: "#14274A",
          marginTop: "40px",
        }}
      >
        <div>
          <h1>Testimonials</h1>
          <h2>"Calm, Serene, Retro What a way to relax and enjoy"</h2>
          <p>Mr. and Mrs. Baxter, UK</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
              color: "white",
            }}
          >
            <div
              style={{
                backgroundColor: "#E0B973",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              L
            </div>
            <div
              style={{
                backgroundColor: "#E0B973",
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              R
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 130px",
          marginTop: "80px",
          backgroundColor: "#14274A",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            lineHeight: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "0px",
            }}
          >
            <h1>LUXUARY</h1>
            <p>HOTELS</p>
          </div>
          <p>497 Evergreen Rd. Roseville, CA 95673</p>
          <p>+44 345 678 903</p>
          <p>luxury_hotels@gmail.com</p>
        </div>
        <div>
          <p>About Us</p>
          <p>Contact</p>
          <p>Terms & Conditions</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={facebook} alt="iconF" />
            <p>Facebook</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={twitter} alt="iconT" />
            <p>Twitter</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={instagram} alt="iconI" />
            <p>Instagram</p>
          </div>
        </div>
        <div>
          <p>Subscribe to our newsletter</p>
          <input
            type="text"
            placeholder="Email Addresss"
            style={{
              border: "2px solid #E0B973",
              backgroundColor: "#14274A",
              color: "white",
              padding: "10px 20px",
            }}
          />
        </div>
      </div>
    </div> //main
  );
};

export default FooterComponent;
