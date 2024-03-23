import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./navbar";
import HomeComponent from "./navbar/home";
import FacilitiesComponent from "./navbar/facilities"
import RoomsComponent from "./navbar/rooms";
import ContactusComconent from "./navbar/contact-us";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="home" element={<HomeComponent />} />
        <Route path="facilities" element={<FacilitiesComponent/>}/>
        <Route path="rooms" element={<RoomsComponent/>}/>
        <Route path="contact-us" element={<ContactusComconent/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
