// import ContactForm from "@/app/component/contact";
import Hero from "./component/Hero"
import About from "./component/About";
import CaseHighlights from "./component/CaseHighlights";
import Testimonials from "./component/Testimonials";
import SocialLinks from "./component/SocialLinks";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div className="">
       <main>
      <Hero />
      < SocialLinks />
       {/* <ContactForm/> */}
       <About />
        <CaseHighlights />
         <Testimonials />
         < Footer />
    </main>
    </div>
  );
}
