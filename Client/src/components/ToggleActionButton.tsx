import { useAppStore } from '../hooks/useAppStore';
import type { MarketPlaceItem, CommunityPost } from '../@types';

interface ToggleActionButtonProps {
    item: any;
    storeType: 'market' | 'community';
    property: string;
    icon: (isActive: boolean) => React.ReactNode;
    activeClasses: string;
    inactiveClasses: string;
    className?: string;
    onToggle?: (newValue: boolean) => void;
}

const ToggleActionButton = ({
    item,
    storeType,
    property,
    icon,
    activeClasses,
    inactiveClasses,
    className = '',
    onToggle
}: ToggleActionButtonProps) => {

    const toggleMarketItemProperty = useAppStore(state => state.toggleMarketItemProperty);
    const toggleCommunityPostProperty = useAppStore(state => state.toggleCommunityPostProperty);

    const isActive = !!item[property];

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const newValue = !isActive;

        if (storeType === 'market') {
            toggleMarketItemProperty(item.id, property as keyof MarketPlaceItem);
        } else {
            toggleCommunityPostProperty(item.id, property as keyof CommunityPost);
        }

        if (onToggle) {
            onToggle(newValue);
        }
    };

    return (
        <button
            onClick={handleToggle}
            className={`transition-all duration-300 active:scale-90 flex items-center justify-center ${isActive ? activeClasses : inactiveClasses} ${className}`}
        >
            {icon(isActive)}
        </button>
    );
};

export default ToggleActionButton;
