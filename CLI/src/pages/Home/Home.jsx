import React from "react";
import { Featured } from "../../components/Featured/Featured";
import { Trustedby } from "../../components/Trustedby/Trustedby";
import Slide from "../../components/Slide/Slide";
import cards, { pcards } from "../../data.js";
import Projectcard from "../../components/Projectcard/Projectcard";
import Catcard from "../../components/Catcard/Catcard";
import "./Home.css";
// import { Footer } from "../../components/Footer/Footer";
export const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card ,i) => {
          return <Catcard item={card} id={i} />;
        })}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h2>The best part? Everything.</h2>
            <div className="title">
              <img src="./Images/check-box.png" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./Images/check-box.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src="./Images/check-box.png" alt="" />
              Pay when you're happy
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./Images/check-box.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src="./Images/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features bussiness-sol">
        <div className="container">
          <div className="item">
            <h2>Fiver .bussiness solution</h2>
            <h2>Advanced solutions and professional talent for businesses</h2>
            <div className="title">
              <img src="./Images/blue-check.png" alt="" />
              Fiverr Pro
            </div>
            <p>
              Access top freelancers and professional business tools for any
              project
            </p>
            <div className="title">
              <img src="./Images/blue-check.png" alt="" />
              Fiverr Certified
            </div>
            <p>Build your own branded marketplace of certified experts</p>
            <div className="title">
              <img src="./Images/blue-check.png" alt="" />
              Fiverr Enterprise
            </div>
            <p>
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>

            <a href="/" className="explore">
              Explore Fiver Bussiness{" "}
            </a>
          </div>
          <div className="item">
            <img
              className="side-img"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={3}>
        {pcards.map((pcard) => {
          return <Projectcard item={pcard} id={pcard?.id} />;
        })}
      </Slide>
    </div>
  );
};
