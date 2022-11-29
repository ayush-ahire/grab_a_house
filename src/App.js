import "./App.css";
import React from "react";
import { ToastContainer } from 'react-toastify';
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRouter from "./components/PrivateRouter";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRouter/>} >
            <Route path="/profile" element={<Profile/>}/>
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing/>} />
          <Route path="/contact/:landlordId" element={<Contact/>} />
          <Route path="category/:categoryName/:listingId" element={<Listing/>} />
        </Routes>
        <Navbar />
        <ToastContainer/>
      </Router>
    </>
  );
}

export default App;
