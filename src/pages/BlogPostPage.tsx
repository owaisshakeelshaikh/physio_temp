import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';
import { blogPosts } from '../data/blogData';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen dark:bg-darkBg">
          <Navbar />
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300">
              Back to Blog
            </Link>
          </div>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const shareUrl = encodeURIComponent(`https://healex.com/blog/${post.slug}`);
  const shareTitle = encodeURIComponent(post.title);

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  const renderMarkdown = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 font-poppins">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3 font-poppins">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- **')) {
        elements.push(
          <li key={i} className="text-gray-700 dark:text-gray-300 ml-4 mb-2 list-disc" dangerouslySetInnerHTML={{
            __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>')
          }} />
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={i} className="text-gray-700 dark:text-gray-300 ml-4 mb-2 list-disc">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
        elements.push(
          <li key={i} className="text-gray-700 dark:text-gray-300 ml-4 mb-2 list-decimal" dangerouslySetInnerHTML={{
            __html: line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>')
          }} />
        );
      } else if (line.startsWith('|')) {
        // Skip markdown tables - render as styled text
        if (line.includes('---')) { i++; continue; }
        const cells = line.split('|').filter(c => c.trim());
        elements.push(
          <div key={i} className="flex gap-4 py-2 border-b border-gray-100 dark:border-darkBorder text-sm">
            {cells.map((cell, ci) => (
              <span key={ci} className={`flex-1 ${ci === 0 ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                {cell.trim()}
              </span>
            ))}
          </div>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />);
      } else {
        elements.push(
          <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>')
          }} />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <PageTransition>
      <div className="min-h-screen dark:bg-darkBg">
        <SEOHead
          title={post.title}
          description={post.excerpt}
          ogImage={post.image}
          ogUrl={`https://healex.com/blog/${post.slug}`}
          ogType="article"
        />
        <Navbar />

        {/* Hero image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Meta info */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-poppins mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{post.author}</div>
                  <div>{post.date}</div>
                </div>
              </div>
              <span className="hidden md:inline">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-200 dark:border-darkBorder">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 dark:bg-darkCard hover:bg-blue-500 hover:text-white text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Share on Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 dark:bg-darkCard hover:bg-blue-700 hover:text-white text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Share on Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 dark:bg-darkCard hover:bg-blue-600 hover:text-white text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 dark:bg-darkCard hover:bg-green-500 hover:text-white text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Share on WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          {/* Article body */}
          <article className="prose-lg max-w-none">
            {renderMarkdown(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-darkBorder">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-100 dark:bg-darkCard text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author box */}
          <div className="mt-8 bg-softBg dark:bg-darkCard rounded-2xl p-6 border border-gray-100 dark:border-darkBorder">
            <div className="flex items-start space-x-4">
              <img src={post.authorImage} alt={post.author} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{post.author}</h4>
                <p className="text-sm text-primary font-medium mb-2">Senior Physiotherapist</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  With over 15 years of experience, {post.author.split(' ')[1]} specializes in evidence-based physiotherapy and patient education.
                </p>
                <Link to="/doctor/dr-arjun-mehta" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                  View Full Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(rp => (
                <Link
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="group bg-white dark:bg-darkCard rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-darkBorder"
                >
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{rp.readTime}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {rp.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <ScrollToTop />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default BlogPostPage;
