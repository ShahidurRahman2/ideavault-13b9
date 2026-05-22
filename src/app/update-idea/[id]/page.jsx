"use client";

import PrivateRoute from "@/components/PrivateRoute";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

export default function UpdateIdeaPage() {

    const params = useParams();

    const router = useRouter();

    const id = params.id;

    const [idea, setIdea] = useState(null);

    const [loading, setLoading] = useState(true);

    // fetch single idea
    useEffect(() => {

        fetchIdea();

    }, []);

    const fetchIdea = async () => {

        try {

            const res = await axios.get(
                `http://localhost:5000/ideas/${id}`
            );

            setIdea(res.data);

        }

        catch (error) {

            toast.error("Failed to load idea");
        }

        finally {

            setLoading(false);
        }
    };

    // update idea
    const handleUpdate = async (e) => {

        e.preventDefault();

        const form = e.target;

        const updatedIdea = {

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
        };

        try {

            const res = await axios.patch(
                `http://localhost:5000/ideas/${id}`,
                updatedIdea
            );

            if (res.data.modifiedCount > 0) {

                toast.success("Idea Updated Successfully");

                router.push("/my-ideas");
            }

        }

        catch (error) {

            toast.error("Update failed");
        }
    };

    if (loading) {

        return (
            <div className="min-h-screen bg-[#050816] flex justify-center items-center text-white text-2xl">
                Loading...
            </div>
        );
    }

    return (
        <PrivateRoute>

            <section className="min-h-screen bg-[#050816] text-white py-20 px-4">

                <div className="max-w-4xl mx-auto">

                    {/* top */}
                    <div className="text-center mb-14">

                        <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
                            Edit Startup Idea
                        </p>

                        <h1 className="text-5xl font-black mt-5">
                            Update Your Idea
                        </h1>

                    </div>

                    {/* form */}
                    <form
                        onSubmit={handleUpdate}
                        className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 space-y-8"
                    >

                        {/* title */}
                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Idea Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                defaultValue={idea?.title}
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
                            />

                        </div>

                        {/* short description */}
                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Short Description
                            </label>

                            <textarea
                                name="description"
                                defaultValue={idea?.description}
                                rows={4}
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400 resize-none"
                            ></textarea>

                        </div>


                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Detailed Description
                            </label>

                            <textarea
                                name="details"
                                defaultValue={idea?.details}
                                rows={6}
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400 resize-none"
                            ></textarea>

                        </div>


                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Category
                            </label>

                            <select
                                name="category"
                                defaultValue={idea?.category}
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
                            >

                                <option value="Tech">Tech</option>

                                <option value="AI">AI</option>

                                <option value="Health">Health</option>

                                <option value="Education">Education</option>

                            </select>

                        </div>


                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Image URL
                            </label>

                            <input
                                type="text"
                                name="image"
                                defaultValue={idea?.image}
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
                            />

                        </div>


                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Tags
                            </label>

                            <input
                                type="text"
                                name="tags"
                                defaultValue={idea?.tags}
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
                            />

                        </div>

                        {/* budget */}
                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Estimated Budget
                            </label>

                            <input
                                type="text"
                                name="budget"
                                defaultValue={idea?.budget}
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
                            />

                        </div>


                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Target Audience
                            </label>

                            <input
                                type="text"
                                name="audience"
                                defaultValue={idea?.audience}
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
                            />

                        </div>

                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Problem Statement
                            </label>

                            <textarea
                                name="problem"
                                defaultValue={idea?.problem}
                                rows={5}
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400 resize-none"
                            ></textarea>

                        </div>

                        {/* solution */}
                        <div>

                            <label className="block mb-3 font-semibold text-lg">
                                Proposed Solution
                            </label>

                            <textarea
                                name="solution"
                                defaultValue={idea?.solution}
                                rows={5}
                                required
                                className="w-full bg-[#111827] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400 resize-none"
                            ></textarea>

                        </div>


                        <button
                            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-2xl text-lg font-bold"
                        >

                            Update Idea

                        </button>

                    </form>

                </div>

            </section>

        </PrivateRoute>
    );
}