import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, Providers } from "../config/firebase";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    
    const signOutOnClick = () => {
        console.log('sign out click')
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if (response.user){
            location.reload();
        }
    }

    const dropDown=()=>{
        setIsVisible(!isVisible)
    }

    const clicked=() =>{
        setIsVisible(false)
    }
  return (
<nav className="w-full flex items-center justify-between flex-wrap bg-gray-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6"> 
        <Link to='/' onClick={ clicked }>LotsaCars</Link>
        
        </div>
      <div className="block">
        <button onClick={dropDown} className="flex items-center px-3 py-2 text-white border rounded border-white hover:text-white hover:border-white">
            X
        </button>
      </div>
      { isVisible ? (
        <div className="w-full block flex-grow items-center">
            <div className="text-sm lg:flex-grow">
                <Button>
                    <div>
                        <Link to='/' onClick={ clicked }>Home</Link>
                    </div>
                </Button>
                <Button>
                    <div>
                        <Link to='/cars' onClick={ clicked }>Our Cars</Link>
                    </div>
                </Button>
                <Button>
                    <div>
                        <Link to='/sales' onClick={ clicked }>Sales Team</Link>
                    </div>
                </Button>
                <Button>
                    <div>
                        <Link to='/parts' onClick={ clicked }>Parts</Link>
                    </div>
                </Button>
                {
                    !auth.currentUser ?
                    <Button>
                        <div>
                            <Link to="/" onClick={ signInOnClick }>
                                Login
                            </Link>
                        </div>
                    </Button>
                    :
                    <Button>
                    <div>
                        <Link to="/" onClick={ signOutOnClick }>
                            Log Out
                        </Link>
                    </div>
                </Button>
                }
            </div>
        </div>
        ) : (
        <></>
      ) }
    </nav>
  );
}

export default Navbar;
