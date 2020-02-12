import React from "react";

function Nav(props) {
  return (
    <nav className="nav-flex-container ">
      <ul className="nav-flex-container ">
        <li>
          <img
            src="/img/logo-default-group-en.svg"
            alt="logo"
            className="docplanner-nav-logo"
            width="250"
            height="250"
          ></img>
        </li>
        {props.navItems.map((el, i) => {
          return (
            <li className="main-nav" key={i}>
              <a key={i} href={el.to}>
                {el.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Nav;
