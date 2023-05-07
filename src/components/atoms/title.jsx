import React from "react";

const Title = ({ fullTitle, smallLogo }) => {
  return (
    <React.Fragment>
      <div className="hidden md:block text-2xl font-extrabold tracking-widest">
        {fullTitle}
      </div>
      <div className="md:hidden">
        {smallLogo ? null : (
          <p className="text-2xl font-extrabold">{fullTitle[0]}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Title;
