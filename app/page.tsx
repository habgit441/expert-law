// import ContactForm from "@/app/component/contact";
import Hero from "./component/Hero"
import About from "./component/About";
import CaseHighlights from "./component/CaseHighlights";
import Testimonials from "./component/Testimonials";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <main>
      <Hero />

       {/* <ContactForm/> */}
       <About />
        <CaseHighlights />
         <Testimonials />
    </main>
    </div>
  );
}
