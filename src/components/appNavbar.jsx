import { Search, Bell } from "lucide-react";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="w-full sticky bg-gradient-to-r from-[#0f172a] to-[#020617] border-b border-white/10">
            <div className=" mx-auto">
                <div className="flex items-center justify-between h-16">

                    {/* Left Section */}
                    <div className="flex items-center gap-10">
                        {/* Logo */}
                        <div className="flex items-center gap-2 text-white font-semibold text-2xl">
                            
                            <span className="px-4">Cooking Sooking</span>
                        </div>

                        {/* Menu */}
                        <ul className="flex items-center gap-8 text-gray-300 text-lg">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-b-2 border-indigo-500 pb-1 cursor-pointer" : "hover:text-white cursor-pointer"}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "text-white border-b-2 border-indigo-500 pb-1 cursor-pointer" : "hover:text-white cursor-pointer"}>
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/recipes" className={({ isActive }) => isActive ? "text-white border-b-2 border-indigo-500 pb-1 cursor-pointer" : "hover:text-white cursor-pointer"}>
                                    Recipes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white border-b-2 border-indigo-500 pb-1 cursor-pointer" : "hover:text-white cursor-pointer"}>
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-5">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-[#020617] text-sm text-white pl-9 pr-3 py-2 rounded-md border border-white/10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Notification */}
                        <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />

                        {/* Profile */}

                    </div>

                </div>
            </div>
        </nav>
    );
}
