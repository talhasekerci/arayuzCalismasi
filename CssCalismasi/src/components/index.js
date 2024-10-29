import React, { useEffect, useRef, useState } from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";

function Index(props) {
  return (
    <div className="text-lg max-sm:text-base overflow-hidden ">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default Index;
