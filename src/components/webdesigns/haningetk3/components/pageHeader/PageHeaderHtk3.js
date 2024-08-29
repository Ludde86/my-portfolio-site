import React from "react";
import "./pageHeaderHtk3.css";

const PageHeaderHtk3 = ({ header }) => {
  return (
    <div className="htk3-page_header">
      <h1 className="htk3-page_header-header">{header}</h1>
      <div className="htk3-page_header-underline"></div>
    </div>
  );
};

export default PageHeaderHtk3;
