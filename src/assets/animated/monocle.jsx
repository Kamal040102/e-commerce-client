import classNames from "classnames";
import React from "react";

const MonocleAnimated = ({ className, height = 32, width = 32 }) => {
  return (
    <picture className={classNames(className)}>
      <source
        srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d0/512.webp"
        type="image/webp"
      />
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d0/512.gif"
        alt="🧐"
        width={width}
        height={height}
      />
    </picture>
  );
};

export default MonocleAnimated;
