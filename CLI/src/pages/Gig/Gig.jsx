import React from "react";
import "./Gig.css";
import { Slider } from "infinite-react-carousel";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/Reviews/Reviews";
export const Gig = () => {
  

  const  {id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });
  
  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });


  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span>
              Fiver {">"} Graphics Design {">"}
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? "Loading" : errorUser ?"something went wrong" :
             <div className="user">
              <img
                src={dataUser.img||"/Images/noavatar.png"}
                alt="pp"
                className="pp"
              />
              <span>{dataUser.username}</span>
              {!isNaN(data.totalStars / data.starNumber) && (
                  <div>
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      ?.map((item, i) => (
                        <img
                          src="../Images/star.png"
                          alt="star"
                          className="star"
                          key={i}
                          />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber) } </span>
                  </div>
                )}
       
            </div>
             } 

            <Slider slideToShow={1} >
              {data.images?.map((img) => {
                return <img src={img} alt="" />;
              })}
            </Slider>

            <h2 className="aboutGig">About this gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? "Loading" : errorUser ? "Something went wrong" : (
              <>
            <h2 className="aboutSeller">About Seller</h2>

            <div className="sellerProfile">
              <img
                className="pp"
                src={dataUser.img||"/Images/noavatar.png"}
                alt=""
              />
              <div className="user-info">
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div>
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      ?.map((item, i) => (
                        <img
                          src="../Images/star.png"
                          alt="star"
                          className="star"
                          key={i}
                        />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <button className="contact"> Contact Me</button>
              </div>
            </div>

            
            <div className="sellerDetail">
              <div className="detail-top">
                <div className="from">
                  <span>From</span>
                  <span>{dataUser.country}</span>
                </div>
                <div className="member">
                  <span>Member Since</span>
                  <span>Aug 2022</span>
                </div>
                <div className="response">
                  <span>Avg. response time</span>
                  <span>4 Hours</span>
                </div>
                <div className="last-delivery">
                  <span>Last Delivery</span>
                  <span>1 Day</span>
                </div>
                <div className="Lang">
                  <span>Labguages</span>
                  <span>English</span>
                </div>
              </div>
              <hr />
              <div className="detail-bottom">
                <p>
                  {dataUser.desc || "Description"}
                </p>
              </div>
            </div>
            </>
             )} 
          <Reviews gigId={id}/>
          </div>

          <div className="right">
            <div className="price">
              <h2>{data.shortTitle}</h2>
              <span> $ {data.price} </span>
            </div>
            <p>{data.shortDesc}</p>
            <div className="delivery">
              <div className="delev">
                <img src="../Images/timer.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="revision">
                <img src="../Images/restart.png" alt="" />
                <span>{data.revisionNumber} Revision</span>
              </div>
            </div>
            <div className="content">
              {data.features?.map((feature,i) => {
                return (
                  <div className="ic" key={i}>
                    <img src="../Images/blue-check.png" alt="" />
                    <span>{feature}</span>
                    
                  </div>
                );
              })}
            </div>
            <button type="button">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};
