
"use client";

import React, { useEffect, useState } from 'react';

const ProfileClient = ({profile}) => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("timeline");
        if (stored) setTimeline(JSON.parse(stored));
    }, [])

    const handleDial = () => {
        const newEvent = { profileId: profile.id, time: new Date().toISOString() };
        const updated = [...timeline, newEvent];
        setTimeline(updated);
        localStorage.setItem("timeline", JSON.stringify(updated));
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>Email: {profile.email} </p>
            <button onClick={handleDial}>Dial</button>

            <h2>Timeline</h2>
            <ul>
                {timeline.map((event) => (
                    <li key={event.time}>{event.profileId}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileClient;