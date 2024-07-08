import React from "react";
import { Link } from "react-router-dom";
import "./Gigcard.css";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Gigcard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to= {`/gig/${item._id}`} className="link">
      <div className="gigcard">
        <img src={item.cover} alt="hello" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "something went wrong"
          ) : (
            <div className="user">
              <img src={data.img || "Images/noavatar.png"} alt="pp" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.title}</p>
          <div className="star">
            <img src="../images/star.png" alt="" />
            <span>{!isNaN(item.totalStars/item.starNumber) && Math.round(item.totalStars/item.starNumber)} </span>
          </div>
        </div>

        <hr />
        <div className="detail">
          <img src="../images/heart.png" alt="" />

          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gigcard;
