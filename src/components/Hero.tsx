
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Mail, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Nachiketh Reddy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Building the future through technology, innovation, and continuous learning. 
              Welcome to my digital space where I document my journey, share insights, and showcase my work.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#5271FF] hover:bg-[#5271FF]/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="mailto:your.email@example.com" 
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5271FF] hover:text-white group"
            >
              <Mail className="h-6 w-6 group-hover:text-white" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5271FF] hover:text-white group"
            >
              <Github className="h-6 w-6 group-hover:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5271FF] hover:text-white group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-white" />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5271FF] hover:text-white group"
            >
              <Instagram className="h-6 w-6 group-hover:text-white" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
