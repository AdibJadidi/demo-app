import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../components/navigation.css";
function Navigation() {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "About", to: "/about-us" },
    { name: "Profile", to: "/profile" },
    { name: "Blog", to: "/blogs" },
    { name: "Post", to: "/post" },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);
