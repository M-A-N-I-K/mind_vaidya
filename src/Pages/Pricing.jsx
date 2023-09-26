import { useState } from "react";
import PricingCard from "../Utils/PricingCard";

function Pricing() {
    const [selectMonthly, setSelectMonthly] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-right bg-no-repeat bg-contain">
            <div className="Pricing-container p-8 sm:p-16">
                {/* Header */}
                <header>
                    <h1 className="text-center text-gray-50 text-2xl sm:text-3xl font-semibold">
                        Our Pricing Plan
                    </h1>
                    <div className="flex justify-center items-center mt-8">
                        <p className="text-gray-50">Annually</p>
                        <label className="price-switch relative inline-block ml-4 cursor-pointer">
                            <input
                                className="hidden"
                                onChange={() => {
                                    setSelectMonthly((prev) => !prev);
                                }}
                                type="checkbox"
                            />
                            <div className="switch-slider absolute top-0 left-0 w-14 h-7 bg-[#20354b] rounded-full transition-transform duration-300 ease-in-out transform translate-x-0">
                                <div className="before-slider absolute top-1/2 left-2 w-6 h-6 bg-gray-50 rounded-full transform -translate-y-1/2 transition-transform duration-300 ease-in-out"></div>
                            </div>
                        </label>
                        <p className="text-gray-50 ml-16">Monthly</p>
                    </div>
                </header>
                {/* Cards here */}
                <div className="mt-16 space-x-6  min-h-[30rem] flex justify-center items-center">
                    <PricingCard
                        title="Essential"
                        price={selectMonthly ? "20.99" : "188.9"}
                        storage="Voice Analysis + Assesment Analysis"
                        users="30"
                        sendUp="0"
                    />
                    <PricingCard
                        title="Deluxe"
                        price={selectMonthly ? "34.99" : "349.9"}
                        storage="Basic + Handwriting Analysis"
                        users="50"
                        sendUp="7"
                    />
                    <PricingCard
                        title="Premium"
                        price={selectMonthly ? "79.99" : "499.9"}
                        storage="Deluxe + Facial"
                        users="120"
                        sendUp="17"
                    />
                </div>
            </div>
        </div>
    );
}

export default Pricing;
