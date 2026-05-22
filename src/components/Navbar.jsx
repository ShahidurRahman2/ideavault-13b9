"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const userPhoto = user?.image;

    // 💡 রিয়েল লগআউট ফাংশনালিটি (Better Auth SignOut)
    const handleLogout = async () => {
        try {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        setOpen(false);
                        router.push("/login");
                    }
                }
            });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const navLinks = (
        <>
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                Home
            </Link>

            <Link href="/ideas" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                Ideas
            </Link>

            <Link href="/addIdea" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                Add Idea
            </Link>

            <Link href="/myIdeas" onClick={() => setOpen(false)} className="hover:text-cyan-400 transition">
                My Ideas
            </Link>

            <Link
                href="/myInteractions"
                onClick={() => setOpen(false)}
                className="hover:text-cyan-400 transition"
            >
                My Interactions
            </Link>
        </>
    );

    return (
        <nav className="bg-black text-white sticky top-0 z-50 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-cyan-400 tracking-wide">
                    IdeaVault
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {navLinks}
                </div>

                {/* Desktop Status Controls */}
                <div className="hidden lg:flex items-center gap-4">
                    {isPending ? (

                        <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
                    ) : user ? (

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 group relative" title={user.name}>
                                <img
                                    src={userPhoto}
                                    alt={user.name || "User Profile"}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/50 hover:border-cyan-400 transition"
                                    referrerPolicy="no-referrer"
                                />
                                <span className="text-sm font-medium text-gray-300 max-w-[120px] truncate">
                                    {user.name}
                                </span>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 transition text-sm font-semibold"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    ) : (

                        <div className="flex items-center gap-3">
                            <Link href="/login" className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition text-sm">
                                Login
                            </Link>
                            <Link href="/register" className="px-5 py-2 rounded-lg border border-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold transition text-sm">
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Trigger Button */}
                <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl text-gray-300 hover:text-cyan-400 transition">
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden flex flex-col gap-5 px-5 pb-6 bg-black border-t border-white/5">


                    {!isPending && user && (
                        <div className="flex items-center gap-3 py-3 border-b border-white/10">
                            <img
                                src={userPhoto}
                                alt={user.name}
                                className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400"
                                referrerPolicy="no-referrer"
                            />
                            <div>
                                <h4 className="font-bold text-white text-sm">{user.name}</h4>
                                <p className="text-xs text-gray-400">{user.email}</p>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-4 text-gray-300 font-medium">
                        {navLinks}
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                        {isPending ? (
                            <div className="h-10 w-full bg-white/10 animate-pulse rounded-lg"></div>
                        ) : user ? (

                            <button
                                onClick={handleLogout}
                                className="w-full px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-lg bg-cyan-500 text-black font-semibold text-center transition">
                                    Login
                                </Link>
                                <Link href="/register" onClick={() => setOpen(false)} className="px-5 py-2.5 rounded-lg border border-cyan-500 text-cyan-400 font-semibold text-center hover:bg-cyan-500 hover:text-black transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;