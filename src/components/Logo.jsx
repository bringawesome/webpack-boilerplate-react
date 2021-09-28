import React from "react";

function Logo({ title, link, src, width }) {
  return (
    <a
      href={link}
      target="_blank"
      aria-label={title + " logo"}
      role="link"
      rel="noreferrer"
    >
      <img
        className={"logo " + title}
        src={src}
        width={width}
        height={width}
        title={title}
        alt={title + " logo"}
      ></img>
    </a>
  );
}

export default Logo;
