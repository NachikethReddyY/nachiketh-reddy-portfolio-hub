
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nachiketh.reddy@example.com",
      href: "mailto:nachiketh.reddy@example.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@nachikethreddy",
      href: "https://github.com/nachikethreddy",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Nachiketh Reddy",
      href: "https://linkedin.com/in/nachikethreddy",
      description: "Let's connect professionally"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@nachikethreddy",
      href: "https://instagram.com/nachikethreddy",
      description: "Follow my journey"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect! Whether you want to discuss projects, share ideas, or just say hello, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-md h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#5271FF]">
                  Contact Information
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Multiple ways to reach me. Choose what works best for you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-[#5271FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#5271FF] transition-colors duration-200">
                        <IconComponent className="h-5 w-5 text-[#5271FF] group-hover:text-white" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 dark:text-gray-100">{method.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{method.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{method.description}</p>
                      </div>
                    </a>
                  );
                })}
                
                <div className="flex items-center p-3 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FFDE59]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#5271FF]" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Singapore</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Open to remote work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#5271FF]">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Have a project in mind or want to collaborate? Let's talk!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="dark:text-gray-200">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name"
                        className="border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-[#5271FF] focus:ring-[#5271FF]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-[#5271FF] focus:ring-[#5271FF]"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="dark:text-gray-200">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?"
                      className="border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-[#5271FF] focus:ring-[#5271FF]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="dark:text-gray-200">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..."
                      rows={6}
                      className="border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:border-[#5271FF] focus:ring-[#5271FF] resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-[#5271FF] hover:bg-[#5271FF]/90 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
