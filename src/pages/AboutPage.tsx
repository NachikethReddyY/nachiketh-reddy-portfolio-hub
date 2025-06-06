
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const educationTimeline = [
    {
      institution: "National University of Singapore",
      degree: "Bachelor of Computer Science",
      period: "2022 - 2026",
      status: "Current",
      description: "Focusing on software engineering, data structures, and modern web technologies.",
      location: "Singapore"
    },
    {
      institution: "Previous Institution",
      degree: "High School Diploma",
      period: "2020 - 2022",
      status: "Completed",
      description: "Graduated with honors, strong focus on mathematics and science.",
      location: "Singapore"
    }
  ];

  const experienceTimeline = [
    {
      company: "Personal Projects",
      role: "Full-Stack Developer",
      period: "2023 - Present",
      status: "Current",
      description: "Building personal brand website, learning management systems, and CRM solutions using React, TypeScript, and modern web technologies.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Supabase"]
    },
    {
      company: "Open Source Contributions",
      role: "Contributor",
      period: "2023 - Present",
      status: "Ongoing",
      description: "Contributing to various open source projects, focusing on web development and documentation improvements.",
      skills: ["Git", "GitHub", "Documentation", "Testing"]
    },
    {
      company: "Learning & Development",
      role: "Student Developer",
      period: "2022 - Present",
      status: "Ongoing",
      description: "Continuously learning new technologies, building projects, and documenting the journey through blogging and knowledge sharing.",
      skills: ["Continuous Learning", "Blogging", "Knowledge Sharing"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current':
      case 'Ongoing':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700';
      case 'Completed':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get to know more about my journey, education, and professional experience.
            </p>
          </div>

          {/* Profile Overview */}
          <div className="mb-16">
            <Card className="p-8 bg-gray-50 dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-32 h-32 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#5271FF] to-[#FFDE59] rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">NR</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Nachiketh Reddy</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      Student & Aspiring Technologist
                    </p>
                    <div className="space-y-2 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Singapore</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>Computer Science Student</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span>Building Personal Brand</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              <GraduationCap className="inline-block mr-3 h-8 w-8" />
              Education Timeline
            </h2>
            <div className="space-y-6">
              {educationTimeline.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-[#5271FF] shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white">{edu.institution}</h3>
                        <p className="text-lg text-[#5271FF] font-semibold">{edu.degree}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <Badge className={`${getStatusColor(edu.status)} border`}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.description}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              <Briefcase className="inline-block mr-3 h-8 w-8" />
              Experience Timeline
            </h2>
            <div className="space-y-6">
              {experienceTimeline.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-[#FFDE59] shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold dark:text-white">{exp.company}</h3>
                        <p className="text-lg text-[#5271FF] font-semibold">{exp.role}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge className={`${getStatusColor(exp.status)} border`}>
                          {exp.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
