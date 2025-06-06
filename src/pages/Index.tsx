
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectTeasers from '@/components/ProjectTeasers';
import Blog from '@/components/Blog';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProjectTeasers />
      <Blog />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
