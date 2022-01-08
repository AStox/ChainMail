import "./Telegram.sass";
import "./Stamp.sass";
import React from "react";

const Stamp = () => (
  <div className="Stamp">
    <svg
      className="Telegram"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      viewBox="-25 -25 400 400"
    >
      <g transform="translate(-1,4) scale(7,7)">
        <g transform="translate(25,25) rotate(-30)  scale(0.3,0.3)">
          <polygon
            points="0,-60 -35,0 0,20 35,0"
            fill="none"
            stroke="#0087A3"
            stroke-width="3px"
          />
          <polygon
            points="-35,0 0,20 35,0 0,-20"
            fill="none"
            stroke="#0087A3"
            stroke-width="3px"
          />
          <polygon
            points="-35,10 0,60 35,10 0,30"
            fill="none"
            stroke="#0087A3"
            stroke-width="3px"
          />
        </g>
        <text class="metadata tiny">
          <textPath href="#stamp">
            0x38bcb1f8759441af68703d3aef5a1a8f222218088c1f1a7d1fa0e5030d973c2b
          </textPath>
          <animateTransform
            attributeType="XML"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="10s"
            repeatCount="indefinite"
          />
        </text>
        <path
          fill="none"
          d="M -2,25 A 27 27 0 1 0 -2,24.5 z"
          stroke="#0087A3"
          stroke-width="1"
        />
      </g>

      <defs>
        <path id="stamp" fill="none" d="M 0,25 A 25 25 0 1 0 0,24.99 z" />
        <filter id="f2" x="-0.1" y="-0.1" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
    </svg>
  </div>
);

export default Stamp;
