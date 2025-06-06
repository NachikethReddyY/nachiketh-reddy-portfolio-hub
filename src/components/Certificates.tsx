
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Certificates = () => {
  const certificates = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024-01-20",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and best practices.",
      skills: ["React", "JavaScript", "State Management", "Component Design"],
      credentialUrl: "https://coursera.org/verify/certificate",
      status: "Completed"
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023-12-15",
      description: "Complete full-stack development program covering both frontend and backend technologies.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      credentialUrl: "https://freecodecamp.org/certification",
      status: "Completed"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "2024-02-01",
      description: "Introduction to cloud computing concepts, AWS services, and cloud architecture principles.",
      skills: ["AWS", "Cloud Computing", "Infrastructure", "DevOps"],
      credentialUrl: "#",
      status: "In Progress"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      date: "2024-03-01",
      description: "Advanced course covering data structures, algorithms, and problem-solving techniques.",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
      credentialUrl: "#",
      status: "Planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            <span className="text-gradient">Certificates</span> & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My continuous learning journey documented through certifications and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white dark:bg-gray-800"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-[#FFDE59] mr-2" />
                    <Badge className={`${getStatusColor(cert.status)} border`}>
                      {cert.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-[#5271FF] group-hover:text-[#5271FF]/80 transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  <div className="flex items-center mb-2">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(cert.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  {cert.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {cert.credentialUrl !== '#' && cert.status === 'Completed' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white"
                      asChild
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Credential
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-[#5271FF] hover:bg-[#5271FF]/90 text-white px-8 py-3 rounded-full"
            asChild
          >
            <Link to="/certificates">
              View All Certificates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
