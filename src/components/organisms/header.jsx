import React, { useState } from "react";
import classNames from "classnames";
import Title from "../atoms/title";
import CustomInput from "../atoms/input";

const Header = ({ className }) => {
  const [search, setSearch] = useState(null);
  return (
    <div
      className={classNames(
        className,
        "flex flex-row md:flex-col justify-between px-4 md:p- h-full items-center gap-x-5"
      )}
    >
      <Title fullTitle={import.meta.env.VITE_APP_PROJECT_TITLE} />
      <CustomInput onChange={setSearch} className="h-8" placeholder="Search" />
      <div>{search}</div>
    </div>
  );
};

export default Header;
