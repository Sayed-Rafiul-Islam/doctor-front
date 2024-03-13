import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <Features />
      <Services />
      <Reviews />
      <FAQ />
    </div>
  );
}
