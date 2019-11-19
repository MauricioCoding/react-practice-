import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) =>{
<div>{this.props.text}{this.props.value}</div>
} 


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue =>{
    setGood(newValue)
  }

  const setToNeutral = newValue =>{
    setNeutral(newValue)
  }

  const setToBad = newValue =>{
    setBad(newValue)
  }




  return (
    <div>
      code here
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = props => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

// valor por defecto de value

//----------------------MANEJO DE STATEMENTS--------------//
// const App = (props) => {
//   const [value, setValue] = useState(10)
  
//   const setToValue = (newValue) =>{
//     setValue(newValue)
//   }
  
//   return (
//     <div>
//       {value}
//       <button onClick={() => setToVReactDOM.render(
//         thousand
//         </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//         </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment</button>
//     </div>
//   )
// }

// const App = (props) => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }





//---------------COMPLEX STATE----------------//

// const App = () => {
//   const [value] = useState()

//   const Hello = (who) => () => {
//     console.log('hello', who)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={Hello('world')}>button</button>
//       <button onClick={Hello('react')}>button</button>
//       <button onClick={Hello('function')}>button</button>
//     </div>
//   )
// }





// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
//   )

// const Statistics = (props) => {

//   return(
//     <>
//       <div>
//         <h2>Statistics</h2>
//   <p>All {props.allClicks}</p>
//       </div>
//     </>
//   )}


// const App = (props) =>{
//   //save the clicks
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [allClicks, setAll] = useState(0)

//     const handleGood = () =>{
//       setAll(allClicks + 1)
//       setGood(good + 1)
//     }

//     const handleNeutral = () => {
//       setAll(allClicks + 1)
//       setNeutral(neutral + 1)
//     }

//     const handleBad = () =>{
//       setAll(allClicks + 1)
//       setBad(bad + 1)
//     }





//   return(
//     <div>
//      <h2>give feedback</h2>
//      <Button onClick = {handleGood} text='Good'></Button>
//      <Button onClick = {handleNeutral} text = 'Neutral'></Button>
//      <Button onClick = {handleBad} text='Bad'></Button>
//      <Statistics ></Statistics>
//     </div>
//   )

// }







// const App = (props) => {
//   const [value] = useState()

//   const hello = (who) => {
//     const handl// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>er = () => {
//       console.log('hello', who)
//     }
//     return handler
//   }

//   return (
//     <div>
//        llClick{hello('world')}>world</button>
//       <button onC// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }lick={hello('function')}>function</button>
//     </div>
//   )
// }


//-----------------ejemplo botones set echo por mi-------------------//

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>


//   const setToCero =() =>{
//     setValue(0)
//   }
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
//   return (
//     <div>
//       {value}
//       <Button onClick={setToCero} text='Turn to 0' />
//       <Button onClick={setToTen} text='Turn to 10'/>
//     </div>
//   )
// }


//--------------------Ejemplo complex State con clicks--------------------------//

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}


// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }
//   return (
//     <div>
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text = 'left' />
//         <Button onClick={handleRightClick} text = 'rigth'/>
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }

  //---------EJEMPLO CONTADOR DE CLICKS---------//

  // const App = (props) => {
  //   const [clicks, setClicks] = useState({
  //     left: 0, right: 0
  //   })
  
  //   const handleLeftClick = () =>
  //   setClicks({ ...clicks, left: clicks.left + 1 })
      
  //   const handleRightClick = () =>
  //   setClicks({ ...clicks, right: clicks.right + 1 })

  //     const handleMidleClick = () =>{
  //      setClicks({...clicks, right: clicks.right = 0, left:clicks.left = 0})
  //     }
  
  //   return (
  //     <div>
  //       <div>
  //         {clicks.left}
  //         <button onClick={handleLeftClick}>left</button>
  //         <button onClick={handleMidleClick}>Reset</button>
  //         <button onClick={handleRightClick}>right</button>
  //         {clicks.right}
  //       </div>
  //     </div>
  //   )
  // }





