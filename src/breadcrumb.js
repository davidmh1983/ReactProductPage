import React from "react";
import "./breadcrumb.scss";
const breadcrumb = () => {
  //This should be dynamic.
  let pages = ["HOME", " CAT 1", " CAT 2"];
  return (
    <ul className="breadcrumb">
      {pages.map(page => {
        return (
          <li key={page} className="breadcrumbItem">
            <span className="breadcrumbPage"> {page} </span>
            <span> &#8250; </span>
          </li>
        );
      })}
    </ul>
  );
};

export default breadcrumb;
