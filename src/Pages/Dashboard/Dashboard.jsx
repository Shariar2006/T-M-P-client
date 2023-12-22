import { FaCartShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { VscPreview } from "react-icons/vsc";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from "../../Components/AuthContext/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className="flex max-w-7xl mx-auto">
                <div className="">
                    <div className="">
                        <div className="dropdown text-blue-500">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow shadow-blue-500 bg-base-100 rounded-box w-52">
                                {
                                    user?.photoURL ?
                                        <img className="rounded-full w-28 mx-auto" src={user.photoURL} alt="" />
                                        :
                                        <img className="rounded-full w-28 mx-auto" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                                }
                                <div className=" text-center  mb-3">
                                    <h1 className=" font-bold">{user.displayName}</h1>
                                    <h1>{user.email}</h1>
                                </div>
                                <hr />
                                <li className=" rounded-md"><NavLink to='/dashboard/taskManagement' className=''>
                                    Task management</NavLink></li>

                                <li className=" rounded-md"><NavLink to='/dashboard/taskCreate' className=''>
                                    Task Create</NavLink></li>

                                <li className="rounded-md"><NavLink to='/' className=''>
                                    Home</NavLink></li>
                            </ul>
                        </div>
                        <div className="top-0 hidden lg:flex">
                            <div className="w-64 min-h-screen bg-blue-500 p-2">

                                {
                                    user?.photoURL ?
                                        <img className="rounded-full w-28 mx-auto" src={user.photoURL} alt="" />
                                        :
                                        <img className="rounded-full w-28 mx-auto" src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt="" />
                                }
                                <div className=" text-center text-white mb-3">
                                    <h1 className=" font-bold">{user.displayName}</h1>
                                    <h1>{user.email}</h1>
                                </div>
                                {/* <img className="p-10" src={logo} alt="" /> */}
                                <hr />
                                <ul className="menu text-white text-lg font3">

                                    <li className="hover:text-blue-500 hover:bg-white rounded-md"><NavLink to='/dashboard/taskManagement' className=''>
                                        Task management</NavLink></li>

                                    <li className="hover:text-blue-500 hover:bg-white rounded-md"><NavLink to='/dashboard/taskCreate' className=''>
                                        Task Create</NavLink></li>

                                    <li className="hover:text-blue-500 hover:bg-white rounded-md"><NavLink to='/' className=''>
                                        Home</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mt-10
                ">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;