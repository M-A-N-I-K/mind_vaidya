import useUserSuggestions from "../Hooks/useUserSuggestions";
import RecommendationCard from "../Utils/RecommendationCard"

const Dashboard = () => {
	const {parsedResult} = useUserSuggestions();
	const data = {
		message: "Remember, you're not alone in this. Take a break and recharge. When you're ready, come back and we'll work through it together!",
		food: "A comforting bowl of warm chicken soup",
		label: "anxiety",
		mood: {
		  Mood: "anxious",
		  Trigger: "unknown",
		  Focus: "none",
		},
		movie: "Eternal Sunshine of the Spotless Mind",
		todo: [
		  "Practice deep breathing exercises for 10 minutes",
		  "Write down your worries and fears in a journal",
		],
		music: {
		  song: "Don't Worry, Be Happy by Bobby McFerrin",
		  episode: "Episode #23",
		  Reason: "This upbeat and cheerful song will help uplift your spirits and remind you to stay positive",
		},
	  };
	return (
		<main className="pt-16 max-h-screen overflow-auto">
			<div className="px-6 py-8">
				<div className="max-w-6xl mx-auto">
					<div className="bg-white rounded-3xl p-8 mb-5">
						<h1 className="text-xl text-gray-500 text-center font-bold mb-10">
							{parsedResult?.message}
						</h1>


						<hr className="my-10" />

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
							<div>
								<h2 className="text-2xl font-bold mb-4">Stats</h2>

								<div className="grid grid-cols-2 gap-4">
									<div className="col-span-2">
										<RecommendationCard title={"Song Recommendation"} data={parsedResult?.music}/>
									</div>
									<div className="col-span-2">
										<div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
											<div className="font-bold text-lg leading-none">
												Food Recommendations
											</div>
											<div className="mt-2 text-sm">{parsedResult?.food}</div>
										</div>
									</div>
									
									<div className="col-span-2">
										<RecommendationCard title={"Movie Recommendation"} data={parsedResult?.movie}/>
									</div>
								</div>
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-4">
									Your tasks today
								</h2>

								<div className="space-y-4">
									{parsedResult?.todo?.map((item,key) =>{
										return(

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
