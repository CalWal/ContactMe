import React from "react";

const imageStyle = {
  height: "50px",
  width: "50px",
  padding: "5px"
};

const textStyle = {
  color: "white",
  display: "block"
};

class AboutMe extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1 style={textStyle}>
          <span> Callum Wallace </span>
        </h1>

        <h1 style={textStyle}>
          <span> Web Developer </span>
        </h1>
        <div className="icons">
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/html5.d84af59a.svg"
            style={imageStyle}
          />
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/css3.549a6229.svg"
            style={imageStyle}
          />
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/javascript.a2353fc4.svg"
            style={imageStyle}
          />
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/react.41a1ccf8.svg"
            style={imageStyle}
          />
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/redux.16f98df2.svg"
            style={imageStyle}
          />
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/git.088b353a.svg"
            style={imageStyle}
          />
          <img
            src="https://d-ivashchuk.github.io/portfolio/static/media/github.ff539b9a.svg"
            style={imageStyle}
          />
        </div>
      </div>
    );
  }
}

export default AboutMe;
