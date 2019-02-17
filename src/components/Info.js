import React from "react";

function Info() {
  return (
    <div className="aboutMe">
      <section>
        <h2 className="about">ABOUT</h2>
        <p>Hi there!</p>
        <p>I'm a developer, digital marketer and soccer player. </p>
        <p>
          You can check out all my work on{" "}
          <a href="https://github.com/CalWal" target="_blank">
            GitHub
          </a>
          .
        </p>
        <p>
          The best ways to contact me are by my{" "}
          <a
            href="https://www.linkedin.com/in/callum-wallace-1aa279107/"
            target="_blank"
          >
            LinkedIn{" "}
          </a>
          or by{" "}
          <a href="mailto:callumtrwallace@gmail.com" target="_blank">
            Email{" "}
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default Info;
