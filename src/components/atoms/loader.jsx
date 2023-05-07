import React from "react";
import RocketAnimated from "../../assets/animated/rocket";
import classNames from "classnames";

const CustomFullScreenLoader = ({
  className,
  fullScreen = true,
  message = true,
}) => {
  return (
    <div
      className={classNames(
        className,
        fullScreen && "h-screen",
        "flex flex-col justify-center items-center gap-y-5"
      )}
    >
      <RocketAnimated height={200} width={200} />
      {message && (
        <h2 className="text-2xl tracking-wide">
          Connecting with Server, Please wait!
        </h2>
      )}
    </div>
  );
};

export default CustomFullScreenLoader;
