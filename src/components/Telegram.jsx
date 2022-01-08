import './Telegram.sass';
import React from 'react';

const Telegram = () => (
    <svg className="Telegram" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="-25 -25 400 400">
      <rect x="-25" y="-25" width="425" height="425" fill="#A7C4C2" />
      <g transform="translate(0,50)">
        <rect width="350" height="250" fill="#0D141F" class="base" filter="url(#f2)" rx="4" ry="4"/>
        <rect>
        </rect>
        <g transform="translate(80,40)">
          <text class="title">METAVERSAL POST OFFICE</text>
          <line x1="17" y1="3" x2="160" y2="3" stroke="#B6412A"/>
          <text class="title subtitle" x="35" y="20">TELEGRAPH</text>
        </g>
        <g transform="translate(10,18)">
          <text class="text" x="0" y="0">No.</text>
          <text class="metadata" x="20" y="0">0023</text>
          <line x1="17" y1="3" x2="60" y2="3" stroke="#B6412A"/>
        </g>
        <g transform="translate(270,18)">
          <text class="text" x="0" y="0">Block</text>
          <text class="metadata" x="30" y="0">1311235</text>
          <line x1="27" y1="3" x2="75" y2="3" stroke="#B6412A"/>
        </g>
        <g transform="translate(287,27)">
          <text class="text" x="0" y="5">Block Stamp</text>
            <polygon points="0,8 0,53, 55,53, 55,8" fill="none" stroke="#1B3450" stroke-dasharray="3"/>
          <g transform="translate(-1,4) scale(1,1)">
            <g transform="translate(25,25) rotate(-30)  scale(0.3,0.3)">
              <polygon points="0,-60 -35,0 0,20 35,0" fill="none" stroke="#0087A3" stroke-width="3px"/>
              <polygon points="-35,0 0,20 35,0 0,-20" fill="none" stroke="#0087A3" stroke-width="3px"/>
              <polygon points="-35,10 0,60 35,10 0,30" fill="none" stroke="#0087A3"stroke-width="3px"/>
            </g>
            <text class="metadata tiny">
              <textPath href="#stamp">0x38bcb1f8759441af68703d3aef5a1a8f222218088c1f1a7d1fa0e5030d973c2b</textPath>
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
            <path fill="none" d="M -2,25 A 27 27 0 1 0 -2,24.5 z" stroke="#0087A3" stroke-width="1" />
          </g>
          
        </g>
        <g transform="translate(0,100)">
          <g transform="translate(210,-10)">
            <text class="text" x="0" y="0">Timestamp</text>
            <text class="metadata" x="28" y="0"></text>
            <line x1="50" y1="3" x2="135" y2="3" stroke="#B6412A"/>
          </g>
          <g transform="translate(10,-10)">
            <text class="text" x="0" y="0">To</text>
            <text class="metadata" x="15" y="0">0x0ed3...fa4</text>
            <line x1="12" y1="3" x2="100" y2="3" stroke="#B6412A"/>
          </g>
          <g transform="translate(0,0)">
            <line x1="5" y1="0" x2="345" y2="0" stroke="#B6412A"/>
            <line x1="40" y1="0" x2="40" y2="145" stroke="#B6412A"/>
            <g transform="translate(55,20)">
              <line x1="0" y1="25" x2="270" y2="25" stroke="#1B3450"/>
              <line x1="0" y1="45" x2="270" y2="45" stroke="#1B3450"/>
              <line x1="0" y1="65" x2="270" y2="65" stroke="#1B3450"/>
              <line x1="0" y1="85" x2="270" y2="85" stroke="#1B3450"/>
              <text class="text content" x="0" y="0">
                <tspan x="0" dy="20">
                  <tspan class="muted">></tspan><tspan>Hello World</tspan>
                </tspan>
                <tspan x="0" dy="20">
                  <tspan class="muted">></tspan><tspan>How are you?</tspan>
                </tspan>
                <tspan x="0" dy="20">
                  <tspan class="muted">></tspan><tspan></tspan>
                </tspan>
                <tspan x="0" dy="20">
                  <tspan class="muted">></tspan><tspan></tspan>
                </tspan>
              </text>
              <g transform="translate(0,119)">
                <text class="text fineprint" x="0" y="0">FOR ONE FREE RESPONSE TO THIS TELEGRAM, VISIT THE METAVERAL POST OFFICE OR</text>
                <text class="text fineprint" x="0" y="6">WWW.METAVERSALPOST.IO WITH THE WALLET OWNING THIS NON-FUNGIBLE TELEGRAM.</text>
              </g>
            </g>
          </g>
        </g>
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
);

export default Telegram;