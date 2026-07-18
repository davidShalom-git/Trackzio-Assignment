import { useState } from 'react';
import { useAppStore } from '../hooks/useAppStore';
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";
import { formatCurrency } from "../utils/formatCurrency";

const MarketPlacePage = () => {

    const marketplaceItems = useAppStore(state => state.marketplaceItems);
    const [filteredItems, setFilteredItems] = useState(marketplaceItems);

    return (
        <div className="relative min-h-screen bg-[#F8F9FA] pt-24 pb-20 overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-40 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 blur-[100px] rounded-full mix-blend-multiply" />
            </div>

            <div className="relative z-10">
                <h1 className='text-center mt-10 font-extrabold text-5xl text-slate-900 tracking-tight'>Marketplace</h1>
                <p className="text-center text-slate-500 mt-4 text-lg font-medium">Discover rare collectibles from around the world.</p>

                <FilterBar 
                    items={marketplaceItems}
                    onFilterComplete={setFilteredItems}
                />
                
                {filteredItems.length === 0 ? (
                    <EmptyState 
                        title="No collectibles found" 
                        message="We couldn't find anything matching your filters. Try adjusting them in the bar above." 
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto px-6 mt-16">
                        {filteredItems.map((item) => (
                            <Link key={item.id} to={`/marketItemDetail/${item.id}`}>
                                <PostCard>
                                    <div className="relative p-3 pb-0">
                                        <div className="overflow-hidden rounded-xl bg-slate-100/50">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-56 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl m-3 pointer-events-none" />
                                    </div>
                                    <div className="p-5 pt-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md uppercase tracking-widest">{item.category}</span>
                                            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                Verified
                                            </span>
                                        </div>
                                        <h3 className="mb-4 text-lg font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                                            <div>
                                                <p className="text-[11px] text-slate-500 mb-0.5 font-medium uppercase tracking-wider">Current Price</p>
                                                <p className="text-xl font-black text-slate-900">
                                                    {formatCurrency(item.price, item.currency)}
                                                </p>
                                            </div>
                                            <span className="text-xs font-semibold bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-sm">
                                                {item.condition}
                                            </span>
                                        </div>
                                    </div>
                                </PostCard>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MarketPlacePage;