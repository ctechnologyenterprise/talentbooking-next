import React, { Ref } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import useHover from "../../hooks/useHover";

export type iconProps = {
  color: string;
  ref: Ref<SVGSVGElement> | undefined;
};

export default function HomeIcon({ color, ref }: iconProps) {
  return <FontAwesomeIcon ref={ref} icon={faHouse} color={color} />;
}
