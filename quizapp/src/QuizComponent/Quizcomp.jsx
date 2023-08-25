import React from "react";
import { useState } from "react";
import '../App.css'

const Quizcomp = () => {
  var Questionbank = [
    {
      Question: "What is the mother currency in crypto?",
      AnswerText: [
        { Answer: "Bitcoin", isCorrect: true },
        { Answer: "Etherium", isCorrect: false },
        { Answer: "BNB", isCorrect: false },
        { Answer: "Matic", isCorrect: false },
      ],
    },
    {
      Question: "How much tax in cryto trading in India?",
      AnswerText: [
        { Answer: "30%", isCorrect: true },
        { Answer: "50%", isCorrect: false },
        { Answer: "10%", isCorrect: false },
        { Answer: "25%", isCorrect: false },
      ],
    },

    {
      Question: "What was the thing bought first time by bitcoin?",
      AnswerText: [
        { Answer: "Pizza", isCorrect: true },
        { Answer: "bike", isCorrect: false },
        { Answer: "car", isCorrect: false },
        { Answer: "cloths", isCorrect: false },
      ],
    },

    {
      Question: "What is the date when TDS was applicabled in India?",
      AnswerText: [
        { Answer: "1 July", isCorrect: true },
        { Answer: "1 April", isCorrect: false },
        { Answer: "1 March", isCorrect: false },
        { Answer: "1 June", isCorrect: false },
      ],
    },

    {
      Question: "Which is the famous metaverse coin among these?",
      AnswerText: [
        { Answer: "Sand", isCorrect: true },
        { Answer: "Gala", isCorrect: false },
        { Answer: "Naka", isCorrect: false },
        { Answer: "AGIX", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleResponse = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setcurrentQuestion(nextQuestion);
    } else 
    (
      setShowScore(true)
    )
  };

  const resetQuiz=()=>{
    setcurrentQuestion(0);
    setScore(0);
    setShowScore(false)


  }

  return (
    <div>
      <div>
        {showScore ? (
            <div>
          <h4 id="result">
            you have scored {score} out of {Questionbank.length}
          </h4>
          <div>
            <button  id="reset" type="submit" onClick={resetQuiz}> Play Again</button>
          </div>
          </div>
        ) : (
          <div className="quizApp">
            <div className="question---">
              <div className="question-num">
                {currentQuestion+1}/{Questionbank.length}
              </div>

              <div className="question-text">
                {Questionbank[currentQuestion].Question}
              </div>
            </div>
            <div className="answer">
              {Questionbank[currentQuestion].AnswerText.map((elem) => (
                <button onClick={() => handleResponse(elem.isCorrect)}> 
                  {elem.Answer}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizcomp;
