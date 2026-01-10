'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, AlertTriangle, Users, ArrowUpRight, History } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Insight } from '@/types';
import { archiveData } from '@/lib/archives';

// Mock Data removed, using API

export default function IntelligencePage() {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const res = await fetch('/api/intelligence');
                const data = await res.json();
                if (data.success) {
                    setInsights(data.data);
                }
            } catch (err) {
                console.error('Failed to fetch insights', err);
            } finally {
                setLoading(false);
            }
        };
        fetchInsights();
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Institutional Intelligence</h1>
                    <p className="text-gray-400">Real-time patterns extracted from the semantic memory bank.</p>
                </div>
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                    Export Report (PDF)
                </button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <MetricCard label="Total Memories" value="1,248" icon={Brain} trend="+12% this week" />
                <MetricCard label="Active Patterns" value={loading ? "..." : String(insights.length * 14)} icon={TrendingUp} trend="5 new detected" />
                <MetricCard label="Critical Risks" value={loading ? "..." : String(insights.filter(i => i.type === 'Risk').length)} icon={AlertTriangle} color="text-red-400" trend="Requires Action" />
                <MetricCard label="Contributors" value="856" icon={Users} trend="Active Students" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Col: Insights Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", loading ? 'bg-gray-500' : 'bg-blue-500 animate-pulse')} />
                        Live Insights
                    </h2>
                    <div className="space-y-4">
                        {loading ? (
                            <div className="text-gray-500 text-center py-10 glass-panel rounded-xl">Analyzing semantic vectors...</div>
                        ) : insights.map((insight, i) => (
                            <motion.div
                                key={insight.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex gap-3 items-center">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-xs font-medium border",
                                            insight.type === 'Risk' ? "bg-red-500/10 border-red-500/20 text-red-400" :
                                                insight.type === 'Opportunity' ? "bg-green-500/10 border-green-500/20 text-green-400" :
                                                    "bg-blue-500/10 border-blue-500/20 text-blue-400"
                                        )}>
                                            {insight.type}
                                        </span>
                                        <span className="text-xs text-gray-500">Confidence: {(insight.confidence * 100).toFixed(0)}%</span>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{insight.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Col: Visualization */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Semantic Cluster Map</h2>
                    <div className="glass-panel aspect-square rounded-2xl relative overflow-hidden p-6 flex items-center justify-center bg-black/40">
                        {/* Abstract Clusters - animated bubbles */}
                        <motion.div
                            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-500/20 blur-xl flex items-center justify-center"
                        >
                            <span className="text-xs font-bold text-blue-300 relative z-10">Placement</span>
                        </motion.div>
                        <motion.div
                            animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-purple-500/20 blur-xl flex items-center justify-center"
                        >
                            <span className="text-xs font-bold text-purple-300 relative z-10">Events</span>
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-pink-500/10 blur-2xl flex items-center justify-center"
                        >
                            <span className="text-xs font-bold text-pink-300 relative z-10">Student Sentiment</span>
                        </motion.div>

                        <div className="absolute inset-0 border border-white/5 rounded-2xl" />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-500">Live Projection v2.1</div>
                    </div>


                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-sm font-bold mb-4 text-gray-300">Monetization Status</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Target Depts</span>
                                <span>3 Active</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Reports Sold</span>
                                <span className="text-green-400">12 (₹42,000)</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                                <div className="w-[35%] h-full bg-blue-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decade Archive Section */}
            <div className="space-y-6 pt-8 border-t border-white/10">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <History className="w-6 h-6 text-purple-400" />
                    Archive: The Decade of Data
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {archiveData.map((item) => (
                        <div key={item.id} className="glass-panel rounded-2xl overflow-hidden group hover:border-purple-500/50 transition-colors">
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2 py-1 rounded-md border border-white/20 mb-2 inline-block">{item.year}</span>
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <p className="text-gray-400 text-sm leading-relaxed">{item.story}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-4">
                                    <span className="flex items-center gap-1 text-purple-400">
                                        <ArrowUpRight className="w-3 h-3" /> {item.outcome}
                                    </span>
                                    <span>Sent: {item.stats.sentimentScore * 100}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MetricCard({ label, value, icon: Icon, trend, color = "text-blue-400" }: any) {
    return (
        <div className="glass-panel p-5 rounded-xl">
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-gray-400 font-medium">{label}</span>
                <Icon className={cn("w-5 h-5", color)} />
            </div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-xs text-gray-500">{trend}</div>
        </div>
    );
}
