import React from "react";
import { useState, useEffect } from "react";
import Nevbar from "../components/Nevbar";
import { Grid } from "@mui/material";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <Nevbar></Nevbar>
      <div className="flex flex-wrap">
        {data.map((product) => (
          <div key={product.id} className="h-80  mx-20  my-5 p-1 ">
            <img src={product.image} alt="" className="h-64 w-60" />
            <h1 className="w-60">{product.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
