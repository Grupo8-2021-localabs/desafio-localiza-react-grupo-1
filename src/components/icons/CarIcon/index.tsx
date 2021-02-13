import { SVG } from '../helpers/SvgInterface';

function CarIcon({ color }: SVG) {
  return (
    <svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 16H3v1a1 1 0 01-1 1H1a1 1 0 01-1-1V7l2.48-5.788A2 2 0 014.32 0h11.36a2 2 0 011.838 1.212L20 7v10a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm1-7H2v5h16V9zM2.176 7h15.648l-2.143-5H4.32L2.176 7zM4.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill={color}
      />
    </svg>
  );
}

export default CarIcon;
