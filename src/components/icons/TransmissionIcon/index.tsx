import { SVG } from '../helpers/SvgInterface';

function TransmissionIcon({ color }: SVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        isolation: 'isolate',
      }}
      viewBox="0 0 17 24"
      width="17pt"
      height={32}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h17v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          d="M14.694 10.776H9.796V0H7.347v10.776H2.449V0H0v24h2.449V13.224h4.898V24h2.449V13.224h7.347V0h-2.449v10.776z"
          fillRule="evenodd"
          fill={color}
        />
      </g>
    </svg>
  );
}
export default TransmissionIcon;
