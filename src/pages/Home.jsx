import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Collection from "../components/Collection";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Navbar />
        <Hero />
        <About />
        <WhyChoose />
        <Collection />
        <FAQ/>
        <Testimonial />
        <Contact />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
