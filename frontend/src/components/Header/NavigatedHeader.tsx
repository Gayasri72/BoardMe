import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAppContext } from "../../contexts/AppContext";
import SignOutButton from "../SignOutButton";
//import UsernameMenu from "./UsernameMenu";

interface NavItem {
  path: string;
  display: string;
}

const inside_nav: NavItem[] = [
  {
    path: "/spaces",
    display: "Spaces",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const NavigatedHeader: React.FC = () => {
  const { isLoggedIn } = useAppContext();
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {isLoggedIn ? (
        <nav className="flex justify-around w-full py-4 bg-gray-200  sticky top-0 z-[999]">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-[#41A4FF]">BoardMe</h3>
          </div>
          {/* <!-- left header section --> */}
          <div className="items-center hidden space-x-5 md:flex">
            <Link to="/">Home</Link>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2">
                  Reservations
                  <ChevronDownIcon
                    className="-mr-1 mt-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {inside_nav.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            to={item.path}
                          >
                            {item.display}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Link to="/listing">Listings</Link>
          </div>
          {/* <!-- right header section --> */}
          <div className="items-center space-x-3 hidden md:flex">
            <SignOutButton />
            {/* <UsernameMenu/> */}
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineMenu size={20} style={{ color: "black" }} />
            ) : (
              <AiOutlineClose size={20} style={{ color: "black" }} />
            )}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray bg-white ease-in-out duration-500 md:hidden"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="text-2xl font-medium text-blue-500 m-8">BoardMe</h1>
            <ul className="p-4 mt-20">
              <li className="p-4 border-b border-gray-600">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 border-b border-gray-600">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md">
                      Reservations
                      <ChevronDownIcon
                        className="-mr-1 mt-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {inside_nav.map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                                to={item.path}
                              >
                                {item.display}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="p-4 border-b border-gray-600">
                <Link to="/listing">Listings</Link>
              </li>
              <li className="p-4 mt-8">
                <SignOutButton />
                {/* <UsernameMenu/> */}
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default NavigatedHeader;