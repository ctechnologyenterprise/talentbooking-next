import clsxm from "@libs/clsxm";
import AdministratorIcon from "@public/svgs/AdministratorIcon";
import ArtistIcon from "@public/svgs/ArtistIcon";
import BookingIcon from "@public/svgs/BookingIcon";
import CalendarIcon from "@public/svgs/CalendarIcon";
import ContactIcon from "@public/svgs/ContactIcon";
import FestivalIcon from "@public/svgs/FestivalIcon";
import FinanceIcon from "@public/svgs/FinanceIcon";
import HouseIcon from "@public/svgs/HouseIcon";
import OfficesIcon from "@public/svgs/OfficesIcon";
import PromoterIcon from "@public/svgs/PromoterIcon";
import RevenueTrackerIcon from "@public/svgs/RevenueTrackerIcon";
import RoleIcon from "@public/svgs/RoleIcon";
import ShowIcon from "@public/svgs/ShowIcon";
import TourIcon from "@public/svgs/TourIcon";
import VenuesIcon from "@public/svgs/VenuesIcon";
import styles from "@styles/Sidebar.module.css";
import classNames from "classnames";
import Link from "next/link";
import { Ref } from "react";

export const sidebarItems = [
  { id: 1, label: "Dashboard", link: "/dashboard", icon: HouseIcon },
  { id: 2, label: "Bookings", link: "/booking", icon: BookingIcon },
  { id: 3, label: "Tours", link: "/tour", icon: TourIcon },
  { id: 4, label: "Shows", link: "/contracts/shows", icon: ShowIcon },
  { id: 5, label: "Festivals", link: "/festivals", icon: FestivalIcon },
  { id: 6, label: "Calendar", link: "/calendar", icon: CalendarIcon },
  { id: 7, label: "Artists", link: "/artist", icon: ArtistIcon },
  { id: 8, label: "Address Book", link: "/contacts", icon: ContactIcon },
  { id: 9, label: "Promoter", link: "/promoters", icon: PromoterIcon },
  { id: 10, label: "Venues", link: "/venues", icon: VenuesIcon },
  {
    id: 11,
    label: "Accounts",
    link: "/administrators",
    icon: AdministratorIcon,
  },
  { id: 12, label: "Roles", link: "/roles", icon: RoleIcon },
  { id: 13, label: "Finance", link: "/finance", icon: FinanceIcon },
  {
    id: 14,
    label: "Revenue Tracker",
    link: "/revenue",
    icon: RevenueTrackerIcon,
  },
  { id: 15, label: "Offices", link: "/offices", icon: OfficesIcon },
];

type sidebarProps = {
  isCollapsed: boolean;
  isFocus: boolean;
  onClick: () => void;
  ref: Ref<HTMLAnchorElement>;
};

export default function Sidebar({
  isCollapsed,
  isFocus,
  onClick,
  ref,
}: sidebarProps) {
  const sidebarWrapperClass = classNames(
    "md:block md:fixed h-full min-h-screen bg-[#2f2732] pt-[50px] mb-0 z-20 overflow-y-scroll transition-all duration-300",
    {
      ["md:w-20 w-0"]: !isCollapsed || isFocus,
      ["w-[215px]"]: isCollapsed,
    }
  );

  const sidebarItemClass = classNames("flex py-3 md:py-4 pl-6");
  return (
    <div className={clsxm(styles.wrapperItems, sidebarWrapperClass)}>
      {sidebarItems.map(({ icon: Icon, ...menu }) => {
        return (
          <Link
            key={menu.id}
            className={clsxm(styles.sidebarItem, sidebarItemClass)}
            href={menu.link}
            ref={ref}
            onClick={onClick}
          >
            <div className="flex">
              <div className={styles.icon}>
                <Icon className="w=[1em] h-[1em] md:w-[1.5em] md:h-[1.5em]" />
              </div>
              <div>
                <span
                  className={clsxm(
                    !isCollapsed ? styles.hiddenText : styles.showText
                  )}
                >
                  {menu.label}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
