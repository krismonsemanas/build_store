import React, { useEffect, useState } from "react";
import { mdiMinus, mdiPlus } from "@mdi/js";
import BaseIcon from "./BaseIcon";
import { Link, router } from "@inertiajs/react";
import { getButtonColor } from "../colors";
import AsideMenuList from "./AsideMenuList";
import { MenuAsideItem } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import RenderIf from "./atoms/RenderIf";
import { openLogoutModal } from "@/stores/logoutSlice";
// import route from "@tofandel/ziggy-js";

type Props = {
  item: MenuAsideItem;
  isDropdownList?: boolean;
};

const AsideMenuItem = ({ item, isDropdownList = false }: Props) => {
  const dispatch = useAppDispatch();

  const [isLinkActive, setIsLinkActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const asideMenuItemStyle = useAppSelector(
    (state) => state.style.asideMenuItemStyle
  );
  const asideMenuDropdownStyle = useAppSelector(
    (state) => state.style.asideMenuDropdownStyle
  );
  const asideMenuItemActiveStyle = useAppSelector(
    (state) => state.style.asideMenuItemActiveStyle
  );

  const activeClassAddon =
    !item.color && isLinkActive ? asideMenuItemActiveStyle : "";

  // const { asPath, isReady } = useRouter()

  useEffect(() => {
    if (item.route) {
      const linkPathName = route(item.route);

      // const activePathname = new URL(asPath, location.href).pathname;

      setIsLinkActive(linkPathName);
    }
  }, [item.route]);

  const asideMenuItemInnerContents = (
    <>
      {item.icon && (
        <BaseIcon
          path={item.icon}
          className={`flex-none ${activeClassAddon}`}
          w="w-16"
          size="18"
        />
      )}
      <span
        className={`grow text-ellipsis line-clamp-1 ${
          item.menu ? "" : "pr-12"
        } ${activeClassAddon}`}
      >
        {item.label}
      </span>
      {item.menu && (
        <BaseIcon
          path={isDropdownActive ? mdiMinus : mdiPlus}
          className={`flex-none ${activeClassAddon}`}
          w="w-12"
        />
      )}
    </>
  );

  const componentClass = [
    "flex cursor-pointer",
    isDropdownList ? "py-3 px-6 text-sm" : "py-3",
    item.color
      ? getButtonColor(item.color, false, true)
      : `${asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`,
  ].join(" ");

  return (
    <li>
      <RenderIf isTrue={item.route ? true : false}>
        <Link
          href={route(item.route)}
          target={item.target}
          className={componentClass}
        >
          {asideMenuItemInnerContents}
        </Link>
      </RenderIf>
      <RenderIf isTrue={item.href ? true : false}>
        <a href={item.href} target={"_blank"} className={componentClass}>
          {asideMenuItemInnerContents}
        </a>
      </RenderIf>
      <RenderIf isTrue={item.isLogout ? true : false}>
        <a
          onClick={() => dispatch(openLogoutModal())}
          href={item.href}
          target={"_blank"}
          className={componentClass}
        >
          {asideMenuItemInnerContents}
        </a>
      </RenderIf>
      {/* {!item.route && (
        <div
          className={componentClass}
          onClick={() => setIsDropdownActive(!isDropdownActive)}
        >
          {asideMenuItemInnerContents}
        </div>
      )} */}
      {/* {item.menu && (
        <AsideMenuList
          menu={item.menu}
          className={`${asideMenuDropdownStyle} ${
            isDropdownActive ? "block dark:bg-slate-800/50" : "hidden"
          }`}
          isDropdownList
        />
      )} */}
    </li>
  );
};

export default AsideMenuItem;
