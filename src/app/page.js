import profiles from "@/data/profiles.json";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      {profiles.map((profile) => (
        <div key={profile.id} className="m-4 border">
          <h2>{profile.name}</h2>
          <Link href={`/profile/${profile.id}`}>profile</Link>
        </div>
      ))}
    </div>
  );
}
