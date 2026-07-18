import { useState, useMemo } from "react";
import { useAppStore } from '../hooks/useAppStore';
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import FeedCard from "../components/FeedCard";

const AccountPage = () => {
    const communityPost = useAppStore(state => state.communityPosts);
    const [activeTab, setActiveTab] = useState<'liked' | 'saved'>('liked');
    
    const tabPosts = useMemo(() => {
        return communityPost.filter(post => 
            activeTab === 'liked' ? post.isLiked : post.isSaved
        );
    }, [activeTab]);

    const [filteredPosts, setFilteredPosts] = useState(tabPosts);

    return (
        <div className="relative min-h-screen bg-[#F8F9FA] pt-24 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] opacity-60 pointer-events-none">
                <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-rose-200/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 mt-8">
                <h1 className='text-center font-black text-5xl text-slate-900 tracking-tight leading-tight mb-4'>
                    My Account
                </h1>
                
                <div className="flex justify-center mt-8 mb-10">
                    <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200/60 shadow-sm flex">
                        <button 
                            onClick={() => setActiveTab('liked')}
                            className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'liked' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Liked Posts
                        </button>
                        <button 
                            onClick={() => setActiveTab('saved')}
                            className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'saved' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Saved Posts
                        </button>
                    </div>
                </div>

                <div className="mb-10 w-full">
                    <FilterBar items={tabPosts} onFilterComplete={setFilteredPosts} hideAdvancedFilters />
                </div>

                {filteredPosts.length === 0 ? (
                    <EmptyState 
                        title={activeTab === 'liked' ? "No liked posts" : "No saved posts"} 
                        message={activeTab === 'liked' ? "You haven't liked any posts in the community feed yet." : "You haven't saved any posts yet."} 
                    />
                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredPosts.map(post => (
                            <div key={post.id} className="break-inside-avoid">
                                <FeedCard post={post} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AccountPage;
