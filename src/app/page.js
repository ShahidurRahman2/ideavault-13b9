import Banner from "@/components/Banner";
import TrendingIdeas from "@/components/TrendingIdeas";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1527]">
      <Banner />
      <TrendingIdeas />
    </div>
  );
}