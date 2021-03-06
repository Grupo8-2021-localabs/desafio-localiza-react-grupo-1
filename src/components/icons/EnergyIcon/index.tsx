import { SVG } from '../helpers/SvgInterface';

function EnergyIcon({ color }: SVG) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M12.526 8H22L10.421 25v-9H2L12.526-1v9zm-2.105 2V6.22L5.718 14h6.808v4.394L18.066 10h-7.645z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default EnergyIcon;
