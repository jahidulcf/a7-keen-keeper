'use client';

import TimelineChart from '@/components/TimelineChart';
import React, { useState } from 'react';

const State = () => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const [timeline] = useState(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(localStorage.getItem("timeline") || "[]");
        }

        return [];
    });

    const counts = timeline.reduce(
        (acc, item) => {
            acc[item.type] += 1;
            return acc;
        },
        {
            call: 0,
            text: 0,
            video: 0,
        }
    );

    const chartData = [
        { name: 'Call', value: counts.call, fill: COLORS[0] },
        { name: 'Text', value: counts.text, fill: COLORS[1] },
        { name: 'Video', value: counts.video, fill: COLORS[2] },
    ];
    

    return (
        <div className='space-y-4 p-4'>
            <h2 className='text-4xl'>state</h2>
            <div className='flex justify-center'>
                <TimelineChart chartData={chartData} />
            </div>
        </div>
    );
};

export default State;