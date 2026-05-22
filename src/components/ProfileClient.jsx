'use client';

import { Archive, Bell, MessageSquareMore, Phone, Trash2, Video } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProfileClient = ({ profile }) => {

  const [timeline, setTimeline] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("timeline") || "[]");
    }

    return [];
  });

  const addTimeline = (type) => {
    const newTimeline = [
      ...timeline,
      {
        date: new Date().toISOString(),
        type,
        profile: profile,
      },
    ];

    setTimeline(newTimeline);

    localStorage.setItem("timeline", JSON.stringify(newTimeline));
  };

    const statusColor = {
        "active": "text-white bg-green-600",
        "on-track": "text-white bg-yellow-600",
        "overdue": "text-white bg-red-600",
    };

    return (
        <div className="container mx-auto py-20 flex gap-6 items-start">
            <div className="flex-1">
                <div className="text-center p-4 shadow border bg-white border-gray-100 rounded-2xl space-y-4 mb-6">
                    <Image className="rounded-full mx-auto" src={profile.picture} alt={profile.name} width={100} height={100} />
                    <h2>{profile.name}</h2>
                    <p className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${ statusColor[profile.status]}`}>
                        {profile.status}
                    </p>
                    
                    <div className="flex space-x-2 justify-center">
                        {profile.tags.map((tag) => {
                            return (
                            <span key={tag} className="badge badge-soft badge-accent rounded-full">
                                {tag}
                            </span>
                            );
                        })}
                    </div>
                    <p>{profile.bio}</p>
                </div>
                <div className="space-y-2">
                    <div className="flex gap-2 px-4 py-2 justify-center border border-gray-200 rounded"><Bell />Snooze 2 weeks</div>
                    <div className="flex gap-2 px-4 py-2 justify-center border border-gray-200 rounded"><Archive />Archive</div>
                    <div className="flex gap-2 px-4 py-2 justify-center border border-gray-200 rounded"><Trash2 />Delete</div>
                </div>
            </div>
            <div className="space-y-8 flex-2">
                <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
                    <p className="text-4xl font-semibold text-[#244D3F]">{profile.days_since_contact}</p>
                    <p className="text-[#64748B]">Days since contact</p>
                    </div>
        
                    <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
                    <p className="text-4xl font-semibold text-[#244D3F]">{profile.goal}</p>
                    <p className="text-[#64748B]">Goal(days)</p>
                    </div>
        
                    <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
                    <p className="text-4xl font-semibold text-[#244D3F]">{profile.next_due_date}</p>
                    <p className="text-[#64748B]">Next Due</p>
                    </div>
                </div>
                <div className="p-4 shadow border bg-white border-gray-100 rounded space-y-2">
                    <div className="flex justify-between">
                        <p>Relationship Goal</p>
                        <button className="btn btn-sm">Edit</button>
                    </div>
                    <p>Connect every <span>{profile.goal} days</span></p>
                </div>

                <div className="p-4 shadow border bg-white border-gray-100 rounded space-y-2">
                    <p>Quick Check-In</p>
                    <div className="flex gap-4">
                        <button className="p-10 btn flex-1" onClick={() => addTimeline("call")}><Phone /> Call</button>
                        <button className="p-10 btn flex-1" onClick={() => addTimeline("text")}><MessageSquareMore />Text</button>
                        <button className="p-10 btn flex-1" onClick={() => addTimeline("video")}><Video />Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileClient;