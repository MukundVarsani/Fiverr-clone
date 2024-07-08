import React, { useRef, useState } from "react";
import "./Gigs.css";
import Gigcard from "../../components/Gigcard/Gigcard";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();
let Search=0;
  const { search } = useLocation();
  (!search ) ? Search = "?" : Search = search
  // console.log(Search);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get(
        `/gigs${Search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        ).then((res) => {
        return res.data;
      }),
  });


  const reSort = (type) => {
    setSort(type);
    setOpen(false);
    // console.log(sort);
  };

  useEffect(() => {
    refetch();
  }, [sort]);
  const apply = () => {
    refetch();
    // console.log(minRef.current.value);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Graphics designer</span>
        <h1>AI boundry</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
          consequatur.
        </p>
        <div className="menu">
          <div className="left">
            <span>budget</span>
            <input type="number" ref={minRef} placeholder="min" />
            <input type="number" ref={maxRef} placeholder="max" />
            <button type="button" onClick={apply}>
              Apply
            </button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./images/down-arrow.png"
              alt=""
              onClick={() => {
                setOpen(!open);
              }}
            />
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading"
            : error
            ? "something went wrong"
            : data?.map((gig) => {
                return <Gigcard key={gig._id} item={gig} />;
              })}
        </div>
      </div>
    </div>
  );
};
