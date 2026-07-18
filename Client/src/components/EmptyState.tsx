import React from 'react';

interface EmptyStateProps {
    title?: string;
    message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
    title = "No items found", 
    message = "We couldn't find anything matching your criteria." 
}) => {
    return (
        <div className="flex flex-col items-center justify-center mt-20 px-6">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-center max-w-md">
                {message}
            </p>
        </div>
    );
};

export default EmptyState;
