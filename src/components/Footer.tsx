
import { Github, Mail, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Nachiketh Reddy</h3>
            <p className="text-gray-400 mb-6">
              Building the future through technology, innovation, and continuous learning. 
              Connect with me and let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:nachiketh.reddy@example.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#5271FF] transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/nachikethreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#5271FF] transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/nachikethreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#5271FF] transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/nachikethreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-[#5271FF] transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://substack.com/nachikethreddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Substack
                </a>
              </li>
              <li>
                <a href="https://twitter.com/nachikethreddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500" /> by Nachiketh Reddy
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
