import React, { useState } from "react";
import "./Review.css";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const Like = () => {
    if (!dislike) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const Dislike = () => {
    if (!like) {
      setDislike(true);
    } else {
      setDislike(false);
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });



  return (
    <div className="review">
      <h2>Reviews</h2>
      {isLoading ? (
        "loading"
      ) : error ? (
        "some thing went wrong"
      ) : (
        <div className="user-profile">
          <img src={data.img || "/Images/noavatar.png"} alt="" />
          <div className="user-info">
            <span>{data.username}</span>
            <span>{data.country}</span>
          </div>
        </div>
      )}
      <div className="star">
        {Array(review.star)
          .fill()
          .map((item, i) => {
           return <img src="../Images/star.png" alt="" key={i} />;
          })}
      </div>
      <p>{review.desc}</p>

      <div className="helpful">
        <span>Helpful?</span>
        {like ? (
          <img src="../Images/like.png" alt="" onClick={() => Like()} />
        ) : (
          <img src="../Images/lightlike.png" onClick={() => Like()} alt="" />
        )}
        <span>Yes</span>
        {dislike ? (
          <img src="../Images/dislike.png" onClick={() => Dislike()} alt="" />
        ) : (
          <img
            src="../Images/lightdislike.png"
            onClick={() => Dislike()}
            alt=""
          />
        )}
        <span>No</span>
      </div>
      <hr />
    </div>
    // <>
    // {/* <span>this is review {review} </span> */}
    // </>
  );
};

export default Review;
