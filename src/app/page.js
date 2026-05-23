'use client';

import profiles from "@/data/profiles.json";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [timeline, setimeline] = useState([]);

  useEffect(() => {
    const storedTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    setimeline(storedTimeline);
  }, []);

  return (
    <>
      <div className="bg-[#F8FAFC] py-20 space-y-10">
        <section className="mx-auto container text-center space-y-4">
          <h2 className="text-3xl font-bold">Friends to keep close in your life</h2>
          <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <button className="btn btn-primary bg-green-900 border-none"><Plus /> Add a Friend</button>
        </section>

        <div className="mx-auto container grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
            <p className="text-4xl font-semibold text-[#244D3F]">{profiles.length}</p>
            <p className="text-[#64748B]">Total Friends</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
            <p className="text-4xl font-semibold text-[#244D3F]">{profiles.filter((p) => p.status === "on-track").length}</p>
            <p className="text-[#64748B]">OnTrack</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
            <p className="text-4xl font-semibold text-[#244D3F]">{profiles.filter((p) => p.status === "overdue").length}</p>
            <p className="text-[#64748B]">Need Attention</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center shadow border bg-white border-gray-100 px-4 py-8 rounded-lg">
            <p className="text-4xl font-semibold text-[#244D3F]">{timeline.length}</p>
            <p className="text-[#64748B]">Interactions this month</p>
          </div>
        </div>

        <div className="border-b border-gray-200 container mx-auto"></div>

        <div className="container mx-auto my-8 space-y-4">

          <div>
            <h3 className="text-xl font-semibold mb-4">Your friends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {profiles.map((profile) => {

                const statusColor = {
                  "active": "text-white bg-green-600",
                  "on-track": "text-white bg-yellow-600",
                  "overdue": "text-white bg-red-600",
                };

                return (
                  <div key={profile.id}>
                    <Link href={`/profile/${profile.id}`}>
                      <div className="border border-gray-200 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="flex-col space-y-1 text-center items-center">
                          <figure className="flex items-center justify-center">
                            <Image
                              src={profile.picture}
                              alt={profile.name}
                              width={80}
                              height={80}
                              className="rounded-full"
                            />
                          </figure>

                          <h2 className="text-lg font-semibold">{profile.name}</h2>

                          <p>{profile.days_since_contact}d ago</p>

                          <div className="flex space-x-2 justify-center">
                            {profile.tags.map((tag) => {
                              return (
                                <span key={tag} className="badge badge-soft badge-accent rounded-full">
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
        
                          <p
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              statusColor[profile.status]
                            }`}
                          >
                            {profile.status}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
