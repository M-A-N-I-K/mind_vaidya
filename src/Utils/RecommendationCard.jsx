const RecommendationCard = ({title,data}) => {
  return (
    <div className="delay-5 flex justify-between duration-100 bg-green-100 p-5 rounded-lg">
        <img src="https://picsum.photos/250/250" className="w-32 rounded shadow" />
        
        <div className="p-4 bg-green-100 rounded-xl">
            <div className="font-bold text-xl text-gray-800 leading-none">
                {title}
            </div>
                <span className="mt-6 font-normal text-sm">{data?.song ? data?.song : data}</span>
            <div className="mt-5">
                <button
                    type="button"
                    className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                >
                    Start Playing
                </button>
            </div>
        </div>
    </div>
  )
}

export default RecommendationCard
