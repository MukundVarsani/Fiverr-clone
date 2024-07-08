import React from "react";
import "./Message.css";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
export const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };
console.log(data);
  return (
    <div className="message">
      <div className="container">
        <div className="breadCrumb">
          <span>
            <Link to="/messages" className="link">
              Messages
            </Link>
            {" > "}
            john Doe
          </span>
        </div>

        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <>
            <div className="see-msg">
              {data.map((m) => {
                return (
                  <div className={m.userId === currentUser._id ? "sender" : "sender reciever"} key={m._id}>
                    <img
                      src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg"
                      alt=""
                    />
                    <p>{m.desc}</p>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="write-msg">
              <form onSubmit={handleSubmit}>
                <textarea
                  name=""
                  placeholder="Write message here"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
