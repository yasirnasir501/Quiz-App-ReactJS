import React, { useState } from 'react'
import { QuizData } from '../data/QuizData'
import { click } from '@testing-library/user-event/dist/click';
import QuizResult from './QuizResult';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectOption, setSelectOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if(currentQuestion<QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setSelectOption(0);
        } else{
            setShowResult(true)
        }
    }

const updateScore = () => {
    if(selectOption===QuizData[currentQuestion].answer){
        setScore(score+1);
    }
}

const resetAll = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setSelectOption(0);
    setScore(0);
}

  return (
    <div>
        <p className='heading-txt'>Quiz App</p>
        <div className='container'>
            {showResult ? (<QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>) : (
                <>
            <div className='question'>
                <span id='question-number'>{currentQuestion+1}.</span>
                <span id='question-txt'>{QuizData[currentQuestion].question}</span>
            </div>

            <div className='option-container'>
                {QuizData[currentQuestion].options.map((option,i) => {
                    return(
                        <button className={`option-btn ${selectOption === i+1?'checked':null}`} key={i} onClick={()=> setSelectOption(i+1)}>{option}</button>
                    )
                })}
            </div>

                <input type="button" value='Next' id='next-button' onClick={changeQuestion}/>
                </>
            )}
        </div>
    </div>
  )
}

export default Quiz