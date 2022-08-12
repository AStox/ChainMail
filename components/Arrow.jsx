export default function Arrow() {
  return (
    <svg
      className="Arrow"
      viewBox="0 0 756 46"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_101_378)">
        <path
          d="M755.068 25.1213C756.239 23.9497 756.239 22.0503 755.068 20.8787L735.976 1.7868C734.804 0.615224 732.905 0.615224 731.733 1.7868C730.562 2.95837 730.562 4.85786 731.733 6.02944L748.704 23L731.733 39.9706C730.562 41.1421 730.562 43.0416 731.733 44.2132C732.905 45.3848 734.804 45.3848 735.976 44.2132L755.068 25.1213ZM0 26H752.946V20H0V26Z"
          fill="#C5351D"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_101_378"
          x="-1"
          y="-0.0919189"
          width="757.946"
          height="46.1838"
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
  );
}
