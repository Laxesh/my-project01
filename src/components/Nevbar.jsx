import React from "react";
import { Link } from "react-router-dom";

function Nevbar() {
  return (
    <>
      <div className="flex justify-between bg-slate-500 text-slate-100 p-4 font-medium">
        Logo
        <div>
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product </Link>
            </li>
            <li>
              <Link to="/contect">Contect</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nevbar;
