"use client";

import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative overflow-hidden">

            {/* Gradient Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-5 py-28 lg:py-36">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>

                        <p className="text-cyan-400 font-semibold mb-4 tracking-widest uppercase">
                            Startup Innovation Platform
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight">

                            Share Your
                            <span className="text-cyan-400">
                                {" "}Startup Ideas
                            </span>

                            <br />

                            With The World
                        </h1>

                        <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">

                            Discover innovative startup concepts, connect with creators,
                            validate ideas, and build the next big thing together.
                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">

                            <Link
                                href="/ideas"
                                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
                            >
                                Explore Ideas
                            </Link>

                            <Link
                                href="/addIdea"
                                className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition font-semibold"
                            >
                                Submit Idea
                            </Link>

                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 mt-14">

                            <div>
                                <h2 className="text-4xl font-bold text-cyan-400">
                                    2K+
                                </h2>

                                <p className="text-gray-400">
                                    Startup Ideas
                                </p>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold text-cyan-400">
                                    15K+
                                </h2>

                                <p className="text-gray-400">
                                    Community Users
                                </p>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold text-cyan-400">
                                    500+
                                </h2>

                                <p className="text-gray-400">
                                    Investors
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative">

                        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

                            <img
                                src="https://i.ibb.co.com/MDV1B4q/startup.png"
                                alt="startup"
                                className="w-full rounded-2xl"
                            />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;