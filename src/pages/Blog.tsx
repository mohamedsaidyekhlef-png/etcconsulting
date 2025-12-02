import React from 'react';
import FadeIn from '../components/ui/FadeIn';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "The Role of Emotional Intelligence in Modern Leadership",
      excerpt: "Why IQ gets you hired, but EQ gets you promoted. Exploring the critical soft skills needed for C-suite success.",
      author: "Eileen Terry",
      date: "Oct 12, 2024",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Navigating Team Conflict: A Manager's Guide",
      excerpt: "Conflict is inevitable, but destruction is optional. Learn strategies to turn team friction into creative fuel.",
      author: "Eileen Terry",
      date: "Sep 28, 2024",
      category: "Team Building",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "First 90 Days: Strategies for New Executives",
      excerpt: "How to secure early wins and build political capital when stepping into a high-stakes leadership role.",
      author: "Eileen Terry",
      date: "Sep 15, 2024",
      category: "Career Transition",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-soft-white min-h-screen py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-primary mb-4">Insights & Perspectives</h1>
          <p className="text-gray-600">Latest thoughts on leadership, culture, and organizational growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="text-xl font-display font-bold text-primary mb-3 hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                       <img src="https://i.postimg.cc/90M76Xc8/Screenshot-2025-11-22-002621.png" alt="Author" className="w-full h-full object-cover object-top" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
