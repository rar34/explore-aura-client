import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Tooltip } from 'react-tooltip'
import { toast } from "react-toastify";

const Navbar = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
    }

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast("log out successful")
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-tourists-spot">All Tourists Spot</NavLink></li>
        {
            user && <>
                <li><NavLink to="/add-tourists-spot">Add Tourists Spot</NavLink></li>
                <li><NavLink to="/my-list">My List</NavLink></li>
            </>
        }
    </>


    return (
        <div className="navbar my-4 md:px-20 shadow-md bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm font-bold text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-3xl font-bold">ExploreAura</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-bold text-lg menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className="dropdown dropdown-end " >
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" data-tooltip-id="my-tooltip"
                            data-tooltip-content={user?.displayName || user?.email}
                            data-tooltip-place="top">
                            <div className="w-10 rounded-full ">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/ZX6HMzF/pp.jpg"} />
                            </div>

                        </div>
                        <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm text-white font-bold dropdown-content bg-neutral w-32">
                            <li className="hover:bg-gray-500"><Link to="/login"><button onClick={handleLogOut}>Logout</button></Link></li>
                        </ul>
                    </div>
                    :
                    <>
                        <Link to="/login"><button className="btn btn-success text-white mr-3">Login</button></Link>
                        <Link to="/register"><button className="btn btn-success text-white">Register</button></Link>
                    </>
                }
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;