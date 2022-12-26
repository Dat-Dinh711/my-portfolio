import React from 'react';

const Buttons = () => {
  return (
    <div className="buttons">
      {/* <a href={CV} className="btn" download="Dat's CV">Download CV</a> */}
      <a
        href="https://drive.google.com/file/d/1LJaCzNP8ekdjWgGdPCBVwoOtwGY6nSWP/view"
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        My CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Buttons;
