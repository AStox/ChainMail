import useMousePosition from "hooks/UseMousePosition";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
// import "./Cube.sass";

const mouse = useMousePosition;

const Cube = () => {
  const screenX = window?.screen.width;
  const screenY = window?.screen.height;
  const valueX1 = (mouse().x - screenX / 2) * 0.99 + screenX / 2;
  const valueY1 = (mouse().y - screenY / 2) * 0.99 + screenY / 2;
  const valueX2 = (mouse().x - screenX / 2) * 0.98 + screenX / 2;
  const valueY2 = (mouse().y - screenY / 2) * 0.98 + screenY / 2;
  const valueX3 = (mouse().x - screenX / 2) * 0.97 + screenX / 2;
  const valueY3 = (mouse().y - screenY / 2) * 0.97 + screenY / 2;
  return (
    <>
      <Square height={100} width={100} x={mouse().x} y={mouse().y} opacity="1" />
      <Square height={95} width={95} x={valueX1} y={valueY1} opacity="0.5" />
      <Square height={90} width={90} x={valueX2} y={valueY2} opacity="0.4" />
      <Square height={85} width={85} x={valueX3} y={valueY3} opacity="0.3" />
    </>
  );
};

const Square = ({ height, width, x, y, opacity }) => (
  <div className="Cube" style={{ top: y - height / 2, left: x - width / 2 }}>
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Symbols"
        stroke="none"
        // stroke-width="1"
        fill="none"
        // fill-rule="evenodd"
        opacity={opacity}
      >
        <g id="Cube/unlit">
          <rect id="Rectangle" x="0" y="0" width="100" height="100" rx="30"></rect>
        </g>
      </g>
    </svg>
  </div>
);

export default Cube;
