import React from "react";
import { useNavigate } from "react-router-dom";

const Title = ({ fullTitle, smallLogo }) => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer" onClick={() => navigate("/")}>
      <div className="hidden md:block text-2xl font-extrabold tracking-widest">
        {fullTitle}
      </div>
      <div className="md:hidden">
        {smallLogo ? null : (
          <p className="text-2xl font-extrabold">{fullTitle[0]}</p>
        )}
      </div>
    </div>
  );
};

export default Title;
