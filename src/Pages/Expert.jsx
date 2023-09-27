import ProfileCard from "../Utils/ProfileCard";


const profileData = [
    {
        id: 1,
        name: 'Dr. Manish Sarkar',
        experience: '21',
        contact: 'CR Park,Delhi  EHSAAS',
        Fees: '₹2000',
        imageSrc: '/dr-manish-sarkar-psychiatrist-delhi-2cd483e6-e14a-4148-8bbf-a2fad49be69a.jpg',
    },
    {
        id: 2,
        name: 'Dr. Manish Jain',
        experience: '20',
        contact: 'Pusa Road,Delhi  BLK-Max Super Speciality',
        Fees: '₹1800',
        imageSrc: '/dr-manish-jain-psychiatrist-delhi-48762b8f-6d21-4699-94b4-47d130ee396a.jpg',
    },
    {
        id: 3,
        name: 'Dr. Sugandha Gupta',
        experience: '18',
        contact: 'Karol Bagh,Delhi  Delhi Mind Clinic',
        Fees: '₹1200',
        imageSrc: '/dr-sugandha-gupta-psychiatrist-delhi-c5c16569-197f-487e-9642-74479b0a4bcc.jpg',
    },
    {
        id: 4,
        name: 'Dr. Anuneet Sabharwal',
        experience: '12',
        contact: 'Vivek Vihar,Delhi  The HExperty Tree - De-addiction And Mental Health Hospital',
        Fees: '₹1000',
        imageSrc: '/dr-anuneet-sabharwal-psychiatrist-delhi-ed8dfffa-b3bf-40f2-84cd-31cffccfdbc6 (1).jpg',
    },
    {
        id: 5,
        name: 'Dr. Monica Chib',
        experience: '46',
        contact: 'Sarita Vihar,Delhi  Indraprastha Apollo Hospitals',
        Fees: '₹2500',
        imageSrc: '/dr-monica-chib-psychiatrist-delhi-695318d0-81b8-4dc1-b124-f4296719d1f4.jpg',
    },
    {
        id: 6,
        name: 'Dr. Amit Garg',
        experience: '17',
        contact: 'Rohini Sector 9,Delhi  Felicity Mind Care Clinic',
        Fees: '₹1500',
        imageSrc: '/dr-amit-garg-psychiatrist-delhi-c1256e0e-9a55-431a-b715-f534375de336.jpg',
    },
];

function Expert() {
    return (

        <section style={{ "font-family": "Montserrat" }} className="bg-gradient-to-r from-gray-900 via-black to-gray-900  grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-medium py-12 h-screen overflow-y-scroll">
            {profileData?.map((profile) => {
                return (
                    <ProfileCard profile={profile} key={profile.id} />
                );
            })}
        </section>

    );
}

export default Expert;
