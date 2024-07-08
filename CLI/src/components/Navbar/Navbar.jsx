import React, { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, SetActive] = useState(true);
  const [open, SetOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? SetActive(true) : SetActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.addEventListener("scroll", isActive);
    };
  });

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const handleLogOut = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log();
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar "}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Bussiness</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become Seller</span>}
          
          {currentUser ? (
            <div className="user" onClick={() => SetOpen(!open)}>
              <img
                src={currentUser.img || "./Images/noavatar.png"}
                alt="profile "
              />
              <span>{currentUser.username}</span>

              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to={"/mygigs"}>
                        {" "}
                        Gigs{" "}
                      </Link>
                      <Link className="link" to={"/add"}>
                        Add new Gigs{" "}
                      </Link>
                    </>
                  )}
                  <Link className="link" to={"/orders"}>
                    Order
                  </Link>
                  <Link className="link" to={"/messages"}>
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogOut}>
                    Log out
                  </Link>
                </div>
              )}
            </div>
          ):(
            <>
            <Link to="/login" className="link">
                <span>Sign In</span>
              </Link>
            <Link to="/register" className="link join">
            {!currentUser?.username && <button>Join</button>}
            </Link>
          </>
          )}
              
        </div>
      </div>
      {(active || pathname !== "/") && (
      <>          {" "}
          <hr className="line" />
          <div className="menu">
            <Link to={"/"} className="link">
              Graphics Design
            </Link>
            <Link to={"/"} className="link">
              Video Animation
            </Link>
            <Link to={"/"} className="link">
              Writing translation
            </Link>
            <Link to={"/"} className="link">
              AI Service
            </Link>
            <Link to={"/"} className="link">
              Digital Marketing
            </Link>
            <Link to={"/"} className="link">
              Music & Audio
            </Link>
            <Link to={"/"} className="link">
              Programing & Tech
            </Link>
            <Link to={"/"} className="link">
              Bussiness
            </Link>
            <Link to={"/"} className="link">
              Life Style
            </Link>
          </div>
          </>

      )}
    </div>
  );
};

export default Navbar;
