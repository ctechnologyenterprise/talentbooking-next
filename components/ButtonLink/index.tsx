import Link from "next/link";
import { ReactNode } from "react";
import styles from "./index.module.css";

interface ButtonLinkProps {
  icon?: ReactNode;
  linkTo?: string;
  label: string;
}

export default function ButtonLink({
  icon,
  label,
  linkTo = "/",
}: ButtonLinkProps) {
  return (
    <Link
      href={linkTo}
      className="flex items-center p-[10px] hover:bg-[#e5d5ef] h-[100%]"
    >
      <p className={styles.icon}>{icon}</p>
      <p className="text-[#460465] font-normal pl-[5px]">{label}</p>
    </Link>
  );
}
