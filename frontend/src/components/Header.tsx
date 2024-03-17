import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header:React.FC = () => {
  return (
     
    <header className="bg-grey-blue shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-btn-blue">BoardMe</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/spaces">
            <li className="hidden sm:inline text-black hover:underline">
              Spaces
            </li>
          </Link>
          <Link to="/events">
            <li className="hidden sm:inline text-black hover:underline">
              Events
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="bg-btn-blue text-black hover:bg-btn-black px-3 font-bold">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
