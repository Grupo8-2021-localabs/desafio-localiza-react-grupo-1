import { SVG } from '../helpers/SvgInterface';

function HybridIcon({ color }: SVG) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 0v2c0 9.627-5.373 14-12 14H2.243A17.056 17.056 0 002 19H0c0-1.363.116-2.6.346-3.732C.116 13.974 0 12.218 0 10 0 4.477 4.477 0 10 0c2 0 4 1 8 0zm-8 2a8 8 0 00-8 8c0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C5.641 9.5 3.747 11.354 2.776 14H6c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C10.627 2.027 10.401 2 10 2z"
        fill={color}
      />
    </svg>
  );
}

export default HybridIcon;
