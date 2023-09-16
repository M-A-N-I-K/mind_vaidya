import { useEffect, useState } from "react"

const InputComponent = () => {
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");
    const [moodCard, setMoodCard] = useState([]);
    const prompt = `You are the world's most renowned, creative and witty mental health expert, known for your work in the field of Behavioral Psychology, childhood trauma, CBT, depression and anxiety. Here is a journal entry:  <user entry>.
    From this entry alone, use your expertise to identify the following things in 2-4 words. Use the entry to ALWAYS identify and provide an answer for each point even when the field is unknown or there is not enough data to determine. Be clear, precise and witty.
        Mood
        Trigger
        Focus
        Personality
        Mental profile
        Environment
        Habit
    Generate a funny, unique, creative, hyper-personalised and friendly See you again message (20-30 words), after a line break, that'd make them want to come back to you!
    Remember, keep length of Mood, Trigger, Focus of maximum 2 words only! They should not exceed 2 words. Keep the output format strictly as mentioned above!`

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: `${prompt}` }, { role: "user", content: `${userInput}` }]
        })
    }

    const getQuery = async () => {
        if (userInput !== "") {
            const response = await fetch("https://api.openai.com/v1/chat/completions", options);
            const data = await response.json();
            console.log("Choices", data?.choices);
            console.log("Message", data?.choices[0]?.message);
            setMoodCard(data?.choices[0]?.message?.content.split(/\n/));
            console.log("Content", data?.choices[0]?.message?.content);
            setResult(data?.choices[0]?.message?.content);
            setUserInput("");
        }
        else {
            alert("Input can't be empty!");
        }
    }

    useEffect(() => {
        console.log(result);
        console.log(moodCard);
    }, [result])

    return (
        <div className='w-[100vw] h-[100vh] py-4 overflow-y-scroll flex flex-col justify-between items-center'>
            <div className='w-3/4 h-[40vh]'>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center justify-center px-3 py-2 border-b dark:border-gray-600">
                        <button type="button" className="p-2 mx-4 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 478 478" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="XMLID_708_"> <path id="XMLID_2131_" d="M394,196.1c0-11.9-9.7-21.6-21.6-21.6s-21.6,9.7-21.6,21.6c0,61.7-50.2,111.8-111.8,111.8 s-111.8-50.2-111.8-111.8c0-11.9-9.7-21.6-21.6-21.6S84,184.2,84,196.1c0,78.2,58.1,143,133.4,153.5v85.2h-55.6 c-11.9,0-21.6,9.7-21.6,21.6s9.7,21.6,21.6,21.6h154.5c11.9,0,21.6-9.7,21.6-21.6s-9.7-21.6-21.6-21.6h-55.6v-85.2 C335.9,339.1,394,274.2,394,196.1z"></path> <g id="XMLID_2124_"> <path id="XMLID_2050_" d="M239,0L239,0c-46.4,0-84,37.6-84,84v110.7c0,46.4,37.6,84,84,84l0,0c46.4,0,84-37.6,84-84V84 C323,37.6,285.4,0,239,0z M239.1,55.9c-15.1,0-27.4,12.3-27.4,27.4c0,6.9-5.6,12.5-12.5,12.5s-12.5-5.6-12.5-12.5 c0-28.9,23.5-52.4,52.4-52.4c6.9,0,12.5,5.6,12.5,12.5S246,55.9,239.1,55.9z"></path> </g> </g> </g> </g></svg>
                            <span className="sr-only">Microphone</span>
                        </button>
                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 487 487" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRep_iconCarrier"> <g> <g> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path> </g> </g> </g></svg>
                        </button>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                        <label htmlFor="editor" className="sr-only">Publish post</label>
                        <textarea onChange={(e) => setUserInput(e.target.value)} id="editor" rows="12" className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write Your thoughts..." required></textarea>
                    </div>
                </div>
                <button type="button" onClick={getQuery} className="inline-flex  w-full justify-center items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Generate Solution
                </button>
            </div>
            {
                moodCard &&
                <div className="flex justify-center py-4 overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    <div className="flex flex-col justify-start bg-white px-6 py-4">
                        <h4 className="mb-3 text-start text-xl font-semibold tracking-tight text-white">Mood Card</h4>

                        {
                            moodCard?.map((mood, key) => {
                                return (
                                    <p key={key} className="leading-normal text-gray-100">{mood}</p>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>

    )
}

export default InputComponent
