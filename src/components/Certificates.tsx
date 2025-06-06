
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Award, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const Certificates = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('date', { ascending: false })
        .limit(4);

      if (error) throw error;
      setCertificates(data || []);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">Loading certificates...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            <span style={{ color: '#FFDE59' }}>Certificates</span> & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My continuous learning journey documented through certifications and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
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
                      {cert.skills?.map((skill: string) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {cert.certificate_image_url && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 border-[#FFDE59] text-[#FFDE59] hover:bg-[#FFDE59] hover:text-black"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Certificate
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh]">
                          <DialogHeader>
                            <DialogTitle>{cert.title}</DialogTitle>
                          </DialogHeader>
                          <div className="flex justify-center">
                            <img 
                              src={cert.certificate_image_url} 
                              alt={cert.title}
                              className="max-w-full max-h-[60vh] object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    
                    {cert.credential_url !== '#' && cert.status === 'Completed' && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`${cert.certificate_image_url ? 'flex-1' : 'w-full'} border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white`}
                        asChild
                      >
                        <a href={cert.credential_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Credential
                        </a>
                      </Button>
                    )}
                  </div>
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
