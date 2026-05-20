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
    );
};

export default TrendingIdeas;