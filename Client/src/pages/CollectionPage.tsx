import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from '../hooks/useAppStore';
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import PostCard from "../components/PostCard";
import ToggleActionButton from "../components/ToggleActionButton";

const CollectionPage = () => {
    const marketplaceItems = useAppStore(state => state.marketplaceItems);
    const [activeTab, setActiveTab] = useState<'collection' | 'wishlist' | 'selling'>('collection');

    const tabItems = useMemo(() => {
        return marketplaceItems.filter(item => {
            if (activeTab === 'collection') return item.isInCollection;
            if (activeTab === 'selling') return item.isSelling;
            return item.isWishlisted;
        });
    }, [activeTab]);

    const [filteredItems, setFilteredItems] = useState(tabItems);

    return (
        <div className="relative min-h-screen bg-[#F8F9FA] pt-24 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 blur-[100px] rounded-full mix-blend-multiply" />
            </div>

            <div className="relative z-10">
                <h1 className='text-center mt-10 font-extrabold text-5xl text-slate-900 tracking-tight'>My Vault</h1>
                <p className="text-center text-slate-500 mt-4 text-lg font-medium">Manage your owned collectibles and wishlist.</p>

                <div className="flex justify-center mt-8 mb-10">
                    <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200/60 shadow-sm flex flex-wrap justify-center gap-1">
                        <button 
                            onClick={() => setActiveTab('collection')}
                            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'collection' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Owned
                        </button>
                        <button 
                            onClick={() => setActiveTab('selling')}
                            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'selling' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Selling
                        </button>
                        <button 
                            onClick={() => setActiveTab('wishlist')}
                            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'wishlist' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>

                <FilterBar 
                    items={tabItems}
                    onFilterComplete={setFilteredItems}
                />
                
                {filteredItems.length === 0 ? (
                    <EmptyState 
                        title={activeTab === 'collection' ? "Your collection is empty" : activeTab === 'selling' ? "You aren't selling anything" : "Your wishlist is empty"} 
                        message={activeTab === 'collection' ? "You haven't added any items to your collection yet. Go to the marketplace to purchase some!" : activeTab === 'selling' ? "Mark owned items as 'Selling' to see them here." : "You haven't wishlisted any items yet."} 
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto px-6 mt-16">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="relative group">
                                <Link to={`/marketItemDetail/${item.id}`}>
                                    <PostCard>
                                        <div className="relative p-3 pb-0">
                                            <div className="overflow-hidden rounded-xl bg-slate-100/50">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-slate-100/50">
                                                <span className="font-bold text-sm text-slate-900">{item.currency} {item.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">{item.category}</span>
                                                <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">{item.condition}</span>
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-1">{item.title}</h3>
                                            <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
                                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                                <span className="text-xs font-medium text-slate-400">Added {new Date().toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </PostCard>
                                </Link>
                                
                                <div className="absolute top-4 left-4 flex gap-2 z-20">
                                    {activeTab === 'wishlist' && (
                                        <ToggleActionButton
                                            item={item}
                                            storeType="market"
                                            property="isInCollection"
                                            className="px-3 py-1.5 text-xs font-bold rounded-full shadow-md"
                                            activeClasses="bg-emerald-500 text-white"
                                            inactiveClasses="bg-white text-emerald-600 hover:bg-emerald-50"
                                            icon={(isActive) => <span>Move to Owned</span>}
                                        />
                                    )}
                                    <ToggleActionButton
                                        item={item}
                                        storeType="market"
                                        property={activeTab === 'collection' ? 'isInCollection' : activeTab === 'selling' ? 'isSelling' : 'isWishlisted'}
                                        className="p-1.5 rounded-full shadow-md bg-white text-rose-500 hover:bg-rose-50"
                                        activeClasses=""
                                        inactiveClasses=""
                                        icon={(isActive) => (
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CollectionPage;