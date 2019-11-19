import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}






ReactDOM.render(
  <App />, 
  document.getElementById('root')
)






//-----------------ejemplo botones set echo por mi-------------------//

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )




// const App = (props) => {
//   const [value, setValue] = useState(10)

//   const setToCero =() =>{
//     setValue(0)
//   }

//   const setToTen =() =>{
//     setValue(10)
//   }
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

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )



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


