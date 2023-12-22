import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useContext } from "react";
import { LuLogOut } from "react-icons/lu";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const navLink = <div className="lg:flex text-lg font-semibold text-black lg:text-white">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-lg font-semibold rounded-lg underline mx-10" : "mx-10 "}
        >Home</NavLink></li>
        
        <li><NavLink to={'/register'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-lg font-semibold rounded-lg underline mx-10" : "mx-10 "}
        >Register</NavLink></li>



    </div>

    return (
        <div className="navbar bg-blue-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl">TaskSync</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div>
                    {
                        user?.email ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    {
                                        user?.photoURL ?
                                            <img className="rounded-full w-9 mx-1" src={user.photoURL} alt="" />
                                            :
                                            <img className="rounded-full w-9 mx-1" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                                    }
                                </label>
                                <ul tabIndex={0} className="my-3 z-[1] p-2 py-10 shadow menu menu-sm dropdown-content rounded-box w-52 text-center border-4 border-blutext-blue-500 text-blue-500 bg-base-200 font2">
                                    {
                                        user?.photoURL ?
                                            <img className="rounded-full w-9 mx-auto" src={user.photoURL} alt="" />
                                            :
                                            <img className="rounded-full w-9 mx-auto" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                                    }
                                    <p className="text-xs lg:text-lg ">{user.displayName}</p>
                                    <p className="text-xs mb-2">{user.email}</p>
                                    <hr />
                                    <div className=" mt-4 ml-2 text-xs lg:text-base">
                                        {
                                            user ? <NavLink to={'/dashboard/menageUsers'}><button className="btn text-blue-500">Dashboard</button></NavLink> :
                                                <NavLink to={'/dashboard/requestedMeals'}><button className="btn text-blue-500">Dashboard</button></NavLink>
                                        }
                                        {/* <NavLink to={'/dashboard/requestedMeals'}><button className="btn text-blue-500">Dashboard</button></NavLink> */}
                                        <button onClick={handleLogOut}
                                            className="text-blue-500 btn"
                                        > <LuLogOut className="text-xl font-bold"></LuLogOut>
                                            Log Out
                                        </button>
                                    </div>
                                </ul>
                            </div>

                        </> :
                            <ul className="text-lg font-semibold">
                                <li><NavLink to={'/login'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-lg font-semibold rounded-lg underline mx-10" : "mx-10 "}
        >Login</NavLink></li>
                            </ul>
                    }
                </div>
        </div>
    );
};

export default Navbar;