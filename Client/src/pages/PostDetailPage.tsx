import { useParams, Link, useNavigate } from "react-router-dom";
import { useAppStore } from '../hooks/useAppStore';
import FeedCard from "../components/FeedCard";

const PostDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const communityPosts = useAppStore(state => state.communityPosts);
    
    const post = communityPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen bg-[#F8F9FA] pt-24 pb-20 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-slate-900">Post not found</h1>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen bg-[#F8F9FA] pt-24 pb-20 overflow-hidden">
            <div className="max-w-xl mx-auto px-4 mt-8">
                
                <button 
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Feed
                </button>

                <h1 className='text-center font-black text-4xl text-slate-900 tracking-tight leading-tight mb-10'>
                    Post Details
                </h1>
                
                <FeedCard post={post} />
                
                {post.relatedItemId && (
                    <div className="mt-8 text-center">
                        <Link 
                            to={`/marketItemDetail/${post.relatedItemId}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
                        >
                            View Item in Marketplace
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostDetailPage;
