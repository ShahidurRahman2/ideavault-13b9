"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import IdeaCard from "@/components/IdeaCard";

const IdeasPage = () => {
    const [ideas, setIdeas] = useState([]);
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("all");

    useEffect(() => {
        axios
            .get(
                `http://localhost:5000/ideas?search=${search}&category=${category}`
            )
            .then((res) => {
                setIdeas(res.data);
            })
            .catch((err) => {
                console.error("Error fetching ideas:", err);
            });
    }, [search, category]);

    return (
        <section className="min-h-screen bg-[#050816] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-14">
                    <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                        Startup Ideas
                    </p>
                    <h1 className="text-5xl font-black mt-5">
                        Explore All Ideas
                    </h1>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Discover innovative startup concepts shared by creators worldwide.
                    </p>
                </div>

                {/* Search r Filter */}
                <div className="flex flex-col md:flex-row gap-5 mb-14">



                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={search}
                        className="flex-1 bg-[#0B1120] border border-white/10 rounded-xl px-5 py-4 outline-none text-white focus:border-cyan-400/55 transition-colors"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* Category Filter Dropdown ino */}



                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-[#0B1120] text-white border border-white/10 rounded-xl px-5 py-4 outline-none cursor-pointer md:w-64 focus:border-cyan-400/55 transition-colors"
                    >
                        <option value="all" className="bg-[#0B1120]">All Categories</option>
                        <option value="FinTech" className="bg-[#0B1120]">FinTech</option>
                        <option value="Cybersecurity" className="bg-[#0B1120]">Cybersecurity</option>
                        <option value="Ai" className="bg-[#0B1120]">AI & Automation</option> {/* value দিলেন "Ai" */}
                        <option value="productivity" className="bg-[#0B1120]">SaaS & Productivity</option> {/* value দিলেন "productivity" */}
                        <option value="HealthTech" className="bg-[#0B1120]">HealthTech</option>
                    </select>

                </div>

                {/* Cards Display */}
                {ideas.length === 0 ? (
                    <div className="text-center text-gray-500 py-12 border border-white/5 border-dashed rounded-2xl">
                        No ideas found for this search or category.
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ideas.map((idea) => (
                            <IdeaCard
                                key={idea._id}
                                idea={idea}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default IdeasPage;