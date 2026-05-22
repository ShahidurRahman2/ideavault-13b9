"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import IdeaCard from "./IdeaCard";

const TrendingIdeas = () => {

    const [ideas, setIdeas] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:5000/trending-ideas")
            .then((res) => {

                setIdeas(res.data);
            });

    }, []);

    return (
        <>

            <section className="max-w-7xl mx-auto px-4 lg:px-8 py-24">

                {/* Title */}
                <div className="text-center mb-16">

                    <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                        Trending Ideas
                    </p>

                    <h2 className="text-5xl font-black text-white mt-5">
                        Explore Startup Innovations
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Discover the most creative startup ideas shared by innovators worldwide.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        ideas.map((idea) => (
                            <IdeaCard
                                key={idea._id}
                                idea={idea}
                            />
                        ))
                    }

                </div>

            </section>
            <section className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-4xl font-bold text-white mb-4">
                        How IdeaVault Works
                    </h2>

                    <p className="text-gray-400 mb-12">
                        Share, explore, and improve startup ideas in 3 simple steps
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Step 1 */}
                        <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-cyan-400 mb-3">1. Add Idea</h3>
                            <p className="text-gray-400">
                                Share your startup idea with full details including problem, solution, and target audience.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-cyan-400 mb-3">2. Explore Ideas</h3>
                            <p className="text-gray-400">
                                Discover innovative ideas from other creators and get inspired.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-cyan-400 mb-3">3. Collaborate</h3>
                            <p className="text-gray-400">
                                Comment, discuss, and help improve startup ideas together.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default TrendingIdeas;