
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Edit, Trash2, Eye, Calendar, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogCRM = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    readTime: '',
    published: false
  });

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Starting My Personal Brand Journey",
      excerpt: "Why I decided to build my personal brand and document my learning journey online.",
      content: "Building a personal brand has become increasingly important in today's digital age...",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Personal Branding", "Career", "Digital Presence"],
      category: "Career",
      published: true
    },
    {
      id: 2,
      title: "Building Modern Web Applications with React",
      excerpt: "A comprehensive guide to building scalable and maintainable React applications.",
      content: "React has revolutionized the way we build user interfaces...",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["React", "Web Development", "JavaScript"],
      category: "Technology",
      published: true
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      date: editingPost ? editingPost.date : new Date().toISOString().split('T')[0]
    };

    if (editingPost) {
      setBlogPosts(posts => posts.map(post => post.id === editingPost.id ? newPost : post));
    } else {
      setBlogPosts(posts => [...posts, newPost]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      readTime: '',
      published: false
    });
    setShowCreateForm(false);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    setFormData({
      ...post,
      tags: post.tags.join(', ')
    });
    setEditingPost(post);
    setShowCreateForm(true);
  };

  const handleDelete = (id: number) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
  };

  const togglePublished = (id: number) => {
    setBlogPosts(posts => posts.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  const getStatusColor = (published: boolean) => {
    return published 
      ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300'
      : 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 dark:text-white">
                Blog <span className="text-gradient">CRM</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Manage your blog posts, drafts, and content strategy
              </p>
            </div>
            <Button 
              onClick={() => setShowCreateForm(true)}
              className="bg-[#5271FF] hover:bg-[#5271FF]/90 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>

          {/* Create/Edit Form */}
          {showCreateForm && (
            <Card className="mb-8 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </CardTitle>
                <CardDescription>
                  {editingPost ? 'Update your blog post' : 'Write and publish a new blog post'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        placeholder="Enter post title"
                        required
                        className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technology">Technology</SelectItem>
                          <SelectItem value="Career">Career</SelectItem>
                          <SelectItem value="Learning">Learning</SelectItem>
                          <SelectItem value="Personal">Personal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                      placeholder="Brief description of the post"
                      rows={2}
                      required
                      className="dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      placeholder="Write your blog post content here..."
                      rows={8}
                      required
                      className="dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (comma-separated)</Label>
                      <Input
                        id="tags"
                        value={formData.tags}
                        onChange={(e) => setFormData({...formData, tags: e.target.value})}
                        placeholder="React, JavaScript, Web Development"
                        className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="readTime">Read Time</Label>
                      <Input
                        id="readTime"
                        value={formData.readTime}
                        onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                        placeholder="5 min read"
                        className="dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.published}
                        onChange={(e) => setFormData({...formData, published: e.target.checked})}
                        className="rounded"
                      />
                      <span className="text-sm dark:text-gray-300">Publish immediately</span>
                    </label>
                  </div>

                  <div className="flex space-x-2">
                    <Button type="submit" className="bg-[#5271FF] hover:bg-[#5271FF]/90 text-white">
                      {editingPost ? 'Update Post' : 'Create Post'}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Posts Table */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">All Posts</CardTitle>
              <CardDescription>
                Manage and organize all your blog posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="dark:text-gray-300">Title</TableHead>
                    <TableHead className="dark:text-gray-300">Category</TableHead>
                    <TableHead className="dark:text-gray-300">Status</TableHead>
                    <TableHead className="dark:text-gray-300">Date</TableHead>
                    <TableHead className="dark:text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium dark:text-gray-200">
                        <div>
                          <div className="font-semibold">{post.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                            {post.excerpt}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                          {post.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(post.published)}>
                          {post.published ? 'Published' : 'Draft'}
                        </Badge>
                      </TableCell>
                      <TableCell className="dark:text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => togglePublished(post.id)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(post.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogCRM;
