async function getIdea(id) {
    const res = await fetch(
        `http://localhost:5000/ideas/${id}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
}

const IdeaDetailsPage = async ({ params }) => {
    const resolvedParams = await params;
    const idea = await getIdea(resolvedParams.id);





    return (
        <section className="min-h-screen bg-[#050816] text-white py-20 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Image */}
                <div className="overflow-hidden rounded-3xl">

                    <img
                        src={idea.image}
                        alt={idea.title}
                        className="w-full h-[500px] object-cover"
                    />

                </div>



                <div className="mt-12">

                    <span className="bg-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full">
                        {idea.category}
                    </span>

                    <h1 className="text-5xl font-black mt-8">
                        {idea.title}
                    </h1>

                    <p className="text-gray-300 text-xl leading-relaxed mt-8">
                        {idea.description}
                    </p>


                    <div className="grid md:grid-cols-2 gap-8 mt-14">

                        <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                            <h2 className="text-3xl font-bold mb-5 text-red-400">
                                Problem Statement
                            </h2>

                            <p className="text-gray-300 leading-relaxed">
                                {idea.problem}
                            </p>

                        </div>

                        {/* Solution */}
                        <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                            <h2 className="text-3xl font-bold mb-5 text-green-400">
                                Proposed Solution
                            </h2>

                            <p className="text-gray-300 leading-relaxed">
                                {idea.solution}
                            </p>

                        </div>

                    </div>

                    {/* Extra ..... */}
                    <div className="grid md:grid-cols-2 gap-8 mt-10">

                        {/* Budget  .......*/}
                        <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                                Estimated Budget
                            </h2>

                            <p className="text-gray-300 text-lg">
                                {idea.budget}
                            </p>

                        </div>

                        {/* Audience */}
                        <div className="bg-[#0B1120] border border-white/10 rounded-3xl p-8">

                            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                                Target Audience
                            </h2>

                            <p className="text-gray-300 text-lg">
                                {idea.audience}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default IdeaDetailsPage;