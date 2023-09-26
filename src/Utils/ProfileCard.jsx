const ProfileCard = ({ profile }) => {
    const img = new URL(
        profile.imageSrc,
        import.meta.url
    ).href;

    return (
        <section className="w-64 animate-fade-up cursor-pointer mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
            <div className="mt-6 w-fit mx-auto">
                <img src={img} className="rounded-full w-28 " alt="profile picture" srcset="" />
            </div>

            <div className="mt-8 ">
                <h2 className="text-white font-bold text-lg tracking-wide">{profile.name}</h2>
            </div>
            <p className="text-emerald-400 font-semibold mt-2.5" >
                Active
            </p>
            <div className="mt-1 text-white text-sm">
                <span className="text-gray-400 font-semibold">Experience: </span>
                <span>{profile.experience} yrs</span>
            </div>

        </section>

    )
}

export default ProfileCard
