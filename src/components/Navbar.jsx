"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navLinks = (
        <>
            <Link href="/" className="hover:text-cyan-400 transition">
                Home
            </Link>

            <Link href="/ideas" className="hover:text-cyan-400 transition">
                Ideas
            </Link>

            <Link href="/addIdea" className="hover:text-cyan-400 transition">
                Add Idea
            </Link>

            <Link href="/myIdeas" className="hover:text-cyan-400 transition">
                My Ideas
            </Link>

            <Link
                href="/myInteractions"
                className="hover:text-cyan-400 transition"
            >
                My Interactions
            </Link>
        </>
    );

    return (
        <nav className="bg-black text-white">

            <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

                {/* Logo text akane */}
                <Link
                    href="/"
                    className="text-3xl font-bold text-cyan-400"
                >
                    IdeaVault
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-3">

                    <Link
                        href="/login"
                        className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="px-5 py-2 rounded-lg border border-cyan-500 hover:bg-cyan-500 transition"
                    >
                        Register
                    </Link>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-2xl"
                >
                    {
                        open
                            ? <FaTimes />
                            : <FaBars />
                    }
                </button>
            </div>




            {/* Mobile Menu Akane liklam */}
            {
                open && (
                    <div className="lg:hidden flex flex-col gap-5 px-5 pb-5 bg-black">

                        {navLinks}

                        <Link
                            href="/login"
                            className="px-5 py-2 rounded-lg bg-cyan-500 text-center"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="px-5 py-2 rounded-lg border border-cyan-500 text-center"
                        >
                            Register
                        </Link>

                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;