import { useEffect, useState } from "react"
import useUserSuggestions from "../Hooks/useUserSuggestions"
import { storeData } from "../Config/userSuggestions"
import { useNavigate } from "react-router-dom";
import Loader from "../Utils/Loader"
import getUser from "../Hooks/getUser";

const InputComponent = () => {
    const [userInput, setUserInput] = useState("");
    const [user] = getUser();
    const [loading, setLoading] = useState(false);
    const { parsedResult, setParsedResult } = useUserSuggestions();
    const navigate = useNavigate();

    const prompt = `You are the world's most renowned, creative, and witty mental health expert, known for your work in the field of Behavioral Psychology, childhood trauma, CBT, depression, and anxiety. 
    Here is a journal entry: <user entry>.
    
    From this entry alone, use your expertise to identify the following things in 2-4 words. Use the entry to ALWAYS identify and provide an answer for each point even when the field is unknown or there is not enough data to determine. Be clear, precise, and witty.
    - Mood
    - Trigger
    - Focus
    - Personality
    - Mental profile
    - Environment
    - Habit
    
    Based on the Journal entry you have to do following things : 
    
    Generate a funny, unique, creative, hyper-personalized, and friendly "See you again" message (20-30 words), after a line break, that'd make them want to come back to you!
    
    As an expert in CBT, IPT, and DBT with 20 years of experience, convert user input into a concise goal and a 7-point activities as todo for user
    
    As a music maestro, your mission is to select a song fitting the user's mood 
    Give the output in the following format and put it in JSON format given below:
    <song name and episode>
    Reason: <brief explanation and justification why you chose this song>
    
    As a film aficionado, your task is to recommend a distinctive movie tailored to the Indian user's tastes and moods,
    Address as a second person.
    
    As the world's most famous culinary whiz, your mission is to recommend a unique recipe matching the Indian user's mood from
    Address as the second person
    
    
    Give the output strictly in JSON format in the following format of the all the things written above:
    {
        message: <message generated above>
        food: <food suggestions generated above>
        label: <label the users condition using the description given above>
        mood: <mood, trigger, Focus , Personality ,Mental profile ,Environment ,Habit  journal entry keep its as object and store in mood here>
        movie: <movie suggestions as described above>
        todo: <todo suggestions as an array with points>
        music <music suggestions as descirbed above>
    }`

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
            setLoading(true);
            const response = await fetch("https://api.openai.com/v1/chat/completions", options);
            const data = await response.json();
            console.log("Choices", data?.choices);
            console.log("Message", data?.choices[0]?.message);
            console.log("Content", data?.choices[0]?.message?.content);
            console.log("Reuslt", data?.choices[0]?.message?.content);
            if (data?.choices[0]?.message?.content) {
                const parsedData = JSON.parse(data?.choices[0]?.message?.content);
                setParsedResult(parsedData);
                storeData(parsedData, user.email);
                setLoading(false);
                navigate("/dashboard")
            }
            setUserInput("");
        }
        else {
            alert("Input can't be empty!");
        }
    }

    useEffect(() => {
        console.log("Parsed Data", parsedResult);
    }, [parsedResult])

    return (
        <>
            {loading ? <Loader />
                :
                <div className='w-[100vw] flex flex-col justify-between items-center'>
                    <div className='w-11/12 lg:w-3/4 h-[40vh]'>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                            <div className="flex items-center justify-center px-3 py-2 border-b ">
                                <button type="button" className="p-2 mx-4 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                    <svg className="w-6 h-6" fill="currentColor" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 478 478" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="XMLID_708_"> <path id="XMLID_2131_" d="M394,196.1c0-11.9-9.7-21.6-21.6-21.6s-21.6,9.7-21.6,21.6c0,61.7-50.2,111.8-111.8,111.8 s-111.8-50.2-111.8-111.8c0-11.9-9.7-21.6-21.6-21.6S84,184.2,84,196.1c0,78.2,58.1,143,133.4,153.5v85.2h-55.6 c-11.9,0-21.6,9.7-21.6,21.6s9.7,21.6,21.6,21.6h154.5c11.9,0,21.6-9.7,21.6-21.6s-9.7-21.6-21.6-21.6h-55.6v-85.2 C335.9,339.1,394,274.2,394,196.1z"></path> <g id="XMLID_2124_"> <path id="XMLID_2050_" d="M239,0L239,0c-46.4,0-84,37.6-84,84v110.7c0,46.4,37.6,84,84,84l0,0c46.4,0,84-37.6,84-84V84 C323,37.6,285.4,0,239,0z M239.1,55.9c-15.1,0-27.4,12.3-27.4,27.4c0,6.9-5.6,12.5-12.5,12.5s-12.5-5.6-12.5-12.5 c0-28.9,23.5-52.4,52.4-52.4c6.9,0,12.5,5.6,12.5,12.5S246,55.9,239.1,55.9z"></path> </g> </g> </g> </g></svg>
                                    <span className="sr-only">Microphone</span>
                                </button>
                                <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 ">
                                    <svg className="w-6 h-6" fill="currentColor" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 487 487" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRep_iconCarrier"> <g> <g> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path> </g> </g> </g></svg>
                                </button>
                            </div>
                            <div className="px-4 py-2 bg-white rounded-b-lg">
                                <label htmlFor="editor" className="sr-only">Publish post</label>
                                <textarea onChange={(e) => setUserInput(e.target.value)} id="editor" rows="12" className="block w-full px-0 text-sm text-gray-800 bg-white border-0 outline-none" placeholder="Write Your thoughts..." required></textarea>
                            </div>
                        </div>
                        <button type="button" onClick={getQuery} className="inline-flex  w-full justify-center items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Generate Solution
                        </button>
                    </div>

                </div>

            }
        </>
    )
}

export default InputComponent
