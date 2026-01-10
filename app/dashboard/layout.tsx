'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Brain, FileText, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

const sidebarItems = [
    { icon: FileText, label: 'Ingest Experience', href: '/dashboard/ingest' },
    { icon: Brain, label: 'Intelligence', href: '/dashboard/intelligence' },
    { icon: LayoutDashboard, label: 'Reports', href: '/dashboard/reports' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex h-screen overflow-hidden bg-black text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 p-6 flex flex-col glass-panel m-4 rounded-2xl h-[calc(100vh-2rem)]">
                <div className="flex items-center justify-between mb-10 px-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg animate-pulse" />
                        <span className="text-xl font-bold tracking-tight">BatchZero</span>
                    </div>
                    <ModeToggle />
                </div>

                <nav className="flex-1 space-y-2">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.href} href={item.href}>
                                <div className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group cursor-pointer",
                                    isActive
                                        ? "bg-white/10 text-white border border-white/10"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}>
                                    <item.icon className={cn("w-5 h-5", isActive ? "text-blue-400" : "text-gray-500 group-hover:text-blue-400")} />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto pt-6 border-t border-white/10 space-y-2">
                    <div className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
                    )}>
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Settings</span>
                    </div>
                    <Link href="/">
                        <div className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-red-400 hover:text-red-300 hover:bg-red-400/10 cursor-pointer"
                        )}>
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                        </div>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
