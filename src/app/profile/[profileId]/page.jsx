import ProfileClient from "@/components/ProfileClient";
import profiles from "@/data/profiles.json";

const Profile = async ({params}) => {
    const {profileId} = await params;
    const profile = profiles.find((p) => p.id == profileId);

    if (!profile) {
        return <p>Profile not found</p>;
    }

    return (
        <div>
            <ProfileClient profile={profile} />
        </div>
    );
};

export default Profile;