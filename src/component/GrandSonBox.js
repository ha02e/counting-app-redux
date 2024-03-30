import React from "react";
import { useSelector } from "react-redux";

const GrandSonBox = () => {
  let count = useSelector((state) => state.count);
  return <div>결과는? {count}</div>;
};

export default GrandSonBox;
