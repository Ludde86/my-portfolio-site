import React from "react";
import "./pageHeaderHtk3.css";

const PageHeaderHtk3 = ({ header, color }) => {
  return (
    <div className="htk3-page_header">
      <h1 style={{ color: color }} className="htk3-page_header-header">
        {header}
      </h1>
      <div
        style={{ background: color }}
        className="htk3-page_header-underline"
      ></div>
    </div>
  );
};

export default PageHeaderHtk3;
