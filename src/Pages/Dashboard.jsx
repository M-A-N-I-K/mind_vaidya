import { useEffect } from "react";
import useUserData from "../Hooks/getUserData";
import RecommendationCard from "../Utils/RecommendationCard"


const Dashboard = () => {
	const { recentDoc } = useUserData();

	useEffect(() => {
		console.log(recentDoc);
	}, [recentDoc])
	return (
		<main className="pt-16 max-h-screen overflow-auto">
			<div className="px-6 py-8">
				<div className="max-w-6xl mx-auto">
					<div className="bg-white rounded-3xl p-8 mb-5">
						<h1 className="text-xl text-gray-500 text-center font-bold mb-10">
							{recentDoc?.data?.message}
						</h1>


						<hr className="my-10" />

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
							<div>
								<h2 className="text-2xl font-bold mb-4">Stats</h2>

								<div className="grid grid-cols-2 gap-4">
									<div className="col-span-2">
										<RecommendationCard title={"Song Recommendation"} data={recentDoc?.data?.music} />
									</div>
									<div className="col-span-2">
										<div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
											<div className="font-bold text-lg leading-none">
												Food Recommendations
											</div>
											<div className="mt-2 text-sm">{recentDoc?.data?.food}</div>
										</div>
									</div>

									<div className="col-span-2">
										<RecommendationCard title={"Movie Recommendation"} data={recentDoc?.data?.movie} />
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

											<div key={key} className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
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
