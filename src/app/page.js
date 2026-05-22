import Banner from "@/components/Banner";
import TrendingIdeas from "@/components/TrendingIdeas";
import WhyChoose from "@/components/Why";
export const metadata = {
  title: "IdeaVault | Home",
};


export default function Home() {
  return (
    <div className="min-h-screen ">
      <Banner />
      <TrendingIdeas />
      <WhyChoose></WhyChoose>
    </div>
  );
}