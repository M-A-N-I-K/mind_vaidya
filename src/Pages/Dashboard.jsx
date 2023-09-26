import useUserData from "../Hooks/getUserData";
import RecommendationCard from "../Utils/RecommendationCard"


const Dashboard = () => {
	const { recentDoc } = useUserData();

	return (
		<main className="pt-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 max-h-screen overflow-auto">
			<div className="px-6 py-8">
				<div className="max-w-6xl mx-auto">
					<div className="bg-gray-700 rounded-3xl p-8 mb-5">
						<h1 className="animate-fade-down animate-duration-1000 animate-delay-100 text-xl text-gray-50 text-center font-bold mb-10">
							{recentDoc?.data?.message}
						</h1>


						<hr className="my-10" />

						<div className="grid grid-cols-1 text-gray-50 lg:grid-cols-2 gap-x-12">
							<div>
								<h2 className="text-2xl font-bold mb-4">Recommendations</h2>

								<div className="grid grid-cols-2 gap-4">
									<div className="animate-fade-right animate-duration-1000 animate-delay-100 col-span-2">
										<RecommendationCard title={"Song Recommendation"} data={recentDoc?.data?.music} />
									</div>

									<div className="animate-fade-right animate-duration-1000 animate-delay-100 col-span-2">
										<RecommendationCard title={"Movie Recommendation"} data={recentDoc?.data?.movie} />
									</div>
									<div className="animate-fade-right animate-duration-1000 animate-delay-100  col-span-2">
										<div className="p-4 bg-indigo-100 rounded-xl text-gray-800">
											<div className="font-bold text-lg leading-none">
												Food Recommendations
											</div>
											<div className="mt-2 text-sm">{recentDoc?.data?.food}</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-4">
									Your tasks today
								</h2>

								<div className="space-y-4">
									{recentDoc?.data?.todo?.map((item, key) => {
										return (

											<div key={key} className="animate-fade-left animate-duration-1000 animate-delay-100 p-4 bg-indigo-100 border rounded-xl text-gray-800 space-y-2">
												<p

													className="font-bold hover:text-yellow-800 hover:underline"
												>
													{item}
												</p>

											</div>
										);
									})}


								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Dashboard;
