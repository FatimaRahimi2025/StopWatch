// import { useEffect, useRef, useState } from "react";

import { useEffect, useRef, useState } from "react";

// function App() {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(ture)

//   const timer = useRef()

//   useEffect(() => {
//     if(running) {
//       timer.current = setInterval(() => {
//         setTime(pre => pre + 1)
//       }, 1000 )
//     }
//     return () => clearInterval(timer.current)

//   }, [running])
//   return(
    
//       <div className="w-[400px] h-[250px] bg-white rounded-lg flex justify-between items-center">
//       <p>{format(time)}</p>
//       <div>
//         <button onClick={() => setTime(0)}>Restart</button>
//         <button onClick={() => {
//           if (running) clearInterval(timer.current)
//             setRunning(!running)
//         }}>{running ? 'Stop': "Resume"}</button>
//       </div>
    
//     </div>

//   ) 
//   const format = (time) => {
//   let hours = Math.floor(time / 60 / 60 % 24)
//   let minutes = Math.floor(time / 60 % 60)
//   let secounds = Math.floor(time % 60 )

//   hours = hours < 10 ? '0' + hours: hours
//   minutes = minutes < 10 ? '0' + minutes: minutes
//   secounds = secounds < 10 ? '0' + secounds: secounds

//   return hours + ":" + minutes + ":" + secounds
// }

// }


// export default App;


function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const timer = useRef()

  useEffect(() => {
    if(running)
      timer.current = setInterval(() => {
    setTime(pre => pre + 1)
    }, 1000)
       return () => clearInterval(timer.current)
  }, [running])

return(
  <div className="w-[100%] h-[100vh] flex justify-center items-center p-4">
     <div className="w-full max-w-md sm:max-w-lg md:max-w-xl  bg-white rounded-xl shadow-lg flex  flex-col justify-center text-center items-center p-6">
    <p className="font-bold text-4xl sm:text-5xl ">{format(time)}</p>
    <div className="flex flex-col sm:flex-row justify-center mt-8 w-full gap-4">
      <button className="py-2 px-6 bg-blue-400 rounded-md text-white font-semibold mr-5 hover:bg-yellow-400 transition" onClick={() => setTime(0)}>Restart</button>
      <button className="py-2 px-6 bg-blue-400 rounded-md text-white font-semibold ml-5 hover:bg-yellow-400 transition" onClick={() => {
        if(running) clearInterval(timer.current)
          setRunning(!running)
      }}>{running ? "Stop" : "Resume"}</button>
    </div>
  </div>
  </div>
  
)
}

const format = (time) => {
  let hours = Math.floor(time / 60 / 60 % 24)
  let minutes = Math.floor(time / 60 % 60)
  let secounds = Math.floor(time  % 60)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  secounds = secounds < 10 ? '0' + secounds :secounds

  return hours + ":" + minutes  + ":" + secounds
}
export default App;