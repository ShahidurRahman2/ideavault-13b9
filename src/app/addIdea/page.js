"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {
    FaLightbulb, FaTags, FaImage, FaDollarSign, FaUsers,
    FaExclamationTriangle, FaCheckCircle,
} from "react-icons/fa";
import PrivateRoute from "@/components/PrivateRoute";





export default function AddIdeaPage() {

    const router = useRouter();
    const { data: session } = authClient.useSession();
    const [loading, setLoading] = useState(false);

    const handleAddIdea = async (e) => {

        e.preventDefault();

        const form = e.target;

        const ideaData = {

            title: form.title.value,

            description: form.description.value,

            details: form.details.value,

            category: form.category.value,

            tags: form.tags.value,

            image: form.image.value,

            budget: form.budget.value,

            audience: form.audience.value,

            problem: form.problem.value,

            solution: form.solution.value,

            createdAt: new Date(),
            userEmail: session?.user?.email,

            userName: session?.user?.name,

            userImage: session?.user?.image,
        };

        try {

            setLoading(true);

            const res = await axios.post(
                "http://localhost:5000/ideas",
                ideaData
            );

            if (res.data.insertedId) {

                toast.success("Idea Added Successfully!");

                form.reset();

                router.push("/ideas");
            }

        }

        catch (err) {

            toast.error("Failed to add idea");
        }

        finally {

            setLoading(false);
        }
    };

    return (
        <PrivateRoute>
            <section className="min-h-screen bg-[#050816] text-white py-20 px-4">

                <div className="max-w-4xl mx-auto">

                    {/* top */}
                    <div className="text-center mb-14">

                        <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                            Startup Innovation
                        </p>

                        <h1 className="text-5xl font-black mt-5">
                            Share Your Startup Idea
                        </h1>

                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                            Present your innovative startup concept and connect with future collaborators.
                        </p>

                    </div>

                    {/* form */}
                    <form
                        onSubmit={handleAddIdea}
                        className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 md:p-12 space-y-8"
                    >

                        {/* title */}
                        <div>

                            <label className="font-semibold mb-3 flex items-center gap-3">
                                <FaLightbulb className="text-cyan-400" />
                                Idea Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                placeholder="Enter startup idea title"
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                        </div>

                        {/* short description */}
                        <div>

                            <label className="font-semibold mb-3 block">
                                Short Description
                            </label>

                            <textarea
                                name="description"
                                placeholder="Short summary about your idea"
                                required
                                rows={4}
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                            ></textarea>

                        </div>

                        {/* details */}
                        <div>

                            <label className="font-semibold mb-3 block">
                                Detailed Description
                            </label>

                            <textarea
                                name="details"
                                placeholder="Detailed explanation of your startup idea"
                                required
                                rows={6}
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                            ></textarea>

                        </div>

                        {/* grid */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* category */}
                            <div>

                                <label className="font-semibold mb-3 flex items-center gap-3">
                                    <FaTags className="text-cyan-400" />
                                    Category
                                </label>

                                <select
                                    name="category"
                                    required
                                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                                >

                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="AI">
                                        AI
                                    </option>

                                    <option value="Technology">
                                        Technology
                                    </option>

                                    <option value="Health">
                                        Health
                                    </option>

                                    <option value="Education">
                                        Education
                                    </option>

                                    <option value="Business">
                                        Business
                                    </option>

                                </select>

                            </div>

                            {/* tags */}
                            <div>

                                <label className="font-semibold mb-3 block">
                                    Tags
                                </label>

                                <input
                                    type="text"
                                    name="tags"
                                    placeholder="AI, Startup, Innovation"
                                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                                />

                            </div>

                        </div>

                        {/* image */}
                        <div>

                            <label className="font-semibold mb-3 flex items-center gap-3">
                                <FaImage className="text-cyan-400" />
                                Image URL
                            </label>

                            <input
                                type="text"
                                name="image"
                                placeholder="Paste image URL"
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                            />

                        </div>

                        {/* budget + audience */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* budget */}
                            <div>

                                <label className="font-semibold mb-3 flex items-center gap-3">
                                    <FaDollarSign className="text-cyan-400" />
                                    Estimated Budget
                                </label>

                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="$10,000"
                                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                                />

                            </div>

                            {/* audience */}
                            <div>

                                <label className="font-semibold mb-3 flex items-center gap-3">
                                    <FaUsers className="text-cyan-400" />
                                    Target Audience
                                </label>

                                <input
                                    type="text"
                                    name="audience"
                                    placeholder="Students, Startups, Businesses"
                                    required
                                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                                />

                            </div>

                        </div>

                        {/* problem */}
                        <div>

                            <label className="font-semibold mb-3 flex items-center gap-3">
                                <FaExclamationTriangle className="text-red-400" />
                                Problem Statement
                            </label>

                            <textarea
                                name="problem"
                                placeholder="What problem does your startup solve?"
                                required
                                rows={5}
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                            ></textarea>

                        </div>

                        {/* solution */}
                        <div>

                            <label className="font-semibold mb-3 flex items-center gap-3">
                                <FaCheckCircle className="text-green-400" />
                                Proposed Solution
                            </label>

                            <textarea
                                name="solution"
                                placeholder="How does your startup solve this problem?"
                                required
                                rows={5}
                                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
                            ></textarea>

                        </div>

                        {/* button */}
                        <button
                            disabled={loading}
                            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl font-semibold text-lg disabled:opacity-50"
                        >

                            {
                                loading
                                    ? "Publishing Idea..."
                                    : "Submit Idea"
                            }

                        </button>

                    </form>

                </div>

            </section>
        </PrivateRoute>
    );
}