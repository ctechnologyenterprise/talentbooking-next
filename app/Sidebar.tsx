"use client";

import Link from "next/link";
import React from "react";
import classNames from "classnames";
import clsxm from "@libs/clsxm";
import styles from "@styles/Sidebar.module.css";
import HouseIcon from "@public/svgs/HouseIcon";
import BookingIcon from "@public/svgs/BookingIcon";
import TourIcon from "@public/svgs/TourIcon";
import ShowIcon from "@public/svgs/ShowIcon";
import FestivalIcon from "@public/svgs/FestivalIcon";
import CalendarIcon from "@public/svgs/CalendarIcon";
import ArtistIcon from "@public/svgs/ArtistIcon";
import ContactIcon from "@public/svgs/ContactIcon";
import PromoterIcon from "@public/svgs/PromoterIcon";
import VenuesIcon from "@public/svgs/VenuesIcon";
import AdministratorIcon from "@public/svgs/AdministratorIcon";
import RoleIcon from "@public/svgs/RoleIcon";
import FinanceIcon from "@public/svgs/FinanceIcon";
import RevenueTrackerIcon from "@public/svgs/RevenueTrackerIcon";
import OfficesIcon from "@public/svgs/OfficesIcon";

const sidebarItems = [
  { id: 1, label: "Dashboard", link: "/dashboard", icon: HouseIcon },
  { id: 2, label: "Bookings", link: "/booking", icon: BookingIcon },
  { id: 3, label: "Tours", link: "/tour", icon: TourIcon },
  { id: 4, label: "Shows", link: "/show", icon: ShowIcon },
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
  toggleCollapse: boolean;
};

export default function Sidebar({ toggleCollapse }: sidebarProps) {
  const sidebarWrapperClass = classNames(
    "h-full min-h-screen bg-[#2f2732] block pt-[52px] w-24 mb-0 overflow-hidden overflow-y-scroll transition-all duration-300",
    {
      ["w-20"]: !toggleCollapse,
      ["w-[215px]"]: toggleCollapse,
    }
  );

  const siebarItemClass = classNames("flex py-4 pl-6");
  return (
    <div className={clsxm(styles.wrapperItems, sidebarWrapperClass)}>
      {sidebarItems.map(({ icon: Icon, ...menu }) => {
        return (
          <Link
            key={menu.id}
            className={clsxm(styles.sidebarItem, siebarItemClass)}
            href={menu.link}
          >
            <div className="flex">
              <div className={styles.icon}>
                <Icon width="1.5em" height="1.5em" />
              </div>
              <div>
                <span
                  className={clsxm(
                    !toggleCollapse ? styles.hiddenText : styles.showText
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
