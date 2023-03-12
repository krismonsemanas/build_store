import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
import BaseDivider from "./BaseDivider";
import BaseIcon from "./BaseIcon";
import UserAvatarCurrentUser from "./UserAvatarCurrentUser";
import NavBarMenuList from "./NavBarMenuList";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { MenuNavBarItem } from "../interfaces";
import { setDarkMode } from "../stores/styleSlice";
import { openLogoutModal } from "@/stores/logoutSlice";
import RenderIf from "./atoms/RenderIf";

type Props = {
  item: MenuNavBarItem;
};

export default function NavBarItem({ item }: Props) {
  const dispatch = useAppDispatch();

  const navBarItemLabelActiveColorStyle = useAppSelector(
    (state) => state.style.navBarItemLabelActiveColorStyle
  );
  const navBarItemLabelStyle = useAppSelector(
    (state) => state.style.navBarItemLabelStyle
  );
  const navBarItemLabelHoverStyle = useAppSelector(
    (state) => state.style.navBarItemLabelHoverStyle
  );

  const userName = useAppSelector((state) => state.main.userName);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const componentClass = [
    "block lg:flex items-center relative cursor-pointer",
    isDropdownActive
      ? `${navBarItemLabelActiveColorStyle} dark:text-slate-400`
      : `${navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${navBarItemLabelHoverStyle}`,
    item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3",
    item.isDesktopNoLabel ? "lg:w-16 lg:justify-center" : "",
  ].join(" ");

  const itemLabel = item.isCurrentUser ? userName : item.label;

  const handleMenuClick = () => {
    if (item.menu) {
      setIsDropdownActive(!isDropdownActive);
    }

    if (item.isToggleLightDark) {
      dispatch(setDarkMode(null));
    }
    if (item.isLogout) {
      dispatch(openLogoutModal());
    }
  };

  const NavBarItemComponentContents = (
    <>
      <div
        className={`flex items-center ${
          item.menu
            ? "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0"
            : ""
        }`}
        onClick={handleMenuClick}
      >
        <RenderIf isTrue={item.isCurrentUser ?? false}>
          <UserAvatarCurrentUser className="w-6 h-6 mr-3 inline-flex" />
        </RenderIf>
        <RenderIf isTrue={item.icon ? true : false}>
          <BaseIcon path={item.icon ?? ""} className="transition-colors" />
        </RenderIf>
        <span
          className={`px-2 transition-colors ${
            item.isDesktopNoLabel && item.icon ? "lg:hidden" : ""
          }`}
        >
          {itemLabel}
        </span>
        <RenderIf isTrue={item.menu ? true : false}>
          <BaseIcon
            path={isDropdownActive ? mdiChevronUp : mdiChevronDown}
            className="hidden lg:inline-flex transition-colors"
          />
        </RenderIf>
      </div>
      <RenderIf isTrue={item.menu ? true : false}>
        <div
          className={`${
            !isDropdownActive ? "lg:hidden" : ""
          } text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700`}
        >
          <NavBarMenuList menu={item.menu ?? []} />
        </div>
      </RenderIf>
    </>
  );

  if (item.isDivider) {
    return <BaseDivider navBar />;
  }

  if (item.href) {
    return (
      <Link href={item.href} target={item.target} className={componentClass}>
        {NavBarItemComponentContents}
      </Link>
    );
  }

  return <div className={componentClass}>{NavBarItemComponentContents}</div>;
}
