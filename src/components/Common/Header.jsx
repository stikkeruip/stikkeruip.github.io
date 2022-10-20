import { Fragment, useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";

import file from "../../assets/files/dummy.pdf";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  const navItems = [
    {
      name: "About Me",
      link: "about",
      offcet: -100,
    },
    {
      name: "Projects",
      link: "projects",
      offcet: -50,
    },
    {
      name: "Experience",
      link: "experiece",
      offcet: -100,
    },
    {
      name: "Get In Touch",
      link: "getintouch",
      offcet: -100,
    },
  ];

  return (
    <>
      <header
        className={`z-[100] w-full ${
          isVisible ? "bg-white fixed" : "bg-transparent absolute"
        } duration-500`}
      >
        <div className="py-6 sm:px-12 px-6 flex justify-end">
          <div className="text-secondary font-montserrat font-semibold navBreak:block hidden">
            {navItems.map((item, index) => (
              <Link
                key={index}
                className="navItemDesing navItem"
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={item.offcet}
                duration={500}
              >
                {item.name}
              </Link>
            ))}
            <button className="font-montserrat font-semibold">
              <a
                className="inline-block actionButtonDesing"
                href={file}
                download
              >
                Get Resume
              </a>
            </button>
          </div>
          <div className="navBreak:hidden flex items-center gap-8">
            <button className="font-montserrat font-semibold">
              <a
                className="inline-block actionButtonDesing"
                href={file}
                download
              >
                Get Resume
              </a>
            </button>
            <button
              className="text-secondary text-4xl"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </header>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="nav"
          className="fixed inset-0 z-[500] flex navBreak:hidden"
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
                <h2 className="text-2xl font-bold text-secondary">
                  <Link to={"about"}>Uipko Stikker</Link>
                </h2>
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 px-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="navItemDesing navItem block mb-3"
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={item.offcet}
                      duration={500}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
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

export default Header;
