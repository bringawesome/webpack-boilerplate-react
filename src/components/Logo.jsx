import React from "react";

function Logo({ title, link, src, width }) {
  return (
    <a href={link} target="_blank" aria-label={title + " logo"} role="link">
      <img
        className={"logo " + title}
        src={src}
        width={width}
        title={title}
        alt={title + " logo"}
      ></img>
    </a>
  );
}

export default Logo;
