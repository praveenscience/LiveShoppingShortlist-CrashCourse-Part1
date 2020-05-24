import React from "react";

const ContainerRow = ({ fluid, className, children }) => (
  <div
    className={
      "container" +
      (fluid ? "-fluid" : "") +
      (className && className.length > 0 ? " " + className : "")
    }
  >
    <div className="row">{children}</div>
  </div>
);

export default ContainerRow;