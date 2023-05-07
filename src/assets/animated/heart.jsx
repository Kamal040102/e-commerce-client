import React from "react";
import classNames from "classnames";

const HeartAnimated = ({ className }) => {
  return (
    <picture className={classNames(className)}>
      <source
        srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp"
        type="image/webp"
      />
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif"
        alt="❤"
        width="32"
        height="32"
      />
    </picture>
  );
};

export default HeartAnimated;
