import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profile/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile/download">Download</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
