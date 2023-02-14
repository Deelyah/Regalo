// LightErrorIcon, DarkErrorIcon, Logo

export const LightErrorIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="24" height="24" rx="12" fill="#FEE4E2" />
      <g clipPath="url(#clip0_1102_5664)">
        <path
          d="M13 11V13M13 15H13.005M18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13Z"
          stroke="#D92D20"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <rect
        x="1"
        y="1"
        width="24"
        height="24"
        rx="12"
        stroke="#FEF3F2"
        stroke-width="2"
      />
      <defs>
        <clipPath id="clip0_1102_5664">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(7 7)"
          />
          src/components/icons/Icons.tsx
        </clipPath>
      </defs>
    </svg>
  );
};

export const DarkErrorIcon = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="24" height="24" rx="12" fill="#F04438" />
      <g clipPath="url(#clip0_1102_5534)">
        <path
          d="M13 11V13M13 15H13.005M18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <rect
        x="1"
        y="1"
        width="24"
        height="24"
        rx="12"
        stroke="#D92D20"
        stroke-width="2"
      />
      <defs>
        <clipPath id="clip0_1102_5534">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Logo = () => {
  return (
    <svg
      width="44"
      height="48"
      viewBox="0 0 44 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2775 22.3182C14.0998 19.25 17.2537 16.0961 20.322 15.2738L39.4509 10.1474C42.5192 9.32516 44.34 11.1459 43.5177 14.2142L38.3913 33.3432C37.5691 36.4114 34.4152 39.5653 31.3469 40.3876L12.2179 45.514C9.14963 46.3362 7.32888 44.5155 8.15114 41.4472L13.2775 22.3182Z"
        fill="#9E77ED"
      />
      <path
        d="M5.60881 14.6493C6.43108 11.5811 9.58498 8.42717 12.6533 7.60491L31.7823 2.47854C34.8505 1.65628 36.6713 3.47702 35.849 6.54529L30.7226 25.6743C29.9004 28.7426 26.7465 31.8965 23.6782 32.7187L4.5492 37.8451C1.48093 38.6674 -0.339827 36.8466 0.482438 33.7783L5.60881 14.6493Z"
        fill="#6941C6"
      />
    </svg>
  );
};
