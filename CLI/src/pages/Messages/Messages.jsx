import React from "react";
import "./Messages.css";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import newRequest from "../../utils/newRequest";

export const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleSubmit = (id) => {
    mutation.mutate(id);

  };
  console.log(data);


  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h2>Gigs</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Buyer</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {data?.map((c) => {
              return (
                <tbody>
                  <tr
                    className={
                      ((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readBySeller)) &&
                      ("active")
                    }
                    key={c.id}
                  >
                    <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                    <td>
                      <Link to={`/message/${c.id}`} className="link">
                        {c?.lastMessage?.substring(0, 100)}...
                      </Link>
                    </td>
                    <td>{moment(c.updatedAt).fromNow()}</td>
                    <td>
                      {((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readBySeller)) && (
                        <button onClick={() => handleSubmit(c.id)}>
                          Marked as read
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};
