import React from "react";

import Service from "./Service";

function ServicesList(props) {
  console.log("ServicesList props", props);

  return (
    <div className="first-two-paragraphs">
      {props.services.map((el, i) => {
        return (
          <Service
            id={el.id}
            key={i}
            title={el.title}
            heading={el.heading}
            imageUrl={el.imageUrl}
            countries={el.countries}
            className={el.className}

            // {...el} objects destrcturing
          />
        );
      })}
    </div>
  );
}

export default ServicesList;
