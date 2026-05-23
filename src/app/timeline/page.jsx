'use client';

import { MessageSquareMore, Phone, Video } from 'lucide-react';
import React, { useState } from 'react';

const Timeline = () => {

    const [timeline] = useState(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(localStorage.getItem("timeline") || "[]");
        }

        return [];
    });

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };
    const getIcon = (type) => {
        switch (type) {
            case "call":
                return <Phone />;
            case "text":
                return <MessageSquareMore />;
            case "video":
                return <Video />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1 className='text-3xl font-bold'>timeline</h1>
            {timeline.length === 0 && (
                <p className='text-gray-500 mt-4'>No timeline items found.</p>
            )}
            <div className='space-y-4 p-4'>
                {timeline.map((t) => {
                    return (
                        <div key={t.date} className='flex items-center gap-4 border border-gray-200 p-4 rounded-lg'>
                            <div>
                                {getIcon(t.type)}
                            </div>
                            <div>
                                <p><span className='font-bold capitalize'>{t.type}</span> with {t.profile.name}</p>
                                <p>{formatDate(t.date)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;