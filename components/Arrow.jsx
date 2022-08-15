export default function Arrow() {
  return (
    <div className="Arrow">
      <div className="line" />
      <svg
        className="svg"
        width="64"
        height="45"
        viewBox="0 0 64 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii_101_378)">
          <path
            d="M63.1029 24.0856C64.2547 22.8947 64.2231 20.9955 63.0321 19.8436L43.6245 1.0728C42.4335 -0.0790654 40.5343 -0.0473833 39.3824 1.14357C38.2305 2.33452 38.2622 4.23375 39.4532 5.38562L56.7044 22.0708L40.0193 39.322C38.8674 40.513 38.8991 42.4122 40.09 43.5641C41.281 44.7159 43.1802 44.6843 44.3321 43.4933L63.1029 24.0856ZM1.05004 25.9996L60.9965 24.9996L60.8964 19.0004L0.949962 20.0004L1.05004 25.9996Z"
            fill="#C5351D"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_101_378"
            x="-0.0498047"
            y="-0.770752"
            width="64.9961"
            height="46.1785"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_101_378" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_101_378"
              result="effect2_innerShadow_101_378"
            />
          </filter>
        </defs>
      </svg>
    </div>

    // <svg
    //   className="Arrow"
    //   viewBox="0 0 756 46"
    //   fill="none"
    //   preserveAspectRatio="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g filter="url(#filter0_ii_101_378)">
    //     <path
    //       d="M755.068 25.1213C756.239 23.9497 756.239 22.0503 755.068 20.8787L735.976 1.7868C734.804 0.615224 732.905 0.615224 731.733 1.7868C730.562 2.95837 730.562 4.85786 731.733 6.02944L748.704 23L731.733 39.9706C730.562 41.1421 730.562 43.0416 731.733 44.2132C732.905 45.3848 734.804 45.3848 735.976 44.2132L755.068 25.1213ZM0 26H752.946V20H0V26Z"
    //       fill="#C5351D"
    //     />
    //   </g>
    //   <defs>
    //     <filter
    //       id="filter0_ii_101_378"
    //       x="-1"
    //       y="-0.0919189"
    //       width="757.946"
    //       height="46.1838"
    //       filterUnits="userSpaceOnUse"
    //       colorInterpolationFilters="sRGB"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //       <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dx="1" dy="1" />
    //       <feGaussianBlur stdDeviation="1" />
    //       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    //       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
    //       <feBlend mode="normal" in2="shape" result="effect1_innerShadow_101_378" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset dx="-1" dy="-1" />
    //       <feGaussianBlur stdDeviation="1" />
    //       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    //       <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
    //       <feBlend
    //         mode="normal"
    //         in2="effect1_innerShadow_101_378"
    //         result="effect2_innerShadow_101_378"
    //       />
    //     </filter>
    //   </defs>
    // </svg>
  );
}
