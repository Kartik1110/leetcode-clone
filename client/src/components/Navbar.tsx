import { Link } from "react-router-dom";
import appLogo from "../assets/app-logo.svg";

function Navbar() {
  return (
    <div className="h-[8vh] w-screen bg-gray-900 p-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src={appLogo} className="h-8 px-5" />
        <span className="text-xl text-white font-semibold">Daily code</span>
      </Link>

      <div>
        <Link to="/problems" className="pl-5 text-white focus:outline-none hover:text-blue-500">
          Problems
        </Link>
        <Link to="/about" className="px-5 text-white focus:outline-none hover:text-blue-500">
          About
        </Link>
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
