import React from "react";
import { Link } from "react-router-dom";
import "./Catcard.css"

const Catcard = ({ item }) => {
  return (
    <Link to="/gig">
    <div>
      <div className="catCard">
        <img src={item.img} alt="" />
        <div className="desc">{item.desc}</div>
        <div className="title">{item.title}</div>
      </div>
    </div>
    </Link>
  );
};

export default Catcard;
