import React from "react";
import "./block.css";
import BlockMain from "./blockMain/blockMain";
import BlockOne from "./BlockOne/BlockOne";
import BlockTwo from "./BlockTwo/BlockTwo";
import TimelineComp from "./TimelineComp/Timeline";
function block() {
  return (
    <div style={{ marginTop: "200px" }}>
      <BlockMain />
      <BlockOne />
      <BlockTwo />
      <TimelineComp />
    </div>
  );
}

export default block;
