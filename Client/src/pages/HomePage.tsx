import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FA] overflow-hidden">
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center min-h-[90vh]">
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] opacity-70 pointer-events-none">
                    <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-indigo-300/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                    <div className="absolute top-40 right-10 w-[550px] h-[550px] bg-purple-300/50 rounded-full blur-[130px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200/50 rounded-full blur-[140px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-sm font-semibold text-slate-600">The premier network for numismatists</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
                        Every Coin Has <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500">A Story To Tell.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join a vibrant community of thousands of passionate collectors. Discover rare numismatic treasures, showcase your prized pieces, and build your legacy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link 
                            to="/marketpage" 
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-[0_8px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_40px_rgba(79,70,229,0.5)] hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Marketplace
                        </Link>
                        <Link 
                            to="/feedpage" 
                            className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur-md text-slate-900 font-bold text-lg rounded-2xl border border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            Join Community
                        </Link>
                    </div>
                </div>

                <div className="absolute hidden lg:block -left-20 top-1/2 -translate-y-1/2 w-64 h-80 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/60 shadow-2xl -rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500">
                    <img src="/vintage_silver_coin.png" alt="Antique Silver Coin" className="absolute inset-4 rounded-[2.5rem] object-cover opacity-90 shadow-inner" />
                </div>
                <div className="absolute hidden lg:block -right-20 top-1/3 -translate-y-1/2 w-72 h-80 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/60 shadow-2xl rotate-12 hover:rotate-0 hover:scale-105 transition-all duration-500">
                    <img src="/vintage_banknote.png" alt="Vintage Banknote" className="absolute inset-4 rounded-[2.5rem] object-cover opacity-90 shadow-inner" />
                </div>
            </div>

            <div className="relative bg-white py-32 border-t border-slate-100/50 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Designed for real collectors.</h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">We built Collector's Hub because we were tired of clunky forums and outdated auction sites. Here is what makes us different.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/60 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Curated Marketplace</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">Stop digging through endless spam listings. Our marketplace highlights high-quality, vetted pieces from serious collectors just like you.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Your Private Vault</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">Keep a digital record of your entire collection. Track purchase prices, market values, and high-res photos all in one secure place.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                            <div className="w-20 h-20 mx-auto bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">A Real Community</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">No algorithms. No noise. Just a dedicated feed where you can share your latest acquisitions and geek out over historical artifacts.</p>
                        </div>
                    </div>
                    
                    <div className="mt-32 pb-10 text-center border-t border-slate-200/60 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex -space-x-4">
                            <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=11" alt="Avatar" />
                            <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
                            <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=33" alt="Avatar" />
                            <img className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=42" alt="Avatar" />
                            <div className="w-12 h-12 rounded-full border-4 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                                +2k
                            </div>
                        </div>
                        <div className="text-left max-w-sm">
                            <div className="flex gap-1 text-amber-400 mb-1">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">"The best platform for serious numismatists. I've found pieces here that I've been hunting for over a decade."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;