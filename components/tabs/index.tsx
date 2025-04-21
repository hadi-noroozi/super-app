"use client";

// components/Tabs.tsx
import { useState } from 'react';

type Tab = {
    id: string;
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    defaultTab?: string;
};

export default function Tabs({ tabs, defaultTab }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

    return (
        <div className="w-full max-w-[92vw] border border-teal-800 p-1 rounded-xl">
            {/* Tab headers */}
            <div className="flex overflow-x-auto gap-x-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 font-medium text-sm focus:outline-none flex-1 cursor-pointer ${activeTab === tab.id
                                ? 'text-white bg-teal-900 rounded-lg'
                                : 'text-gray-500 hover:text-white hover:bg-teal-900 transition-all ease-out delay-150 rounded-lg'
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="mt-3">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
}