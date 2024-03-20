import React, { useState } from "react";
import logo from "../assets/logo1.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
  ];
  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={``} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={``} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index >= 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
