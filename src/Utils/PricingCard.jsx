import React from "react";

const PricingCard = ({ title, price, storage, users, sendUp }) => {
    return (
        <div className="bg-[#20354b] mt-12 md:mt-0 p-8 rounded-lg text-center text-gray-50 bg-neutral-white w-full md:w-[30rem]">
            <header>
                <p className="text-2xl font-semibold card-title">{title}</p>
                <h1 className="text-4xl md:text-5xl font-bold card-price">{price}</h1>
            </header>
            {/* features here */}
            <div className="card-features mt-4">
                <div className="pb-4 border-b border-neutral-light-grayish-blue card-storage">
                    {storage}
                </div>
                <div className="pb-4 border-b border-neutral-light-grayish-blue card-users-allowed">
                    {users} Days Access
                </div>
                <div className="mb-8 card-send-up">{sendUp} Specialized Reports</div>
            </div>
        </div>
    );
};

export default PricingCard;
