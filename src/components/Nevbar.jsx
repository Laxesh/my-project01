import React from "react";
import { Link } from "react-router-dom";

function Nevbar(props) {
  return (
    <>
      <div className="flex justify-between bg-slate-500 text-slate-100 p-4 font-medium">
        <Link to="/">{props.title}</Link>

        <div>
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Login">Log-in </Link>
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

// Nevbar.prototypes = {
//   title: PropTypes.string,
// };

// Nevbar.defaultProps = {
//   title: "set tile here",
// };

export default Nevbar;
