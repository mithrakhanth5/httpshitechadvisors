import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Share2,
  Check
} from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '../data/siteData';

interface BlogSectionProps {
  onOpenConsultation: (topic?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenConsultation }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '#' + post.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="insights" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-rose-500" />
            <span>Research &amp; Thought Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Executive Briefings &amp; Insights
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Unvarnished technical analyses and strategic perspectives on AI, distributed architectures, and engineering leadership.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-300 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Key takeaway callout */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 italic">
                  <span className="text-rose-400 font-bold block not-italic uppercase font-mono text-[10px] mb-0.5">
                    Strategic Takeaway:
                  </span>
                  "{post.highlight}"
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-medium">
                  By {post.author} • {post.date}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center text-xs font-semibold text-rose-400 hover:text-white transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Article Content */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-rose-400 bg-rose-950 px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
                <span>•</span>
                <span>By {selectedPost.author}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {selectedPost.title}
              </h2>

              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-900/40 text-sm text-rose-200 italic">
                "{selectedPost.highlight}"
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="flex items-center text-xs font-medium text-slate-400 hover:text-white"
                >
                  {copied ? <Check className="w-4 h-4 mr-1.5 text-emerald-400" /> : <Share2 className="w-4 h-4 mr-1.5" />}
                  <span>{copied ? 'Link Copied to Clipboard!' : 'Share Article'}</span>
                </button>

                <button
                  onClick={() => {
                    const title = selectedPost.title;
                    setSelectedPost(null);
                    onOpenConsultation(`Discuss Article: ${title}`);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-lg shadow-rose-950/50"
                >
                  Discuss this Strategy with an Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
