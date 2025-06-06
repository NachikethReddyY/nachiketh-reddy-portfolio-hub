
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Starting My Personal Brand Journey",
      excerpt: "Why I decided to build my personal brand and document my learning journey online. The importance of having a digital presence in today's world.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Personal Branding", "Career", "Digital Presence"],
      category: "Career"
    },
    {
      title: "Building Modern Web Applications with React",
      excerpt: "A comprehensive guide to building scalable and maintainable React applications. Best practices, tools, and techniques I've learned.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["React", "Web Development", "JavaScript"],
      category: "Technology"
    },
    {
      title: "The Power of Continuous Learning",
      excerpt: "How I stay updated with the latest technology trends and why continuous learning is crucial for personal and professional growth.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Learning", "Growth", "Technology"],
      category: "Learning"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300';
      case 'Career':
        return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-300';
      case 'Learning':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            My <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing my thoughts, learnings, and insights on technology, career, and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-white dark:bg-gray-900"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`${getCategoryColor(post.category)} border`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-[#5271FF] transition-colors dark:text-white">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-[#5271FF] hover:text-[#5271FF] hover:bg-[#5271FF]/10 p-0"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
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
            <Link to="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
