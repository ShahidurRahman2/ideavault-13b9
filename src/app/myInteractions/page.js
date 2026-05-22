"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import {
    FaComments,
    FaClock,
    FaLightbulb,
} from "react-icons/fa";

import PrivateRoute from "@/components/PrivateRoute";

/* NEWLY ADDED */
import { useRouter } from "next/navigation";

export default function MyInteractionsPage() {

    /* NEWLY ADDED */
    const router = useRouter();

    /* UPDATED */
    const {
        data: session,
        isPending
    } = authClient.useSession();

    const [interactions, setInteractions] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // session loading hole wait korbe
        if (isPending) return;

        // user logged in
        if (session?.user?.email) {

            fetchInteractions();
        }

        // user not logged in
        else {

            setLoading(false);

            /* NEWLY ADDED */
            router.push("/login");
        }

    }, [session, isPending]);

    const fetchInteractions = async () => {

        try {

            const res = await axios.get(
                `http://localhost:5000/my-interactions?email=${session?.user?.email}`
            );

            setInteractions(res.data);

        }

        catch (error) {

            toast.error("Failed to load interactions");
        }

        finally {

            setLoading(false);
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

                <div className="max-w-6xl mx-auto">

                    {/* top */}
                    <div className="text-center mb-14">

                        <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

                            User Activity

                        </p>

                        <h1 className="text-5xl font-black mt-5">

                            My Interactions

                        </h1>

                        <p className="text-gray-400 mt-6 text-lg">

                            View your comments and engagement activity.

                        </p>

                    </div>

                    {
                        interactions.length === 0 ? (

                            <div className="flex flex-col justify-center items-center py-20">

                                <h2 className="text-3xl font-bold text-white mb-4">

                                    No Interactions Found

                                </h2>

                                <p className="text-gray-400 text-lg mb-8 text-center">

                                    You have not commented on any ideas yet.
                                    <br />
                                    Explore ideas and start interacting.

                                </p>

                                <Link
                                    href="/ideas"
                                    className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold"
                                >

                                    Explore Ideas

                                </Link>

                            </div>

                        ) : (

                            <div className="grid md:grid-cols-2 gap-8">

                                {
                                    interactions.map((item) => (

                                        <div
                                            key={item._id}
                                            className="bg-[#0B1120] border border-white/10 rounded-3xl p-8"
                                        >

                                            {/* top */}
                                            <div className="flex items-center justify-between mb-6">

                                                <div className="flex items-center gap-3">

                                                    <FaLightbulb className="text-cyan-400 text-2xl" />

                                                    <h2 className="text-2xl font-bold">

                                                        {item.ideaTitle}

                                                    </h2>

                                                </div>

                                            </div>

                                            {/* comment */}
                                            <div className="bg-[#111827] rounded-2xl p-5">

                                                <div className="flex items-center gap-3 mb-4">

                                                    <FaComments className="text-cyan-400" />

                                                    <p className="font-semibold">

                                                        Your Comment

                                                    </p>

                                                </div>

                                                <p className="text-gray-300 leading-relaxed">

                                                    {item.comment}

                                                </p>

                                            </div>

                                            {/* time */}
                                            <div className="flex items-center gap-3 text-gray-400 mt-6">

                                                <FaClock />

                                                <p>

                                                    {
                                                        new Date(
                                                            item.createdAt
                                                        ).toLocaleString()
                                                    }

                                                </p>

                                            </div>

                                            {/* details */}
                                            <Link
                                                href={`/ideas/${item.ideaId}`}
                                                className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-semibold"
                                            >

                                                View Idea

                                            </Link>

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