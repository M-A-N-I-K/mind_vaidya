import { useState } from "react";
import { resultInitalState } from "../Config/Constants";
import Confetti from "react-confetti";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitalState);
    const [showResult, setShowResult] = useState(false);

    const { question, choices, correctAnswer } = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onClickNext = () => {
        setAnswerIdx(null);
        setResult((prev) =>
            answer
                ? {
                    ...prev,
                    score: prev.score + 1,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
    };

    const onTryAgain = () => {
        setResult(resultInitalState);
        setShowResult(false);
    };

    return (
        <div className="w-[100vw] h-[100vh] bg-white flex items-center justify-center">

            <div className="bg-white p-5 md:p-8 max-h-[500px] max-w-[500px] space-y-8 shadow rounded-lg h-[11/12] w-11/12 ">
                {!showResult ? (
                    <>
                        <p className="text-left text-xl pb-2 text-blue-600">
                            Question :{" "}
                            <span className="text-xl font-bold">
                                {currentQuestion + 1}
                                <span className="text-sm font-normal">/{questions.length}</span>
                            </span>
                        </p>

                        <h2 className="text-2xl font-semibold">{question}</h2>
                        <ul>
                            {choices.map((choice, index) => (
                                <li
                                    onClick={() => onAnswerClick(choice, index)}
                                    key={choice}
                                    className={`${answerIdx === index ? "bg-blue-500 text-white  hover:bg-blue-400" : "border-[1px] border-black bg-white text-black"} my-2  cursor-pointer p-2 w-4/5 rounded-lg mx-auto`}
                                >
                                    {choice}
                                </li>
                            ))}
                        </ul>
                        <div className="flex w-full items-center justify-center">
                            <button className="py-2 px-4 text-medium flex rounded-lg text-white bg-blue-600 hover:bg-blue-400" onClick={onClickNext} disabled={answerIdx === null}>
                                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">
                        {result.score < 7 && <Confetti />}
                        <div className=" text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12">
                            <h4 className="text-3xl pb-3 text-center font-bold">
                                Your score is{" "}
                                <span className={result.score < 7 ? "text-green-600" : "text-red-600"}>
                                    {result.score}
                                </span>
                            </h4>
                            <p className="py-2">
                                Total Questions: <span>{questions.length}</span>
                            </p>
                            {(result.score < 7) && <p className="py-2 font-medium">Congrats!!! You dont need any psychatrist</p>}
                            {(result.score > 7 && result.score < 15) && <p className="py-2 font-medium"> You deserve more happiness in your life. Have some good company.</p>}
                            {(result.score > 15) && <p className="py-2 font-medium"> You must seek some expert to help you out.</p>}
                            <button
                                className="bg-blue-600 py-2 px-7 rounded-xl text-white mt-2 hover:bg-blue-500"
                                onClick={onTryAgain}
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;