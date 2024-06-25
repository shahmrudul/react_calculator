import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [error,seterror]=useState(false)
  let [text, settext] = useState('')
  let b = ''
  const [evaluation, setEvaluation] = useState([])
  const [clearClicked, setClearClicked] = useState(false);
  const [display, setDisplay] = useState('')
  // useEffect(() => {

  // }, [evaluation,display])
  useEffect(() => {
    if (clearClicked) {
      setDisplay(''); // Clear the display state
      setEvaluation('')
      settext(''); // Clear the text state
      setClearClicked(false); // Reset clearClicked state
      
    }
  }, [clearClicked],error); // Run this effect whenever clearClicked changes
  const CalcEval = () => {

    evaluation.forEach((element) => {
      settext(text += element)

    }

    )
    console.log(text)

    try{
    const evaloutput=eval(text)
    
    
    
    setDisplay(evaloutput)
    }catch(e){
      if (e instanceof SyntaxError) {
        alert(e.message);
        
        
    }
    setDisplay('')
    setEvaluation('')
    settext('')
    }
    
    }
    



  
  const HandleButtonClick = (e) => {
   const buttontext=e.target.innerText
    setEvaluation(preevaluation => [...preevaluation, e.target.innerText])
    setDisplay(previoustext=>previoustext+buttontext)}






  
  return (
    <>
      <div className="calculator">
        

        <div className="display">
          {display}
        </div>

        <div className="buttons">
          <div className="button-row">
            <button onClick={HandleButtonClick}>7</button>
            <button onClick={HandleButtonClick}>8</button>
            <button onClick={HandleButtonClick}>9</button>
            <button onClick={HandleButtonClick}>/</button>
          </div>
          <div className="button-row">
            <button onClick={HandleButtonClick}>4</button>
            <button onClick={HandleButtonClick}>5</button>
            <button onClick={HandleButtonClick}>6</button>
            <button onClick={HandleButtonClick}>*</button>
          </div>
          <div className="button-row">
            <button onClick={HandleButtonClick}>1</button>
            <button onClick={HandleButtonClick}>2</button>
            <button onClick={HandleButtonClick}>3</button>
            <button onClick={HandleButtonClick}>-</button>
          </div>
          <div className="button-row">
            <button onClick={HandleButtonClick}>0</button>
            <button onClick={HandleButtonClick}>.</button>
            <button onClick={CalcEval}>=</button>
            <button onClick={HandleButtonClick}>+</button>
          </div>
          <div className="button-row">
            <button className="wide-button" onClick={() => {
              setEvaluation([])
              setDisplay('')
              settext('')
              setClearClicked(true)

            }}>Clear</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
