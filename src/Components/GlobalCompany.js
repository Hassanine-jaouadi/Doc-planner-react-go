import React from "react";

function GlobalCompany(props) {
  return (
    <section className="sections-brand">
      <h2 className="h2-brand">We are a global company with local culture</h2>
      <ul className="brands-imgaes">
        {props.partners.map((el, i) => {
          return (
            <li key={i} className="brands-imgaes ">
              <a href={el.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={el.viewBox}
                  width={el.width}
                  height="32"
                >
                  <path d={el.d}></path>
                </svg>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default GlobalCompany;
