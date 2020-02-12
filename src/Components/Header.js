import React from "react";

function Header() {
  return (
    <div>
      <div className="logo-under-nav">
        <img src="/img/doclogo.png" alt="asterisk" width="50" height="50" />
      </div>

      <h1 className="main-h1"> Making the healthcare experience more human </h1>

      <div className="first-two-paragraphs">
        <p className="paragraph-1">
          We want patients to find the perfect doctor and book an appointment in
          the most easy way. The patient journey should be enjoyable, and that's
          why we are always next to them: to help them find the best possible
          care. Anytime, anywhere.
        </p>

        <p className="paragraph-2">
          We also help doctors to better manage their practice and build their
          online reputation. With our integrated end-to-end solution, doctors
          are able not only to improve their online presence, but also to devote
          their time to what really matters: their patients.
        </p>
      </div>
    </div>
  );
}

export default Header;
