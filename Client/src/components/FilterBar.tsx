import React, { useState, useEffect } from 'react';

interface FilterBarProps {
    items: any[];
    onFilterComplete: (filteredItems: any[]) => void;
    hideAdvancedFilters?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({ items, onFilterComplete, hideAdvancedFilters = false }) => {
   
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCondition, setSelectedCondition] = useState('All');
    const [sortOption, setSortOption] = useState('Newest');


    useEffect(() => {
      
        const filtered = items.filter(item => {
           
            const titleMatch = item.title ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
            const tagsMatch = item.tags ? item.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())) : false;
            const matchesSearch = titleMatch || tagsMatch;
            
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchesCondition = selectedCondition === 'All' || item.condition === selectedCondition;
            
            return matchesSearch && matchesCategory && matchesCondition;
        });

       
        const sorted = filtered.sort((a, b) => {
            if (sortOption === 'Price: Low to High') return (a.price || 0) - (b.price || 0);
            if (sortOption === 'Price: High to Low') return (b.price || 0) - (a.price || 0);
            return new Date(b.datePosted || 0).getTime() - new Date(a.datePosted || 0).getTime();
        });

   
        onFilterComplete(sorted);

    }, [items, searchQuery, selectedCategory, selectedCondition, sortOption]);

    return (
        <div className="w-full">
          
            <div className='mt-10 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 max-w-xl mx-auto rounded-full px-6 py-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus-within:shadow-[0_8px_30px_rgb(0,0,0,0.08)] focus-within:border-slate-300 focus-within:bg-white'>
                <form className="w-full flex items-center" onSubmit={(e) => e.preventDefault()}>
                    <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input 
                        className="w-full outline-none bg-transparent text-slate-800 placeholder-slate-400 font-medium" 
                        type="text" 
                        placeholder="Search for coins, banknotes, sets..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                </form>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-[90rem] mx-auto px-6">
                {['All', 'Coin', 'BankNote', 'Set', 'Commemorative', 'Silver'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm
                            ${selectedCategory === category
                                ? 'bg-indigo-600 text-white shadow-indigo-200 shadow-md'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {!hideAdvancedFilters && (
                <div className="flex flex-col sm:flex-row justify-between items-center mt-12 max-w-[90rem] mx-auto px-6 pb-4 border-b border-slate-200/60">
                    <div className="text-sm font-medium text-slate-500 mb-4 sm:mb-0">
                        Use filters to refine your search
                    </div>
                    
                    <div className="flex gap-4">
                       
                        <div className="flex items-center bg-white border border-slate-200/60 rounded-full px-4 py-2 shadow-sm hover:border-slate-300 transition-colors">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-2">Condition</label>
                            <select 
                                value={selectedCondition} 
                                onChange={(e) => setSelectedCondition(e.target.value)}
                                className="bg-transparent text-sm font-bold text-slate-700 outline-none cursor-pointer"
                            >
                                <option value="All">Any</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Mint">Mint</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                        </div>
                        
                        <div className="flex items-center bg-white border border-slate-200/60 rounded-full px-4 py-2 shadow-sm hover:border-slate-300 transition-colors">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-2">Sort</label>
                            <select 
                                value={sortOption} 
                                onChange={(e) => setSortOption(e.target.value)}
                                className="bg-transparent text-sm font-bold text-slate-700 outline-none cursor-pointer"
                            >
                                <option value="Newest">Newest First</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FilterBar;
