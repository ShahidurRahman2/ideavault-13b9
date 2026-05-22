"use client";



const WhyChoose = () => {

    return (

        <section className="py-20 px-4 ">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold text-white mb-4">
                    Why Choose IdeaVault?
                </h2>

                <p className="text-gray-400 mb-12">
                    A platform built for creators, innovators, and dreamers
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Feature 1 */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-[#111827] hover:border-cyan-500 transition">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">
                            Idea Validation
                        </h3>
                        <p className="text-gray-400">
                            Get real feedback from real users before building your product.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-[#111827] hover:border-cyan-500 transition">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">
                            Community Driven
                        </h3>
                        <p className="text-gray-400">
                            Connect with developers, founders, and creative thinkers worldwide.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-[#111827] hover:border-cyan-500 transition">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">
                            Fast & Simple
                        </h3>
                        <p className="text-gray-400">
                            Clean UI and smooth experience for sharing ideas quickly.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default WhyChoose;