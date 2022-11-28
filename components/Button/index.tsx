import { ReactNode } from "react";
import styles from "./index.module.css";

interface ButtonProps {
  icon?: ReactNode;
  label: string;
  onClick: () => void;
}

export default function Button({ icon, label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-[10px] hover:bg-[#e5d5ef] h-[100%]"
    >
      {icon && <p className={styles.icon}>{icon}</p>}
      <p className="text-[#460465] font-normal pl-[5px]">{label}</p>
    </button>
  );
}
