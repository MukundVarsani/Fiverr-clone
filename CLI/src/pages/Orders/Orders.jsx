import React from "react";
import "./Orders.css";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
export const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });
console.log(data);
  const handleContact = async (order) => {
    const [sellerId, buyerId] = [order.sellerId, order.buyerId];
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (error) {
      if ((error.response.status = 404)) {
        const res = await newRequest.post(`/conversations`, {
          to: currentUser.seller ? buyerId : sellerId,
        });

        navigate(`/message/${res.data.id}`);
      }
    }
  };

  return (
    <div className="order">
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
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>

                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((order) => {
                return (
                  <>
                    <tr>
                      <td>
                        <img
                          className="order-img"
                          src={order.img || "./images/noavatar.png"}
                          alt=""
                        />
                      </td>

                      <td align="center">{order.title}</td>
                      <td align="center">{order.price}</td>
                      <td align="center">
                        <img
                          onClick={() => {
                            handleContact(order);
                          }}
                          className="delete"
                          src="../Images/message.png"
                          alt=""
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
