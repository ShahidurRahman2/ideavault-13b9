
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 mt-20">

            <div className="max-w-7xl mx-auto px-5 py-14">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>

                        <h2 className="text-3xl font-black text-cyan-400">
                            IdeaVault
                        </h2>

                        <p className="text-gray-400 mt-5 leading-relaxed">
                            A platform for sharing innovative startup ideas
                            and connecting creators worldwide.
                        </p>

                    </div>

                    {/* Links */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-400">

                            <Link href="/">Home</Link>
                            <Link href="/ideas">Ideas</Link>
                            <Link href="/addIdea">Add Idea</Link>

                        </div>
                    </div>

                    {/* Categories */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Categories
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-400">

                            <p>AI</p>
                            <p>Health</p>
                            <p>Education</p>
                            <p>Technology</p>

                        </div>
                    </div>

                    {/* Social */}
                    <div>

                        <h3 className="text-xl font-bold mb-5">
                            Connect
                        </h3>

                        <div className="flex gap-5 text-2xl">

                            <a href="#">
                                <FaGithub />
                            </a>

                            <a href="#">
                                <FaLinkedin />
                            </a>

                            <a href="#">
                                <FaXTwitter />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">

                    © 2026 IdeaVault. All Rights Reserved.

                </div>

            </div>
        </footer>
    );
};

export default Footer;