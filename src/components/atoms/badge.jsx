import React from "react";

const Badge = ({ text, emoji }) => {
  return (
    <div className="badge badge-primary gap-2">
      {text}
      {emoji && emoji}
    </div>
  );
};

export default Badge;
