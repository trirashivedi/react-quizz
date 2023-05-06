import React from 'react'
import "./quiz.css";
import questions from "./QuizzData"


const Quizz = () => {
  return (
    <div className='app'>
        <div className='question-section'>
           <h5>Score:5</h5>
           <div className='question-count'>
            <span>Question 1 of 4</span>
           </div>
           <div className='question-text'>
             {questions[0].questionText} 
             
           </div>
        </div>
        <div className='answer-section'>
          <button>Answer</button>
          <div className='actions'>
            <button>Quit</button>
            <button>Next</button>
          </div>
        </div>
       
    </div>
  ) 
}

export default Quizz