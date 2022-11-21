import * as React from "react";
import { SVGProps } from "react";

const FinanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M144 160.4c0-35.5 28.8-64.4 64.4-64.4 6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L249 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C137.5 32 80 89.5 80 160.4V224H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v44.5c0 17.4-4.7 34.5-13.7 49.4l-29.7 49.6c-5.9 9.9-6.1 22.2-.4 32.2S52.5 480 64 480h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H120.5l.7-1.1c14.9-24.9 22.8-53.4 22.8-82.4V288h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H144v-63.6z" />
  </svg>
);

export default FinanceIcon;
