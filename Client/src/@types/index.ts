export type MarketPlaceItem = {
    id: string;
    title: string;
    category: "Coin" | "BankNote" | "Set" | "Commemorative" | "Silver";
    condition: "Mint" | "Excellent" | "Good" | "Fair";
    price: number;
    currency: "INR";
    sellerName: string;
    sellerAvatar: string;
    location: string;
    image: string;
    gallery?: string[];
    description: string;
    tags: string[];
    datePosted: string;
    isWishlisted: boolean;
    isInCollection: boolean;
    isSelling: boolean;
};

export type CommunityPost = {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    category: "Coin" | "BankNote" | "Set" | "Commemorative" | "Silver";
    image: string;
    caption: string;
    likesCount: number;
    commentsCount: number;
    isLiked: boolean;
    isSaved: boolean;
    createdAt: string;
    relatedItemId? : string
}

export type CollectionItem = {
  id: string;
  title: string;
  category: "Coin" | "Banknote" | "Set" | "Commemorative" | "Silver";
  image: string;
  dateAdded: string;
  estimatedValue: number;
  collectionType: "owned" | "wishlist" | "selling";
};