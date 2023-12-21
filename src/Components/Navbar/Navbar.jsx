import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <div className="lg:flex text-lg font-semibold text-black lg:text-white">
        <li><NavLink to={'/'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-lg font-semibold rounded-lg underline mx-10" : "mx-10 "}
        >Home</NavLink></li>
        <li><NavLink to={'/login'}
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-lg font-semibold rounded-lg underline mx-10" : "mx-10 "}
        >Login</NavLink></li>
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
        </div>
    );
};

export default Navbar;