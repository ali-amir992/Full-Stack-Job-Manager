import React, { useState, useEffect } from 'react';
import data from './../data/quizData.json'; // Import your JSON data file

const Quiz: React.FC = () => {
    const { title, description, questions } = data.quiz;
    const [responses, setResponses] = useState<number[]>(Array(questions.length).fill(-1));
    const [timeLeft, setTimeLeft] = useState(600); // Example: 10 minutes

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleOptionChange = (questionId: number, optionIndex: number) => {
        const updatedResponses = [...responses];
        updatedResponses[questionId] = optionIndex;
        setResponses(updatedResponses);
    };

    return (
        <div className="min-h-screen bg-richblack-900 text-secondary p-4">
            
            <div className="max-w-6xl mx-auto bg-richblack-900 p-6 rounded-md">
                {/* Quiz Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-primary">{title}</h1>
                    <div className="text-lg font-semibold bg-gray-800 text-secondary px-2 md:px-4 py-2 rounded-md">
                        Time Left: {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Quiz Description */}
                <p className="mt-4 text-lg text-secondary">{description}</p>

                {/* Quiz Questions */}
                <div className="mt-6 space-y-8">
                    {questions.map((question, index) => (
                        <div key={question.id} className="p-4 rounded-md">
                            <h2 className="text-lg font-semibold text-secondary">
                                {index + 1}. {question.question}
                            </h2>
                            <div className="mt-4 space-y-2">
                                {question.options.map((option, optionIndex) => (
                                    <label
                                        key={optionIndex}
                                        className="flex items-center space-x-3 text-secondary cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={optionIndex}
                                            checked={responses[index] === optionIndex}
                                            onChange={() => handleOptionChange(index, optionIndex)}
                                           className="form-radio w-4 h-4 text-[#1ecdf8] focus:ring-[#1ecdf8]"
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-right">
                    <button
                        className="bg-primary text-secondary px-8 py-2  font-semibold hover:bg-secondary"
                        onClick={() => console.log(responses)}
                    >
                        Submit Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
