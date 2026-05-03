export function PremiumLogo() {
  return (
    <svg
      className="premium-logo-svg"
      width="228"
      height="52"
      viewBox="0 0 228 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoPlate" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset="0.48" stopColor="#1684E3" />
          <stop offset="1" stopColor="#0B64BD" />
        </linearGradient>
        <linearGradient id="logoAccent" x1="10" y1="10" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FDE68A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="logoShadow" x="-18" y="-18" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.086 0 0 0 0 0.369 0 0 0 0 0.741 0 0 0 0.26 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1" result="shape" />
        </filter>
      </defs>

      <g filter="url(#logoShadow)">
        <rect x="2" y="2" width="48" height="48" rx="15" fill="url(#logoPlate)" />
        <rect x="2.75" y="2.75" width="46.5" height="46.5" rx="14.25" stroke="white" strokeOpacity="0.26" strokeWidth="1.5" />
      </g>

      <path
        d="M15 35V16H27.2C34.6 16 38.9 19.55 38.9 25.55C38.9 31.45 34.6 35 27.2 35H20.1V29.9H27.1C31.1 29.9 33.15 28.35 33.15 25.55C33.15 22.75 31.1 21.1 27.1 21.1H20.55V35H15Z"
        fill="white"
      />
      <path
        d="M33.8 16.4L38.5 16.4L25.2 35H20.5L33.8 16.4Z"
        fill="url(#logoAccent)"
        opacity="0.98"
      />
      <path
        d="M12.8 12.8H39.2"
        stroke="white"
        strokeOpacity="0.24"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12.8 39.2H39.2"
        stroke="white"
        strokeOpacity="0.24"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <text
        x="64"
        y="31"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="24"
        fontWeight="900"
        letterSpacing="-0.7"
        fill="currentColor"
      >
        Роллетка.Ру
      </text>
      <text
        x="66"
        y="44"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="9"
        fontWeight="800"
        letterSpacing="2.2"
        fill="currentColor"
        opacity="0.56"
      >
        КРАСНОДАР
      </text>
    </svg>
  );
}
