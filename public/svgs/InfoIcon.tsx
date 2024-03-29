import { SVGProps } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v224h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V256H32c-17.7 0-32-14.3-32-32z" />
  </svg>
);

export default InfoIcon;
