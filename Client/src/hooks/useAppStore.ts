import { create } from 'zustand';
import { marketplaceItems as initialMarketplaceItems } from '../api/marketplaceItems';
import { communityPost as initialCommunityPosts } from '../api/CommunityPost';
import type { MarketPlaceItem, CommunityPost } from '../@types';

interface AppState {
    
    marketplaceItems: MarketPlaceItem[];
    communityPosts: CommunityPost[];
    
   
    toggleMarketItemProperty: (id: string, property: keyof MarketPlaceItem) => void;
    toggleCommunityPostProperty: (id: string, property: keyof CommunityPost) => void;
}

export const useAppStore = create<AppState>((set) => ({
    marketplaceItems: [...initialMarketplaceItems],
    communityPosts: [...initialCommunityPosts],

    toggleMarketItemProperty: (id, property) => set((state) => ({
        marketplaceItems: state.marketplaceItems.map(item => 
            item.id === id 
                ? { ...item, [property]: !item[property] }
                : item
        )
    })),

    toggleCommunityPostProperty: (id, property) => set((state) => ({
        communityPosts: state.communityPosts.map(post => {
            if (post.id !== id) return post;
            
            if (property === 'isLiked') {
                return {
                    ...post,
                    isLiked: !post.isLiked,
                    likesCount: !post.isLiked ? post.likesCount + 1 : post.likesCount - 1
                };
            }
            
            return {
                ...post,
                [property]: !post[property]
            };
        })
    }))
}));
