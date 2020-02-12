import React from "react";

function Service(props) {
  console.log("Service props", props);

  return (
    <div className={props.className} key={props.key}>
      <h2>{props.title}</h2>
      <h1>{props.heading}</h1>

      {props.countries ? (
        <select>
          {props.countries.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      ) : null}
      <div>
        <img
          src={props.imageUrl}
          width="200"
          height="100"
          className="patients-doctors-images"
          alt={props.id}
        />
      </div>
    </div>
  );
}

export default Service;
