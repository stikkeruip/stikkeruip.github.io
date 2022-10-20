import { Transition } from "@headlessui/react";

import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const MobileNav = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="nav"
          className="fixed inset-0 z-40 flex navBreak:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FiX className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <h2 className="text-2xl font-bold text-primary">
                  <Link to={"/"}>Rachel Marron</Link>
                </h2>
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 px-2">
                  <Link
                    className="navItemDesing navItem"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    event={() => closeSideBar()}
                  >
                    About Me
                  </Link>
                  <Link
                    className="navItemDesing navItem"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    event={() => closeSideBar()}
                  >
                    Projects
                  </Link>

                  <Link
                    className="navItemDesing navItem"
                    activeClass="active"
                    to="experiece"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    event={() => closeSideBar()}
                  >
                    Experience
                  </Link>
                  <Link
                    className="navItemDesing navItem"
                    activeClass="active"
                    to="getintouch"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    event={() => closeSideBar()}
                  >
                    Get In Touch
                  </Link>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MobileNav;
