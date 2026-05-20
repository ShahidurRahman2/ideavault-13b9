import Link from "next/link";

const IdeaCard = ({ idea }) => {

    return (
        <div className="group bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300">


            <div className="overflow-hidden">

                <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />

            </div>


            <div className="p-6">


                <div className="flex justify-between items-center mb-4">

                    <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm">
                        {idea.category}
                    </span>

                    <span className="text-gray-400 text-sm">
                        {idea.date}
                    </span>

                </div>


                <h2 className="text-2xl font-bold text-white">
                    {idea.title}
                </h2>


                <p className="text-gray-400 mt-4 leading-relaxed">
                    {idea.description}
                </p>

                {/* Button */}
                <Link
                    href={`/ideas/${idea._id}`}
                    className="inline-block mt-6 w-full text-center bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-xl font-semibold text-white"
                >
                    View Details
                </Link>

            </div>

        </div>
    );
};

export default IdeaCard;