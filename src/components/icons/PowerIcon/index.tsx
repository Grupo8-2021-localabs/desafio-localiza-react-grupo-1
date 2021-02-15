import { SVG } from '../helpers/SvgInterface';

function PowerIcon({ color }: SVG) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0zM8.4 15.4l-5.513.001a11.205 11.205 0 009.713 9.712V19.6a4.2 4.2 0 01-4.2-4.2zm16.713.001L19.6 15.4a4.2 4.2 0 01-4.2 4.2l.001 5.513a11.205 11.205 0 009.712-9.712zM16.8 14h-5.6v1.4a1.4 1.4 0 001.4 1.4h2.8a1.4 1.4 0 001.4-1.4V14zM14 2.8a11.201 11.201 0 00-11.113 9.8H8.4a1.4 1.4 0 011.4-1.4h8.4a1.4 1.4 0 011.4 1.4h5.513A11.201 11.201 0 0014 2.8z"
        fill={color}
      />
    </svg>
  );
}

export default PowerIcon;
