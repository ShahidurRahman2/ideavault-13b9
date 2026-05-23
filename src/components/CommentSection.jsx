"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

export default function CommentSection({ idea }) {

    const { data: session } = authClient.useSession();

    const [comments, setComments] = useState([]);

    const [commentText, setCommentText] = useState("");

    // fetch comments
    useEffect(() => {

        fetchComments();

    }, []);

    const fetchComments = async () => {

        try {

            const res = await axios.get(
                `https://ideavault-13b9-server.vercel.app/comments/${idea._id}`
            );

            setComments(res.data);

        }

        catch (error) {

            console.log(error);
        }
    };

    // add comment
    const handleComment = async (e) => {

        e.preventDefault();

        if (!commentText) {

            return toast.error("Write a comment");
        }

        const commentData = {

            ideaId: idea._id,

            ideaTitle: idea.title,

            ideaImage: idea.image,

            comment: commentText,

            userEmail: session?.user?.email,

            userName: session?.user?.name,

            userImage: session?.user?.image,

            createdAt: new Date(),
        };

        try {

            const res = await axios.post(
                "http://localhost:5000/comments",
                commentData
            );

            if (res.data.insertedId) {

                toast.success("Comment Added");

                setCommentText("");

                fetchComments();
            }

        }

        catch (error) {

            toast.error("Failed to comment");
        }
    };

    return (

        <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

            <h2 className="text-4xl font-black mb-8">
                Comments
            </h2>

            {/* form */}
            <form
                onSubmit={handleComment}
                className="mb-10"
            >

                <textarea
                    value={commentText}

                    onChange={(e) =>
                        setCommentText(e.target.value)
                    }

                    placeholder="Write your thoughts..."

                    rows={4}

                    className="w-full bg-[#111827] border border-white/10 rounded-2xl p-5 outline-none"
                ></textarea>

                <button
                    className="mt-5 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold"
                >

                    Add Comment

                </button>

            </form>

            {/* comments */}
            <div className="space-y-6">

                {
                    comments.map((comment) => (

                        <div
                            key={comment._id}
                            className="bg-[#111827] rounded-2xl p-6"
                        >

                            <div className="flex items-center gap-4">

                                <img
                                    src={comment.userImage}
                                    alt=""
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>

                                    <h3 className="font-bold">
                                        {comment.userName}
                                    </h3>

                                    <p className="text-sm text-gray-400">

                                        {
                                            new Date(
                                                comment.createdAt
                                            ).toLocaleString()
                                        }

                                    </p>

                                </div>

                            </div>

                            <p className="text-gray-300 mt-5">

                                {comment.comment}

                            </p>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}