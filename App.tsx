import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import Letters from './components/Letters';
import SinglePost from './components/SinglePost';
import SEO from './components/SEO';
import { ViewState, Post } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [initialPostData, setInitialPostData] = useState<Post | undefined>(undefined);

  // Handle URL Routing
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const parts = path.split('/').filter(Boolean); // Remove empty strings

      if (parts.length >= 3) {
        // Expected format: /name/type/id
        const id = parts[parts.length - 1];
        if (id) {
          setSelectedPostId(id);
          setCurrentView('single-post');
        }
      } else {
        setCurrentView('home');
        setSelectedPostId(null);
      }
    };

    // Check on initial load
    handlePopState();

    // Listen for browser back/forward
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    if (view === 'home') {
      window.history.pushState(null, '', '/');
      setSelectedPostId(null);
    }
  };

  const handleOpenPost = (post: Post) => {
    if (!post.id) return;
    
    setInitialPostData(post);
    setSelectedPostId(post.id);
    setCurrentView('single-post');
    
    // Update URL without reload
    const safeName = encodeURIComponent(post.name.replace(/\s+/g, '-').toLowerCase());
    const url = `/${safeName}/${post.type}/${post.id}`;
    window.history.pushState({ postId: post.id }, '', url);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <SEO 
              title="Emptiness | A Space to Let Things Out"
              description="A calm, anonymous space for confessions, stories, and letters. Vent your feelings, share secrets without judgment, or write aesthetic notes."
              url="https://emptiness.app/"
            />
            <div className="text-center py-12 space-y-2 fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-medium text-slate-800 tracking-tight">Emptiness</h1>
              <p className="text-slate-400 font-sans font-medium tracking-wide text-sm md:text-base">A space to let things out.</p>
            </div>
            
            {/* Horizontal Layout for Buttons */}
            <div className="flex flex-row gap-2 md:gap-4 mb-10 fade-in overflow-x-auto no-scrollbar pb-2">
              <button 
                onClick={() => handleNavigate('confession')}
                className="flex-1 py-4 px-4 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-600 font-display text-lg md:text-xl hover:bg-rose-50 hover:border-rose-100 hover:text-rose-900 transition-all duration-300 min-w-[120px] whitespace-nowrap text-center"
              >
                Confession
              </button>
              <button 
                onClick={() => handleNavigate('story')}
                className="flex-1 py-4 px-4 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-600 font-display text-lg md:text-xl hover:bg-sky-50 hover:border-sky-100 hover:text-sky-900 transition-all duration-300 min-w-[120px] whitespace-nowrap text-center"
              >
                Story
              </button>
              <button 
                onClick={() => handleNavigate('letters')}
                className="flex-1 py-4 px-4 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-600 font-display text-lg md:text-xl hover:bg-amber-50 hover:border-amber-100 hover:text-amber-900 transition-all duration-300 relative overflow-hidden group min-w-[140px] text-center"
              >
                <span className="relative z-10 block">Letters</span>
                <span className="block text-[9px] text-slate-400 -mt-0.5 relative z-10 group-hover:text-amber-700/60 leading-tight font-sans font-semibold uppercase tracking-wider">(Private)</span>
              </button>
            </div>

            <Feed onOpenPost={handleOpenPost} />
          </>
        );
      
      case 'confession':
        return (
          <>
            <SEO title="Make a Confession | Emptiness" description="Speak your truth anonymously. No judgment, no tracking." />
            <CreatePost type="confession" onClose={() => handleNavigate('home')} />
          </>
        );
      
      case 'story':
        return (
          <>
             <SEO title="Tell Your Story | Emptiness" description="Share your journey with the world. Be heard, be seen, be real." />
             <CreatePost type="story" onClose={() => handleNavigate('home')} />
          </>
        );
      
      case 'letters':
        return <Letters />;

      case 'single-post':
        if (!selectedPostId) return <div>Post not found</div>;
        return <SinglePost postId={selectedPostId} initialPost={initialPostData} onClose={() => handleNavigate('home')} />;
        
      default:
        return <div>Not found</div>;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {renderContent()}
    </Layout>
  );
}

export default App;