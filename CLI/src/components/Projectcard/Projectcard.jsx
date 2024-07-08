import React from "react";
import { Link } from "react-router-dom";
import "./Projectcard.css"

const Projectcard = ({ item }) => {
  return (
    <Link className="link" to="/gigs">
    <div>
      <div className="ProjectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="pp">
            <img src={item.pp} alt="" />
          </div>
          <div className="user-info">
            <p>{item.cat}</p>
            <p>{item.username}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Projectcard ;
