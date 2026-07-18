import { useParams, Link } from "react-router-dom";
import { useAppStore } from '../hooks/useAppStore';
import ToggleActionButton from "../components/ToggleActionButton";
import { formatCurrency } from "../utils/formatCurrency";

const MarketItemDetail = () => {
    const { id } = useParams();
    const marketplaceItems = useAppStore(state => state.marketplaceItems);
    
    // We now just derive the item from the global store, so it instantly updates!
    const item = marketplaceItems.find(i => i.id === id);

    const handleWishlistToggled = (newValue: boolean) => {
        if (newValue) {
            alert(`${item?.title} added to Wishlist!`);
        } else {
            alert(`${item?.title} removed from Wishlist.`);
        }
    };

    const handleCollectionToggled = (newValue: boolean) => {
        if (newValue) {
            alert(`${item?.title} has been added to your collection!`);
        } else {
            alert(`${item?.title} has been removed from your collection.`);
        }
    };

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA]">
                <h2 className="text-2xl font-bold text-slate-800">Item not found</h2>
                <Link to="/marketpage" className="mt-4 text-indigo-600 font-semibold hover:underline">
                    Back to Marketplace
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] pt-36 pb-20 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-50/80 to-transparent pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="mb-10 flex items-center justify-between">
                    <Link to="/marketpage" className="group inline-flex items-center px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-200/80 text-sm font-bold text-slate-600 hover:text-indigo-600 hover:shadow-md transition-all">
                        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Marketplace
                    </Link>
                </div>

                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white overflow-hidden">
                    <div className="flex flex-col lg:flex-row">


                        <div className="lg:w-1/2 p-4 lg:p-8">
                            <div className="w-full h-full min-h-[500px] rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center relative overflow-hidden group shadow-inner">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-80" />
                                </div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[85%] h-[85%] object-contain drop-shadow-2xl z-10 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />

                                <ToggleActionButton 
                                    item={item}
                                    storeType="market"
                                    property="isWishlisted"
                                    onToggle={handleWishlistToggled}
                                    className="absolute top-6 right-6 z-20 p-3.5 rounded-full shadow-md border"
                                    activeClasses="bg-rose-500 text-white shadow-rose-200 border-rose-500"
                                    inactiveClasses="bg-white text-slate-400 border-slate-100 hover:text-rose-500 hover:shadow-lg"
                                    icon={(isActive) => (
                                        <svg className="w-6 h-6" fill={isActive ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    )}
                                />
                            </div>
                            
                            <div className="flex items-center gap-4 mt-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <img src={item.sellerAvatar} alt={item.sellerName} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Sold by</p>
                                    <p className="font-bold text-slate-900">{item.sellerName}</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="text-sm text-slate-500 font-medium">Location</p>
                                    <p className="font-bold text-slate-900">{item.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col">

                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-black tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">
                                    {item.category}
                                </span>
                                <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md flex items-center border border-emerald-100">
                                    <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    Authentic
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
                                {item.title}
                            </h1>

                            <div className="flex items-end mb-10 pb-10 border-b border-slate-100">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                                    {formatCurrency(item.price, item.currency)}
                                </span>
                            </div>

                            <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                {item.description}
                            </p>

                            <div className="flex flex-col gap-4 mb-12">
                                <div className="flex justify-between items-center py-3 border-b border-slate-50">
                                    <span className="text-slate-400 font-medium">Condition</span>
                                    <span className="text-slate-900 font-bold">{item.condition}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-50">
                                    <span className="text-slate-400 font-medium">Location</span>
                                    <span className="text-slate-900 font-bold flex items-center">
                                        <svg className="w-4 h-4 mr-1.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {item.location}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-50">
                                    <span className="text-slate-400 font-medium">Listed Date</span>
                                    <span className="text-slate-900 font-bold">{new Date(item.datePosted).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div className="pt-8 mt-auto flex flex-col sm:flex-row gap-4">
                                <ToggleActionButton 
                                    item={item}
                                    storeType="market"
                                    property="isInCollection"
                                    onToggle={handleCollectionToggled}
                                    className="flex-[2] py-4 px-8 rounded-2xl font-bold text-lg shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1"
                                    activeClasses="bg-emerald-500 text-white"
                                    inactiveClasses="bg-slate-900 text-white hover:bg-slate-800"
                                    icon={(isActive) => (
                                        <span className="w-full text-center">{isActive ? "Remove from Collection" : "Add to Collection"}</span>
                                    )}
                                />
                                
                                {item.isInCollection && (
                                    <ToggleActionButton 
                                        item={item}
                                        storeType="market"
                                        property="isSelling"
                                        onToggle={(val) => alert(val ? 'Listed for sale!' : 'Removed from sale.')}
                                        className="flex-1 py-4 px-4 rounded-2xl font-bold text-lg shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                                        activeClasses="bg-amber-500 text-white hover:bg-amber-600"
                                        inactiveClasses="bg-white border-2 border-slate-200 text-slate-900 hover:border-amber-500 hover:text-amber-500"
                                        icon={(isActive) => (
                                            <span className="w-full text-center">{isActive ? "Stop Selling" : "List for Sale"}</span>
                                        )}
                                    />
                                )}
                            </div>


                            <div className="mt-10 flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4 shadow-sm">
                                    {item.sellerName.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Sold By</p>
                                    <p className="font-bold text-slate-900">{item.sellerName}</p>
                                </div>
                                <div className="ml-auto">
                                    <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Contact</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="mt-8 flex items-center justify-center gap-3">
                    {item.tags.map(tag => (
                        <span key={tag} className="bg-white border border-slate-200/60 text-slate-500 px-4 py-1.5 rounded-full shadow-sm font-medium text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MarketItemDetail;