
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about technology, innovation, and continuous learning. Here's a glimpse into my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#5271FF]">Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  Currently pursuing my studies with a focus on technology and innovation. 
                  Always eager to learn new skills and expand my knowledge in emerging technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#5271FF]">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To document my learning journey, share valuable insights with the community, 
                  and build meaningful projects that make a difference. This platform serves as 
                  my personal CRM to connect with like-minded individuals and potential collaborators.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-[#5271FF]">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Technology', 'Innovation', 'Learning', 'Projects', 'Blogging', 'Networking'].map((interest) => (
                    <span 
                      key={interest}
                      className="px-3 py-1 bg-[#FFDE59] text-gray-800 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-8 bg-white shadow-lg border-0">
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#5271FF] to-[#FFDE59] rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">NR</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nachiketh Reddy</h3>
                  <p className="text-gray-600 mb-4">Student & Aspiring Technologist</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>📍 Location: India</p>
                    <p>🎓 Student</p>
                    <p>💼 Building Personal Brand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
