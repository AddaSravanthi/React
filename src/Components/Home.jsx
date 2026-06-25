// // function Home(props){
// //     return(
// //         <>
// //             <h2> She is {props.name}</h2>
// //         </>

import { useState } from "react";

        
// //     )
// // }
// function Home({name="sravs", age="22"}){
//     return(
//         <>
//             <h2> She is {name} and she is{age}</h2>
//         </>
        
//     )
// }
// export default Home
// import React from 'react'

// export default function Home() {
//   return (
//     <>
//     <h1>welcome to home component</h1>
//     </>
//   )
// }
export default function Home(){
  const [count,setCount]=useState(0)
  const incCount=()=>{
    setCount((prev) => prev+1);
    setCount((prev) => prev+1);
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={incCount}>+</button>
    </>
  )
}
