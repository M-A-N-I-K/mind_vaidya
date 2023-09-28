const RecommendationCard = ({ title, data }) => {

    return (
        <div className="delay-5 flex justify-between duration-100 bg-indigo-100 p-5 rounded-lg">
            <img src="https://picsum.photos/250/250" className="w-32 rounded shadow" />

            <div className="p-4 bg-indigo-10 w-3/4 rounded-xl">
                <div className="font-bold text-xl text-gray-800 leading-none">
                    {title}
                </div>
                <span className="mt-6 text-gray-700 font-normal text-sm">{data?.song ? data?.song : data?.name ? data?.name : data}</span>
                {
                    data?.reason &&
                    <div className="mt-6 text-gray-700  font-normal text-sm">
                        <span className="font-bold">Reason :</span>
                        {data?.reason}
                    </div>
                }
                <div className="mt-5">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-gray-600 text-gray-50 hover:text-gray-200 text-sm font-semibold transition"
                    >
                        Start Playing
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard
