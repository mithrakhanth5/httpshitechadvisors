import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Check
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

  const categories = ['All', 'AI & Engineering', 'Architecture & Strategy', 'Cloud & Distributed Systems'];

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
    <div className="py-12 bg-slate-950">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-rose-400 font-semibold">Blog &amp; Insights</span>
        </nav>
      </div>

      {/* Main Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-rose-500" />
            <span>Research &amp; Executive Briefings</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Recent Blog <span className="text-rose-500">Posts &amp; Insights</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Strategic analyses, engineering perspectives, and real-world architectures written by Hitech Advisors practice leads.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-4 glass-panel rounded-2xl border border-slate-800">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
            />
          </div>
        </div>

        {/* Post Grid (Clean Modern 2 & 3 Column layout) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-rose-500/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-400 transition">
                  {post.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 italic">
                  "{post.highlight}"
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  By {post.author} • {post.date}
                </div>
                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-white transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-rose-400 bg-rose-950 px-3 py-1 rounded-full">
                  {activeArticle.category}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>By {activeArticle.author}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {activeArticle.title}
              </h2>

              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-900/40 text-sm text-rose-200 italic">
                "{activeArticle.highlight}"
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleShare}
                  className="flex items-center text-xs font-medium text-slate-400 hover:text-white"
                >
                  {copied ? <Check className="w-4 h-4 mr-1.5 text-emerald-400" /> : <Share2 className="w-4 h-4 mr-1.5" />}
                  <span>{copied ? 'Link Copied!' : 'Share Briefing'}</span>
                </button>

                <button
                  onClick={() => {
                    const title = activeArticle.title;
                    setActiveArticle(null);
                    onOpenConsultation(`Discuss Article: ${title}`);
                  }}
                  className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-lg shadow-rose-950/50"
                >
                  Discuss this Strategy with a Principal Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
