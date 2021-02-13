import { SVG } from '../helpers/SvgInterface';

function GasolineIcon({ color }: SVG) {
  return (
    <svg
      width={20}
      height={24}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3.1L4.05 8.05a7 7 0 109.9 0L9 3.1zM9 .272l6.364 6.364a9 9 0 11-12.728 0L9 .272z"
        fill={color}
      />
    </svg>
  );
}

export default GasolineIcon;
