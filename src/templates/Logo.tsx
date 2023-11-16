import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 164.000000 160.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M710 1485 c-140 -29 -248 -85 -352 -183 -161 -152 -251 -361 -251
          -582 1 -178 51 -310 164 -434 75 -82 151 -132 259 -170 80 -29 94 -31 230 -31
          168 1 232 14 355 74 258 128 417 394 419 706 0 61 -6 135 -13 165 -55 227
          -251 411 -484 455 -95 18 -238 18 -327 0z m225 -93 c115 -40 216 -103 300
          -187 91 -90 141 -168 179 -275 28 -77 31 -96 30 -205 0 -98 -4 -131 -22 -180
          -71 -190 -244 -339 -445 -382 -212 -45 -436 50 -598 253 -105 133 -156 263
          -166 421 -10 166 32 293 135 405 88 95 200 158 322 182 59 11 183 -4 265 -32z"
          />
        </g>
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };