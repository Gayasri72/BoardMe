
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      
        <Link to="/"className="text-3xl font-bold tracking-tight text-orange-500">
          CO-SPACE BOOKING
        </Link>
        <div className="md:hidden">
            <MobileNav/>
            <div className="hidden md:block">
          <MainNav />
        </div>
        </div>
        </div>
      
  );
};

export default Header;