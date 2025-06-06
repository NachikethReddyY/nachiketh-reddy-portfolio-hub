
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Award, Calendar, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CertificatesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedIssuer, setSelectedIssuer] = useState('all');

  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024-01-20",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and best practices for building modern web applications.",
      skills: ["React", "JavaScript", "State Management", "Component Design", "JSX", "Hooks"],
      credentialUrl: "https://coursera.org/verify/certificate",
      status: "Completed",
      category: "Frontend Development"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023-12-15",
      description: "Complete full-stack development program covering both frontend and backend technologies with hands-on projects.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express.js"],
      credentialUrl: "https://freecodecamp.org/certification",
      status: "Completed",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "2024-02-01",
      description: "Introduction to cloud computing concepts, AWS services, and cloud architecture principles.",
      skills: ["AWS", "Cloud Computing", "Infrastructure", "DevOps", "EC2", "S3"],
      credentialUrl: "#",
      status: "In Progress",
      category: "Cloud Computing"
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      date: "2024-03-01",
      description: "Advanced course covering data structures, algorithms, and problem-solving techniques for competitive programming.",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization", "Python"],
      credentialUrl: "#",
      status: "Planned",
      category: "Computer Science"
    },
    {
      id: 5,
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2024-04-15",
      description: "Comprehensive machine learning course covering supervised and unsupervised learning algorithms.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks", "Data Analysis"],
      credentialUrl: "#",
      status: "In Progress",
      category: "Data Science"
    }
  ];

  const statuses = ['all', 'Completed', 'In Progress', 'Planned'];
  const issuers = ['all', ...new Set(certificates.map(cert => cert.issuer))];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || cert.status === selectedStatus;
    const matchesIssuer = selectedIssuer === 'all' || cert.issuer === selectedIssuer;
    
    return matchesSearch && matchesStatus && matchesIssuer;
  });

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              <span className="text-gradient">Certificates</span> & Achievements
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My continuous learning journey documented through certifications and professional achievements.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full lg:w-48 dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status === 'all' ? 'All Status' : status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedIssuer} onValueChange={setSelectedIssuer}>
              <SelectTrigger className="w-full lg:w-48 dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Issuer" />
              </SelectTrigger>
              <SelectContent>
                {issuers.map((issuer) => (
                  <SelectItem key={issuer} value={issuer}>
                    {issuer === 'all' ? 'All Issuers' : issuer}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filteredCertificates.length} of {certificates.length} certificates
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCertificates.map((cert) => (
              <Card 
                key={cert.id}
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
                  <CardTitle className="text-xl font-bold text-[#5271FF] group-hover:text-[#5271FF]/80 transition-colors dark:text-[#5271FF]">
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

          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No certificates found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
