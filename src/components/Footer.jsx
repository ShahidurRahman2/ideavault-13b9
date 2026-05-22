import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaXTwitter,
    FaEnvelope,
    FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="  bg-[#0F172A]  dark:bg-[#0B0114] text-white border-t border-black/10 dark:border-white/10 mt-20">

            <div className="w-[90%] mx-auto px-5 py-16">

                {/* top section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Logo + About */}
                    <div>

                        <h2 className="text-4xl font-black text-cyan-400">
                            IdeaVault
                        </h2>

                        <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                            Discover, share, and explore innovative startup
                            ideas from creators around the world. Build the
                            future together with collaboration and creativity.
                        </p>

                        {/* social icons */}
                        <div className="flex items-center gap-4 mt-6">

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition duration-300"
                            >
                                <FaGithub className="text-lg" />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition duration-300"
                            >
                                <FaLinkedin className="text-lg" />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition duration-300"
                            >
                                <FaXTwitter className="text-lg" />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">

                            <Link
                                href="/"
                                className="hover:text-cyan-400 transition"
                            >
                                Home
                            </Link>

                            <Link
                                href="/ideas"
                                className="hover:text-cyan-400 transition"
                            >
                                Ideas
                            </Link>

                            <Link
                                href="/addIdea"
                                className="hover:text-cyan-400 transition"
                            >
                                Add Idea
                            </Link>

                            <Link
                                href="/myIdeas"
                                className="hover:text-cyan-400 transition"
                            >
                                My Ideas
                            </Link>

                        </div>

                    </div>

                    {/* Categories */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Categories
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {[
                                "AI",
                                "Health",
                                "Education",
                                "Tech",
                                "Productivity",
                            ].map((item, index) => (

                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-400">

                            <div className="flex items-start gap-3">

                                <FaEnvelope className="text-cyan-400 mt-1" />

                                <p className="text-sm sm:text-base break-all">
                                    support@ideavault.com
                                </p>

                            </div>

                            <div className="flex items-start gap-3">

                                <FaLocationDot className="text-cyan-400 mt-1" />

                                <p className="text-sm sm:text-base">
                                    Dharmanagar, Chattogram, Bangladesh
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* bottom section */}
                <div className="border-t border-black/10 dark:border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © 2026 IdeaVault. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">

                        <Link
                            href="/"
                            className="hover:text-cyan-400 transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/"
                            className="hover:text-cyan-400 transition"
                        >
                            Terms
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;