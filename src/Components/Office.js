import React from "react";

function Office(props) {
  console.log("OfficesList props", props);

  return (
    <div className={props.className} key={props.key}>
      <a href={props.url}>
        <img src={props.imageUrl} alt="myImage" />

        <div className="gallery-caption">
          {props.title}
          <span className="gallery-button">See openings</span>
        </div>
      </a>
    </div>
  );
}

export default Office;
