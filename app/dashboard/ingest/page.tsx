'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Frown, Meh, Smile, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sentiment } from '@/types';

const sentiments: { value: Sentiment; icon: any; color: string }[] = [
    { value: 'Frustrated', icon: AlertCircle, color: 'text-red-400' },
    { value: 'Negative', icon: Frown, color: 'text-orange-400' },
    { value: 'Neutral', icon: Meh, color: 'text-gray-400' },
    { value: 'Positive', icon: Smile, color: 'text-blue-400' },
    { value: 'Excited', icon: CheckCircle2, color: 'text-green-400' },
];

export default function IngestPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        role: '',
        activityType: '',
        story: '',
        sentiment: '' as Sentiment | '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/ingest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStep(2);
            }
        } catch (err) {
            console.error('Ingestion failed', err);
        }
    };

    if (step === 2) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-12 rounded-2xl flex flex-col items-center text-center max-w-2xl mx-auto mt-20"
            >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Experience Banked</h2>
                <p className="text-gray-400 text-lg mb-8">
                    Your insight has been converted into semantic vectors and added to the institutional memory.
                </p>
                <button
                    onClick={() => {
                        setFormData({ role: '', activityType: '', story: '', sentiment: '' });
                        setStep(1);
                    }}
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform"
                >
                    Submit Another
                </button>
            </motion.div>
        );
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Ingest Experience</h1>
                <p className="text-gray-400">Contribute raw experiences to the BatchZero memory bank.</p>
            </div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="glass-panel p-8 rounded-2xl space-y-8"
            >
                {/* Row 1: Context */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-300">Your Role</label>
                        <select
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="">Select Role...</option>
                            <option value="Participant">Participant</option>
                            <option value="Organizer">Organizer</option>
                            <option value="Sponsor">Sponsor</option>
                            <option value="Volunteer">Volunteer</option>
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-300">Activity Type</label>
                        <select
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={formData.activityType}
                            onChange={(e) => setFormData({ ...formData, activityType: e.target.value })}
                        >
                            <option value="">Select Activity...</option>
                            <option value="Hackathon">Hackathon</option>
                            <option value="Interview">Placement Interview</option>
                            <option value="ClubEvent">Club Event</option>
                            <option value="ExamPrep">Exam Preparation</option>
                        </select>
                    </div>
                </div>

                {/* Row 2: Story */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">The Story (What actually happened?)</label>
                    <textarea
                        required
                        rows={5}
                        placeholder="e.g., We organized the hackathon but forgot to order extension cords until the morning of..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        value={formData.story}
                        onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    />
                </div>

                {/* Row 3: Sentiment */}
                <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">Emotional Outcome</label>
                    <div className="flex flex-wrap gap-4">
                        {sentiments.map((s) => (
                            <button
                                key={s.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, sentiment: s.value })}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-3 rounded-xl border transition-all",
                                    formData.sentiment === s.value
                                        ? "bg-white/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                        : "border-white/5 hover:bg-white/5 hover:border-white/20"
                                )}
                            >
                                <s.icon className={cn("w-5 h-5", s.color)} />
                                <span className="text-sm font-medium text-gray-300">{s.value}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Submit */}
                <div className="pt-4 flex justify-end">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        <Send className="w-5 h-5" />
                        Ingest to Memory
                    </button>
                </div>
            </motion.form>
        </div>
    );
}
