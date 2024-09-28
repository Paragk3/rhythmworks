import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTesimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Intructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">Parag Page</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTesimonialCards/>
      <UpcomingWebinars/>
      <Intructors/>
      <Footer/>
    </main>
  )
    
}
