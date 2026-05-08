import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = ({ listItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
          w-full
          bg-white
          shadow-xl
          rounded-b-[40px]
          border-b
          border-slate-200
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-10
            py-5
          "
        >
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  tracking-wide
                  text-blue-500
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                DigitalCorp
              </h1>
            </Link>

            <ul
              className="
                hidden
                md:flex
                items-center
                gap-10
              "
            >
              {listItem.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className="
                        relative
                        text-slate-700
                        text-lg
                        font-medium
                        hover:text-blue-500
                        transition
                        duration-300

                        after:absolute
                        after:left-0
                        after:-bottom-2
                        after:w-0
                        after:h-[3px]
                        after:bg-blue-500
                        after:rounded-full
                        after:transition-all
                        after:duration-300

                        hover:after:w-full
                      "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <button
                className="
                  bg-blue-500
                  hover:bg-blue-600
                  transition
                  duration-300
                  text-white
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  hover:scale-105
                "
              >
                Get Started
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                bg-slate-100
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
                text-slate-700
                text-3xl
                px-4
                py-2
                rounded-2xl
              "
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-500
              ${open ? "max-h-[500px] mt-8" : "max-h-0"}
            `}
          >
            <ul className="flex flex-col gap-4">
              {listItem.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    onClick={() => setOpen(false)}
                    className="
                        block
                        bg-slate-100
                        hover:bg-blue-500
                        hover:text-white
                        transition
                        duration-300
                        text-slate-700
                        px-5
                        py-4
                        rounded-2xl
                        font-medium
                      "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className="
                w-full
                mt-5
                bg-blue-500
                hover:bg-blue-600
                transition
                duration-300
                text-white
                py-4
                rounded-2xl
                font-semibold
                shadow-lg
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
