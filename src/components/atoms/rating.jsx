import React from "react";
import Badge from "./badge";

const Rating = ({ rating }) => {
  return <Badge text={rating} emoji={"*"} />;
};

export default Rating;
