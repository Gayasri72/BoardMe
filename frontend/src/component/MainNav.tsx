// import { Button } from './ui/button'

// const MainNav = () => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { loginWithRedirect,isAuthenticated } = useAuth0();

//     return(
//         <span className="flex space-2 items-center">
//             {isAuthenticated ? <UsernameMenu/> :  <Button variant="ghost"
//         className="font-bold hover:text-orange-500 hover:bg-white"
//         onClick={async () => await loginWithRedirect()}>Log in
//         </Button>}
//         </span>
       
//     );
// };

// export default MainNav;
// function useAuth0(): { loginWithRedirect: any; isAuthenticated: any; } {
//     throw new Error('Function not implemented.');
// }



import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-orange-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;