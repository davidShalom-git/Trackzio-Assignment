import ToggleActionButton from "./ToggleActionButton";
import { Link } from "react-router-dom";

const FeedCard = ({ post }: { post: any }) => {
    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white overflow-hidden group">
            
            <div className="flex items-center gap-4 px-6 py-5">
                <div className="relative">
                    <img src={post.userAvatar} alt={post.userName} className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-white" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{post.userName}</h3>
                    <p className="text-xs font-medium text-slate-500">{post.createdAt}</p>
                </div>
            </div>

            <div className="px-5">
                <Link to={`/post/${post.id}`}>
                    <div className="aspect-square w-full rounded-[2rem] overflow-hidden relative group/img shadow-inner bg-slate-100 cursor-pointer">
                        <img src={post.image} alt="Post" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                </Link>
            </div>

            <div className="px-5 py-5 pb-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <ToggleActionButton 
                            item={post}
                            storeType="community"
                            property="isLiked"
                            className="p-2.5 rounded-full"
                            activeClasses="bg-rose-50 text-rose-500"
                            inactiveClasses="bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            icon={(isActive) => (
                                <svg className="w-6 h-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? "0" : "2"}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            )}
                        />
                        <button className="p-2.5 bg-slate-50 text-slate-600 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 active:scale-90">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        </button>
                    </div>
                    <ToggleActionButton 
                        item={post}
                        storeType="community"
                        property="isSaved"
                        className="p-2.5 rounded-full"
                        activeClasses="bg-indigo-50 text-indigo-600"
                        inactiveClasses="bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        icon={(isActive) => (
                            <svg className="w-6 h-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? "0" : "2"}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                        )}
                    />
                </div>
                
                <p className="font-bold text-sm text-slate-900 mb-1">{post.likesCount.toLocaleString()} likes</p>
                
                <p className="text-sm text-slate-800 leading-relaxed">
                    <span className="font-bold mr-2">{post.userName}</span>
                    {post.caption}
                </p>
                
                <button className="text-slate-400 text-sm mt-2 font-medium hover:text-slate-600 transition-colors">
                    View all {post.commentsCount} comments
                </button>
            </div>
        </div>
    );
};

export default FeedCard;
