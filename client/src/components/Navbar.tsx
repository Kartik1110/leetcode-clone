import { Link, NavLink } from "react-router-dom";
import appLogo from "../assets/app-logo.svg";

function Navbar() {
  const navigationTabs = [
    { id: 1, name: "Problems", path: "/problems" },
    { id: 2, name: "About", path: "/about" },
  ];
  return (
    <div className="h-[8vh] w-screen bg-gray-900 p-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src={appLogo} alt="dailycode-app-logo" className="h-8 px-5" />
        <span className="text-xl text-white font-semibold">Daily code</span>
      </Link>

      <div>
        {navigationTabs.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive, isPending }) =>
              isActive
                ? "px-3 text-blue-500"
                : isPending
                ? "pending"
                : "px-3 text-white hover:text-blue-500"
            }
          >
            {item.name}
          </NavLink>
        ))}
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
