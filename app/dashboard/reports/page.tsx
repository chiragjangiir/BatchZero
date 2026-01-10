'use client';

import { Lock, FileText, Check, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Strategic Reports</h1>
                <p className="text-gray-400">Deep-dive analysis generated from accumulated institutional memory.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Free Report */}
                <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-xl text-white">INCLUDED</div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                        <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Daily Experience Digest</h3>
                    <p className="text-gray-400 text-sm mb-6 min-h-[60px]">Summary of ingested experiences from the last 24 hours.</p>
                    <button className="w-full py-3 rounded-xl border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/10 transition-colors flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" /> Download PDF
                    </button>
                </div>

                {/* Paid Report 1 */}
                <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Lock className="w-8 h-8 text-purple-400 mb-2" />
                        <span className="font-bold text-white">Requires Premium</span>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                        <Brain className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Placement Failure Analysis</h3>
                    <p className="text-gray-400 text-sm mb-6 min-h-[60px]">Deep correlation analysis between club participation and interview outcomes.</p>
                    <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20">
                        Unlock (₹25,000/sem)
                    </button>
                </div>

                {/* Paid Report 2 */}
                <div className="glass-panel p-6 rounded-2xl border border-pink-500/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Lock className="w-8 h-8 text-pink-400 mb-2" />
                        <span className="font-bold text-white">Requires Premium</span>
                    </div>
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                        <TrendingUp className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Student Retention Forecast</h3>
                    <p className="text-gray-400 text-sm mb-6 min-h-[60px]">Predictive modeling on student drop-off risks based on semantic sentiment.</p>
                    <button className="w-full py-3 rounded-xl bg-pink-600 text-white font-bold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-900/20">
                        Unlock (₹45,000/yr)
                    </button>
                </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-lg font-bold mb-1">Institutional Plan</h3>
                    <p className="text-gray-400 text-sm">Get full access to all intelligence reports and API access.</p>
                </div>
                <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
                    Upgrade Now
                </button>
            </div>
        </div>
    );
}

function Brain(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
    )
}

function TrendingUp(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </svg>
    )
}
