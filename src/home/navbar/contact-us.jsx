import React from 'react'
import FooterComponent from '../footer'

const ContactusComconent = () => {
  return (
  <div>
    <div style={{ 
      backgroundColor: "#14274A",
      padding: "90px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Montserrat",
      fontSize: "35px",
      fontWeight: "700",
      lineHeight: "97px",
      color: "white",
    }}>
      <h1>CONTACT-US</h1>
    </div>

    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      padding: "150px 130px 60px 130px"
    }}>
      <h1 style={{
        fontFamily: "Montserrat",
        fontSize: "30px",
        fontWeight: "700",
        lineHeight: "22px",
        color: "#14274A",
      }}>WE ARE HERE FOR YOU</h1>
      <p style={{
         fontFamily: "Montserrat",
         fontSize: "20px",
         fontWeight: "400",
         lineHeight: "16px",
         color: "#14274A",
      }}>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, 
please forward it to our support desk and we will get back to you as soon as possible.</p>
    </div>

    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      // border: "2px solid red",
      padding: "0px 130px"
    }}>
      <div style={{
         fontFamily: "Montserrat",
         fontSize: "25px",
         fontWeight: "400",
         lineHeight: "10px",
         color: "#14274A",
      }}>
        <p>497 Evergreen Rd. Roseville,</p>
        <p>CA 95673</p>
      <b>View map</b>
      <p>Phone: +44 345 678 903</p>
      <p>Email: luxury_hotels@gmail.com</p>

      </div>

      <div style={{
        // border: "1px solid red",
        fontFamily: "Montserrat",
        fontSize: "25px",
        fontWeight: "400",
        lineHeight: "4px",
        color: "#14274A",
        display: "flex",
        flexDirection: "column",
      }}>
       <p>Name</p>
       <input type="text" style={{
        width: "400px",
        height: "40px"
       }}/>
       <p>Email Address</p>
       <input type="text" style={{
        width: "400px",
        height: "40px"
       }}/>
       <p>Message</p>
       <textarea name="" id="" cols="30" rows="10"></textarea>
       <div style={{
        display: "flex",
        justifyContent: "end",
        marginTop: "25px"
       }}>
       <input type="submit" style={{
        padding: "15px 30px",
        backgroundColor: "#E0B973",
        color: "white",
        border: "none",
        borderRadius: "5px",
        fontFamily: "Montserrat",
        fontSize: "18px",
        fontWeight: "700",
        cursor: "pointer",
       }}/>
       </div>
      </div>
    </div>
    <FooterComponent/>
    </div>//main
  )
}

export default ContactusComconent