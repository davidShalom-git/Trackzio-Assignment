import { useState, useMemo } from "react";
import { useAppStore } from '../hooks/useAppStore';
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import FeedCard from "../components/FeedCard";

const FeedPage = () => {
    const communityPost = useAppStore(state => state.communityPosts);
    const [filteredPosts, setFilteredPosts] = useState(communityPost);

    return (
        <div className="relative min-h-screen bg-[#F8F9FA] pt-24 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] opacity-60 pointer-events-none">
                <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-rose-200/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-40 left-20 w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 mt-8">
                <h1 className='text-center font-black text-6xl text-slate-900 tracking-tight leading-tight mb-4'>
                    Collector's <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500">Feed</span>
                </h1>
                <p className="text-center text-slate-500 text-lg font-medium mb-12 max-w-md mx-auto">
                    See what other collectors are unearthing, trading, and talking about today.
                </p>
                
                <div className="mb-10 w-full">
                    <FilterBar items={communityPost} onFilterComplete={setFilteredPosts} hideAdvancedFilters />
                </div>

                {filteredPosts.length === 0 ? (
                    <EmptyState 
                        title="No posts found" 
                        message="Try adjusting your search or filters to see community posts." 
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

export default FeedPage;