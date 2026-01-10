'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, History } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]" />

      {/* Hero Section */}
      <div className="z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">System Online: Academic Year 2026</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Batch<span className="text-gradient">Zero</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
            Every year, knowledge resets. Students struggle. Events fail.
            <br className="hidden md:block" />
            We turn <span className="text-white font-semibold">lived experience</span> into <span className="text-white font-semibold">institutional memory</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard/ingest">
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="flex items-center gap-2">
                  Initialize Ingestion <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
            <Link href="/dashboard/intelligence">
              <button className="px-8 py-4 glass-panel text-white font-medium rounded-xl hover:bg-white/10 transition-all">
                View Intelligence
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-6 mt-32 z-10">
        <FeatureCard
          icon={<History className="w-8 h-8 text-blue-400" />}
          title="Stop The Reset"
          description="Don't let your club's knowledge graduate when you do. Bank it forever."
          delay={0.2}
        />
        <FeatureCard
          icon={<Brain className="w-8 h-8 text-purple-400" />}
          title="Semantic Memory"
          description="We don't store feedback forms. We store MEANING and patterns."
          delay={0.4}
        />
        <FeatureCard
          icon={<Zap className="w-8 h-8 text-pink-400" />}
          title="Decision Intelligence"
          description="Instant reports on why placements failed and how to fix them."
          delay={0.6}
        />
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
