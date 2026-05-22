import PrivateRoute from "@/components/PrivateRoute";

import CommentSection from "@/components/CommentSection";

async function getIdea(id) {

    const res = await fetch(
        `http://localhost:5000/ideas/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {

        throw new Error("Failed to fetch idea");
    }

    return res.json();
}

const IdeaDetailsPage = async ({ params }) => {

    const idea = await getIdea(params.id);

    return (
        <PrivateRoute>

            <section className="min-h-screen bg-[#050816] text-white py-20 px-4">

                <div className="max-w-6xl mx-auto">

                    {/* hero image */}
                    <div className="overflow-hidden rounded-3xl border border-white/10">

                        <img
                            src={idea?.image}
                            alt={idea?.title}
                            className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
                        />

                    </div>

                    {/* content */}
                    <div className="mt-12">

                        {/* category */}
                        <div className="flex flex-wrap gap-4 items-center">

                            <span className="bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-semibold">

                                {idea?.category}

                            </span>

                            {
                                idea?.budget && (

                                    <span className="bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-semibold">

                                        Budget: {idea?.budget}

                                    </span>
                                )
                            }

                        </div>

                        {/* title */}
                        <h1 className="text-4xl md:text-6xl font-black mt-8 leading-tight">

                            {idea?.title}

                        </h1>

                        {/* description */}
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-8">

                            {idea?.description}

                        </p>

                        {/* creator */}
                        <div className="mt-10 flex items-center gap-4 bg-[#0B1120] border border-white/10 rounded-2xl p-5 w-fit">

                            <img
                                src={idea?.userImage}
                                alt={idea?.userName}
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>

                                <p className="text-sm text-gray-400">
                                    Created By
                                </p>

                                <h3 className="font-bold text-lg">
                                    {idea?.userName}
                                </h3>

                            </div>

                        </div>

                        {/* problem solution */}
                        <div className="grid md:grid-cols-2 gap-8 mt-14">

                            {/* problem */}
                            <div className="bg-[#0B1120] border border-red-500/20 rounded-3xl p-8 hover:border-red-500/40 transition">

                                <h2 className="text-3xl font-bold mb-5 text-red-400">

                                    Problem Statement

                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">

                                    {idea?.problem}

                                </p>

                            </div>

                            {/* solution */}
                            <div className="bg-[#0B1120] border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition">

                                <h2 className="text-3xl font-bold mb-5 text-green-400">

                                    Proposed Solution

                                </h2>

                                <p className="text-gray-300 leading-relaxed text-lg">

                                    {idea?.solution}

                                </p>

                            </div>

                        </div>

                        {/* extra info */}
                        <div className="grid md:grid-cols-2 gap-8 mt-10">

                            {/* audience */}
                            <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                                <h2 className="text-2xl font-bold text-cyan-400 mb-4">

                                    Target Audience

                                </h2>

                                <p className="text-gray-300 text-lg">

                                    {idea?.audience}

                                </p>

                            </div>

                            {/* tags */}
                            <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                                <h2 className="text-2xl font-bold text-cyan-400 mb-4">

                                    Tags

                                </h2>

                                <div className="flex flex-wrap gap-3">

                                    {
                                        idea?.tags
                                            ?.split(",")

                                            ?.map((tag, index) => (

                                                <span
                                                    key={index}
                                                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
                                                >

                                                    #{tag.trim()}

                                                </span>
                                            ))
                                    }

                                </div>

                            </div>

                        </div>

                        {/* detailed description */}
                        <div className="mt-10 bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                            <h2 className="text-3xl font-bold text-cyan-400 mb-6">

                                Detailed Description

                            </h2>

                            <p className="text-gray-300 leading-relaxed text-lg">

                                {idea?.details}

                            </p>

                        </div>

                        {/* comments */}
                        <div className="mt-14">

                            <CommentSection idea={idea} />

                        </div>

                    </div>

                </div>

            </section>

        </PrivateRoute>
    );
};

export default IdeaDetailsPage;