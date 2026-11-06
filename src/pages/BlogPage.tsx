import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Check,
  ExternalLink
} from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '../data/siteData';

interface BlogPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 bg-[#F9FBFB] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-500 font-semibold">
          <Link to="/" className="hover:text-[#0B1F33] transition">Home</Link>
          <span>/</span>
          <span className="text-[#D2232A]">Research &amp; Executive Briefings</span>
        </nav>
      </div>

      {/* Main Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#D2232A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#D2232A]" />
            <span>Research &amp; Executive Briefings</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#0B1F33] tracking-tight leading-tight font-serif">
            Recent Blog <span className="text-[#D2232A] italic">Posts &amp; Insights</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Strategic analyses, engineering perspectives, and real-world architectures written by Hitech Advisors practice leads.
          </p>
        </motion.div>

        {/* Search and Category Filters */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'text-slate-600 hover:text-[#0B1F33]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="blogCatTab"
                      className="absolute inset-0 bg-[#0B1F33] rounded-xl shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0B1F33] placeholder-slate-400 focus:outline-none focus:border-[#D2232A] transition"
            />
          </div>
        </div>

        {/* Post Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between group shadow-xs hover:shadow-lg overflow-hidden"
            >
              <div>
                {/* Theme-Matched Blog Cover Image */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[#D2232A] bg-white/95 backdrop-blur-md border border-slate-200/80 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-xs">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-slate-700 bg-white/95 backdrop-blur-md border border-slate-200/80 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium shadow-xs flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-[#D2232A]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    {post.date} • By {post.author}
                  </div>

                  <h2 className="text-lg font-serif font-semibold text-[#0B1F33] tracking-tight leading-snug group-hover:text-[#D2232A] transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {post.summary}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-700 italic border-l-2 border-l-[#D2232A]">
                    "{post.highlight}"
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Executive Briefing
                </span>
                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center text-xs font-bold text-[#D2232A] hover:text-[#B71C22] transition group/btn cursor-pointer"
                >
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F33]/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-[#0B1F33] hover:bg-slate-200 transition cursor-pointer z-10"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Hero Image in Modal */}
                <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-[#D2232A] font-bold border border-slate-200 px-3 py-1 rounded-full text-xs font-mono tracking-wider shadow-xs backdrop-blur-md">
                    {activeArticle.category}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-500">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                  <span>•</span>
                  <span>By {activeArticle.author}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0B1F33] tracking-tight leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 text-sm text-[#0B1F33] italic font-serif border-l-4 border-l-[#D2232A]">
                  "{activeArticle.highlight}"
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeArticle.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleShare}
                      className="flex items-center text-xs font-bold text-slate-600 hover:text-[#0B1F33] transition cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 mr-1.5 text-emerald-600" /> : <Share2 className="w-4 h-4 mr-1.5" />}
                      <span>{copied ? 'Link Copied!' : 'Share Briefing'}</span>
                    </button>
                    {activeArticle.link && (
                      <a
                        href={activeArticle.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs font-bold text-slate-600 hover:text-[#D2232A] transition"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span>Original Post</span>
                      </a>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const title = activeArticle.title;
                      setActiveArticle(null);
                      onOpenConsultation(`Discuss Article: ${title}`);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#D2232A] hover:bg-[#B71C22] text-white font-bold text-xs shadow-md shadow-red-900/20 transition cursor-pointer"
                  >
                    Discuss this Strategy with an Advisor
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
