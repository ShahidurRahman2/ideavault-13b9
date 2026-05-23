import Link from "next/link";
import { FaArrowLeft, FaLightbulb } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                        <FaLightbulb className="text-5xl text-cyan-400" />
                    </div>
                </div>

                {/* 404 */}
                <h1 className="text-7xl md:text-9xl font-black text-white">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    The page you are looking for doesn’t exist or may have been moved.
                    Explore innovative startup ideas and continue your journey with IdeaVault.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    <Link href="/">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
                            Go Home
                        </button>
                    </Link>

                    <Link href="/ideas">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <FaArrowLeft />
                            Browse Ideas
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}