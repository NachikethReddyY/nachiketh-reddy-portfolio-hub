
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [techFilter, setTechFilter] = useState('all');

  const allProjects = [
    {
      title: "Personal Brand Website",
      description: "A modern, responsive personal brand website built with React and Tailwind CSS. Features blog functionality, project showcase, and contact management.",
      tags: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      githubUrl: "https://github.com/yourusername/personal-website",
      liveUrl: "https://nachikethreddy.github.io",
      status: "In Progress"
    },
    {
      title: "Learning Management System",
      description: "A comprehensive platform for managing courses, certificates, and learning progress. Built with modern web technologies.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/lms-project",
      liveUrl: "#",
      status: "Planned"
    },
    {
      title: "Personal CRM Dashboard",
      description: "A custom CRM solution for managing personal and professional contacts, tracking interactions, and building meaningful relationships.",
      tags: ["React", "TypeScript", "Supabase", "Analytics"],
      githubUrl: "https://github.com/yourusername/personal-crm",
      liveUrl: "#",
      status: "Planned"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "#",
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Material-UI", "Real-time"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600';
    }
  };

  const allTechs = [...new Set(allProjects.flatMap(project => project.tags))];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesTech = techFilter === 'all' || project.tags.includes(techFilter);
    
    return matchesSearch && matchesStatus && matchesTech;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my complete portfolio of projects, from completed works to ongoing developments.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Planned">Planned</SelectItem>
                </SelectContent>
              </Select>

              <Select value={techFilter} onValueChange={setTechFilter}>
                <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by technology" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                  <SelectItem value="all">All Technologies</SelectItem>
                  {allTechs.map((tech) => (
                    <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold dark:text-white">{project.title}</CardTitle>
                    <Badge className={`${getStatusColor(project.status)} border`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white dark:border-[#5271FF] dark:text-[#5271FF] dark:hover:bg-[#5271FF] dark:hover:text-white"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl !== '#' && (
                        <Button 
                          size="sm"
                          className="flex-1 bg-[#5271FF] hover:bg-[#5271FF]/90"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
