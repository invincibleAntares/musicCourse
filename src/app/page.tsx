
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import Footer from "@/components/ui/Footer";
import UpcomingWebinars from "@/components/Upcomingwebinar";
import WhychooseUs from "@/components/WhyChooseUs";
import { text } from "stream/consumers";

export default function Home() {
  return(
  <main className="min-h-screen bg-black/[0.96] antaliased bg-grid-white/[0.02]">
    
       <HeroSection/>
    <FeaturedCourses/>
        <WhychooseUs/>
        <MusicSchoolTestimonials/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
  </main>
  );
}
