import React from "react";
import Router from "next/router";
import { Dropdown } from "lib/svg";
import { useRouter } from "next/router";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const { pathname } = useRouter();

  const clickNav = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const goRoute = React.useCallback(
    (route) => () => {
      setOpen(false);
      Router.push({
        pathname: route,
      });
    },
    []
  );

  return (
    <>
      <div
        onTouchStart={clickNav}
        className={` w-full h-screen fixed ${
          open ? "bg-black/50 duration-200" : "hidden"
        }`}
      />
      <div className="w-full bg-blue-800 h-auto px-4 md:px-14 lg:px-80 md:flex md:flex-row md:justify-between fixed">
        <div className="md:w-full flex flex-row items-center justify-between relative">
          <p className="text-white font-bold text-2xl w-full flex items-center h-16">
            Fanvercel
          </p>

          <button
            onClick={clickNav}
            className="bg-white w-10 h-10 md:hidden flex items-center justify-center rounded-md"
          >
            <div
              className={`${
                open ? "rotate-180" : "rotate-0"
              } duration-200 w-6 h-6`}
            >
              <Dropdown />
            </div>
          </button>
        </div>
        <div
          className={`flex flex-col gap-x-12 gap-y-4 w-full transition-all duration-200  ${
            open ? "h-32" : "h-0"
          } md:flex md:flex-row md:items-center md:justify-end md:h-auto overflow-clip`}
        >
          <div className="flex items-center flex-col">
            <button
              className={`text-white text-left duration-500 ${
                pathname === "/" ? "font-bold text-yellow-400 " : ""
              }`}
              onClick={goRoute("/")}
            >
              Home
            </button>
            <div
              className={`transition-all duration-500 ${
                pathname === "/" ? "bg-yellow-400 w-2 h-2" : " w-0 h-0"
              } rounded-full`}
            />
          </div>

          <div className="flex items-center flex-col">
            <button
              className={`text-white text-left duration-500 ${
                pathname === "/blog" ? "font-bold text-yellow-400 " : ""
              }`}
              onClick={goRoute("/blog")}
            >
              Blog
            </button>
            <div
              className={`transition-all duration-500 ${
                pathname === "/blog" ? "bg-yellow-400 w-2 h-2" : " w-0 h-0"
              } rounded-full`}
            />
          </div>
          <div className="flex items-center flex-col">
            <button
              className={`text-white text-left duration-500 ${
                pathname === "/tips" ? "font-bold text-yellow-400 " : ""
              }`}
              onClick={goRoute("/tips")}
            >
              Tips/Trick
            </button>
            <div
              className={`transition-all duration-500 ${
                pathname === "/tips" ? "bg-yellow-400 w-2 h-2" : " w-0 h-0"
              } rounded-full`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
