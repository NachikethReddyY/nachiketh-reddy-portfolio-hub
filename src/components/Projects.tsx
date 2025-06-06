
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
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
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills, interests, and learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white"
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
      </div>
    </section>
  );
};

export default Projects;
