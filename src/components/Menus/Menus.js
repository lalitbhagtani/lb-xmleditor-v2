import React from "react";
import { Button } from "@material-ui/core";

const Menus = ({ click, className, menusData }) => {
  return (
    <div className={className}>
      {menusData.map((item, index) => (
        <span key={index} className="menus">
          <Button size="medium" onClick={() => click[item]()} color="inherit">
            {item}
          </Button>
        </span>
      ))}
    </div>
  );
};

export default Menus;
