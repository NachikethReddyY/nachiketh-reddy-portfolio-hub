
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
