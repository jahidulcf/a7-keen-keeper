'use client';

import React, { useState } from 'react';

const Timeline = () => {

    const [timeline] = useState(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(localStorage.getItem("timeline") || "[]");
        }

        return [];
    });

    return (
        <div>
            <h1 className='text-3xl font-bold'>timeline</h1>
            <div className='space-y-4 p-4'>
                {timeline.map((t) => {
                    return (
                        <div key={t.date} className='border border-gray-200 p-4 rounded-lg'>
                            <p>{t.date}</p>
                            <p>{t.type}</p>
                            <p>{t.profile.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;