import React from "react";
import { useState, useEffect } from "react";
import Nevbar from "../components/Nevbar";
// import { Grid } from "@mui/material";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <Nevbar title="Shop" />
      <div className="flex flex-wrap  m-5 ">
        {data.map((product) => (
          <div key={product.id} className="h-80">
            <img src={product.thumbnail} alt="" className="h-72 w-96" />
            <h1 className="w-60">{product.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
