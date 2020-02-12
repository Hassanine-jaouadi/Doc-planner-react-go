import React from "react";

import Office from "./Office";

function OfficesList(props) {
  return (
    <div className="office-List">
      {props.ourOffices.map((el, i) => {
        return (
          <Office
            className={el.className}
            key={i}
            url={el.url}
            imageUrl={el.imageUrl}
            title={el.title}

            // {...el} objects destrcturing
          />
        );
      })}
    </div>
  );
}

export default OfficesList;
