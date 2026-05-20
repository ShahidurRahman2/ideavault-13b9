"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import useEmblaCarousel from "embla-carousel-react";

const Banner = () => {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // ১. Embla Carousel সেটআপ (loop: true দিলে স্লাইডার অনবরত ঘুরতে থাকবে)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    // API থেকে ডেটা ফেচিং
    useEffect(() => {
        axios
            .get(`http://localhost:5000/banners?t=${new Date().getTime()}`)
            .then((res) => {
                setSlides(res.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching banners:", err);
                setLoading(false);
            });
    }, []);

    // ২. স্লাইড চেঞ্জ ট্র্যাকিং (ডট প্যাগিনেশনের কালার চেঞ্জ করার জন্য)
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    // ৩. অটো-প্লে লজিক (প্রতি ৪ সেকেন্ড পর পর স্মুথলি স্লাইড চেঞ্জ হবে)
    useEffect(() => {
        if (!emblaApi || slides.length <= 1) return;

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [emblaApi, slides]);

    // ৪. ডট বাটনে ক্লিক করলে নির্দিষ্ট স্লাইডে যাওয়ার ফাংশন
    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    // লোডিং স্টেট
    if (loading || !slides || slides.length === 0) {
        return (
            <div className="h-[85vh] flex items-center justify-center bg-gray-950 rounded-3xl m-4 lg:m-8">
                <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        // লেয়ার ১: সবচেয়ে বাইরের কন্টেইনার - overflow-hidden দিয়ে নিশ্চিত করা হয়েছে কোনো কিছুই স্ক্রিনের বাইরে যাবে না
        <section className="w-full max-w-full overflow-hidden px-4 md:px-6 lg:px-8 mt-4 md:mt-6">

            {/* লেয়ার ২: ভিউপোর্ট (Viewport) - এখানে ref={emblaRef} এবং w-full থাকতে হবে */}
            <div className="w-full max-w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-gray-950 relative" ref={emblaRef}>

                {/* লেয়ার ৩: এমব্লা কন্টেইনার (Track) - flex এবং w-full দিয়ে লক করা */}
                <div className="flex w-full min-w-full h-[50vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh]">
                    {slides.map((slide, index) => {
                        const titleText = slide?.title;
                        const descText = slide?.description;
                        const bgImage = slide?.image;

                        return (
                            /* লেয়ার ৪: একক স্লাইড - flex-[0_0_100%] এবং w-full নিশ্চিত করে যে প্রতিটা স্লাইড স্ক্রিনের সমান চওড়া হবে, ১ পিক্সেলও বেশি না */
                            <div
                                key={slide?._id || `slide-${index}`}
                                className="relative w-full min-w-full flex-[0_0_100%] shrink-0 bg-cover bg-center flex items-center"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            >
                                {/* ডার্ক ওভারলে */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30"></div>

                                {/* কন্টেন্ট কন্টেইনার - এখানে max-w-7xl এর সাথে w-full দেওয়া হয়েছে */}
                                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
                                    {/* টেক্সট এরিয়া: মোবাইলে উইডথ ৮৫% এ লক করা যেন স্ক্রিনের বাইরে কোনো লেখা পুশ না করে */}
                                    <div className="max-w-[85%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white">
                                        <p className="uppercase tracking-[3px] md:tracking-[6px] text-cyan-400 font-bold text-[10px] md:text-sm mb-2 md:mb-5">
                                            Startup Platform
                                        </p>

                                        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-black leading-tight drop-shadow-md break-words">
                                            {titleText}
                                        </h1>

                                        <p className="mt-3 md:mt-6 text-xs sm:text-base md:text-lg lg:text-xl text-gray-300 font-light line-clamp-3 md:line-clamp-none">
                                            {descText}
                                        </p>

                                        <div className="mt-5 md:mt-10">
                                            <button className="inline-block w-auto px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-xs sm:text-lg hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all">
                                                Explore Ideas
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ডট প্যাগিনেশন */}
                {slides.length > 1 && (
                    <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3 bg-black/40 backdrop-blur-md px-2.5 py-1 md:px-4 md:py-2 rounded-full">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "w-5 md:w-8 bg-cyan-400" : "w-2 md:w-3 bg-white/40 hover:bg-white"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Banner;