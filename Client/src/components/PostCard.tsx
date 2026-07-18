import { useState, type ReactNode } from "react";

const PostCard = ({ children }: { children: ReactNode }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 8;

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div className="group relative rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 ease-out cursor-pointer bg-white border border-slate-100"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            {children}
        </div>
    );
};

export default PostCard;