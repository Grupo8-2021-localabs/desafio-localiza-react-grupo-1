import { SVG } from '../helpers/SvgInterface';

function AccelerationIcon({ color }: SVG) {
  return (
    <svg
      width={24}
      height={28}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 25.263h24V28H0v-2.737zM13.333 5.238v15.288h-2.666V5.238l-8.095 8.31-1.885-1.936L12 0l11.313 11.611-1.885 1.935-8.095-8.305v-.003z"
        fill={color}
      />
    </svg>
  );
}

export default AccelerationIcon;
