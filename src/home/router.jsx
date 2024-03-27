import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomeComponent from "./navbar/home";
import FacilitiesComponent from "./navbar/facilities"
import RoomsComponent from "./navbar/rooms";
import ContactusComconent from "./navbar/contact-us";
import TopnavbarComponent from "./topnavbar";
import LoginComponent from "./navbar/login";
import Notfound from "./navbar/notfound";

const RouterComponent = () => {
  const location = useLocation()
  const showNavbar = location.pathname !=="/login"
  return (
    <>
     {showNavbar && <TopnavbarComponent/>}
      <Routes>
        <Route path="*" element={<Notfound/>}/>
        <Route path="login" element={<LoginComponent/>}/>
        <Route path="/" element={<HomeComponent />} />
        <Route path="facilities" element={<FacilitiesComponent/>}/>
        <Route path="rooms" element={<RoomsComponent/>}/>
        <Route path="contact-us" element={<ContactusComconent/>}/>
      </Routes>
    </>
  );
};

export default RouterComponent;
