import * as React from "react";
import type { SVGProps } from "react";
const Background = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 600"
    width="100vw"
    className="fixed left-0 top-0 z-[-1]"
    height={"100vh"}
    {...props}
  >
    <defs>
      <filter id="a" width="120%" height="120%" x="-10%" y="-10%">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur" stdDeviation={161} />
      </filter>
    </defs>
    <g filter="url(#a)">
      <circle cx={141} cy={165} r={357} fill="#bba2c9" />
      <circle cx={595} cy={168} r={357} fill="#9a4dc4" />
      <circle cx={575} cy={491} r={357} fill="#bba2c9" />
      <circle cx={751} cy={435} r={357} fill="#bba2c9" />
      <circle cx={54} cy={546} r={357} fill="#9a4dc4" />
      <circle cx={323} cy={552} r={357} fill="#bba2c9" />
    </g>
  </svg>
);
export default Background;
