import { SVG } from '../helpers/SvgInterface';

function CalendarIcon({ color }: SVG) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2h4a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h4V0h2v2h6V0h2v2zm-2 2H7v2H5V4H2v4h16V4h-3v2h-2V4zm5 6H2v8h16v-8z"
        fill={color}
      />
    </svg>
  );
}

export default CalendarIcon;
