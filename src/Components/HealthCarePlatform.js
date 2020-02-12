import React from "react";

function HealthCarePlatform(props) {
  return (
    <section className="stats-section">
      <div className="stats-letf">
        <h1>
          The world's <br />
          biggest healthcare platform
        </h1>
        <p>
          {" "}
          We work from 6 offices all over the world, bringing Docplanner <br />
          Group to life in almost 20 countries.
        </p>
        <br />
      </div>

      <div className="stats-right">
        <div className="small-box-item">
          {props.stats.map((el, i) => {
            return (
              <div key={i} className="box-1 ">
                <img src={el.image} alt={el.alt} sizes={el.sizes}></img>
                <h3>{el.title}</h3>
                <p> {el.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HealthCarePlatform;
