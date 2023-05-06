import React, { useState } from 'react'
import "./quiz.css";
import questions from "./QuizzData";


const Quizz = () => {
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore] =useState(0);
  const[correctAns,setCorrectAns]=useState(0);
  const handleAnswerOption=(isCorrect)=>{
    if(isCorrect){
      setScore(score+5)
      setCorrectAns(correctAns+1)
    }
  }
  const handleNextOption =()=>{
    const nextQuestion = currentQuestion+1;
    setCurrentQuestion(nextQuestion);
  }
  return (
    <div className='app'>
        <div className='question-section'>
           <h5>Score:{score}</h5>
           <div className='question-count'>
            <span>Question {currentQuestion+1} of {questions.lenght}</span>
           </div>
           <div className='question-text'>
             {questions[currentQuestion].questionText} 
           </div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOption.map((ans,i)=>{
             return <button onClick={handleAnswerOption} key={i}>{ans.answwerText}</button>
          })}
          
          <div className='actions'>
            <button>Quit</button>
            <button onClick={handleNextOption}>Next</button>
          </div>
        </div>
    </div>
  ) 
}

export default Quizz