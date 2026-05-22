"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { FaTrash, FaEdit } from "react-icons/fa";

import PrivateRoute from "@/components/PrivateRoute";


import { useRouter } from "next/navigation";

export default function MyIdeasPage() {


    const router = useRouter();

    /* UPDATED */
    const {
        data: session,
        isPending
    } = authClient.useSession();

    const [ideas, setIdeas] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // session loading hole wait korbe
        if (isPending) return;

        // login user
        if (session?.user?.email) {

            fetchMyIdeas();
        }

        // not logged in
        else {

            setLoading(false);

            /* NEWLY ADDED */
            router.push("/login");
        }

    }, [session, isPending]);

    const fetchMyIdeas = async () => {

        try {

            const res = await axios.get(
                `http://localhost:5000/my-ideas?email=${session?.user?.email}`
            );

            setIdeas(res.data);

        }

        catch (error) {

            toast.error("Failed to load ideas");
        }

        finally {

            setLoading(false);
        }
    };

    // delete
    const handleDelete = async (id) => {

        const confirmDelete = confirm(
            "Are you sure you want to delete this idea?"
        );

        if (!confirmDelete) return;

        try {

            const res = await axios.delete(
                `http://localhost:5000/ideas/${id}`
            );

            if (res.data.deletedCount > 0) {

                toast.success("Idea Deleted");

                const remaining = ideas.filter(
                    (idea) => idea._id !== id
                );

                setIdeas(remaining);
            }

        }

        catch (error) {

            toast.error("Delete failed");
        }
    };

    /* UPDATED */
    if (loading || isPending) {

        return (

            <div className="min-h-screen bg-[#050816] flex justify-center items-center text-white text-2xl">

                Loading...

            </div>
        );
    }

    return (

        <PrivateRoute>

            <section className="min-h-screen bg-[#050816] text-white py-20 px-4">

                <div className="max-w-7xl mx-auto">

                    {/* top */}
                    <div className="text-center mb-14">

                        <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

                            Dashboard

                        </p>

                        <h1 className="text-5xl font-black mt-5">

                            My Startup Ideas

                        </h1>

                        <p className="text-gray-400 mt-6 text-lg">

                            Manage your submitted startup ideas.

                        </p>

                    </div>

                    {
                        ideas.length === 0 ? (

                            <div className="flex flex-col justify-center items-center py-20">

                                <h2 className="text-3xl font-bold text-white mb-4">

                                    No Data Added

                                </h2>

                                <p className="text-gray-400 text-lg mb-8 text-center">

                                    You have not added any startup ideas yet.
                                    <br />
                                    Please go and add your idea.

                                </p>

                                <Link
                                    href="/addIdea"
                                    className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold"
                                >

                                    Add Idea

                                </Link>

                            </div>

                        ) : (

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {
                                    ideas.map((idea) => (

                                        <div
                                            key={idea._id}
                                            className="bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden"
                                        >

                                            {/* image */}
                                            <img
                                                src={idea.image}
                                                alt={idea.title}
                                                className="w-full h-56 object-cover"
                                            />

                                            {/* content */}
                                            <div className="p-6">

                                                <div className="flex justify-between items-center mb-4">

                                                    <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm">

                                                        {idea.category}

                                                    </span>

                                                </div>

                                                <h2 className="text-2xl font-bold">

                                                    {idea.title}

                                                </h2>

                                                <p className="text-gray-400 mt-4 line-clamp-3">

                                                    {idea.description}

                                                </p>

                                                {/* buttons */}
                                                <div className="flex gap-4 mt-8">

                                                    {/* update */}
                                                    <Link
                                                        href={`/update-idea/${idea._id}`}
                                                        className="flex-1 bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
                                                    >

                                                        <FaEdit />

                                                        Update

                                                    </Link>

                                                    {/* delete */}
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(idea._id)
                                                        }

                                                        className="flex-1 bg-red-500 hover:bg-red-600 transition py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
                                                    >

                                                        <FaTrash />

                                                        Delete

                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        )
                    }

                </div>

            </section>

        </PrivateRoute>
    );
}