import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime(pre => pre + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-xl shadow-lg flex flex-col justify-center text-center items-center p-6">
        <p className="font-bold text-4xl sm:text-5xl">{format(time)}</p>
        <div className="flex flex-col sm:flex-row justify-center mt-8 w-full gap-4">
          <button
            className="py-2 px-6 bg-blue-400 rounded-md text-white font-semibold hover:bg-yellow-400 transition"
            onClick={() => setTime(0)}
          >
            Restart
          </button>
          <button
            className="py-2 px-6 bg-blue-400 rounded-md text-white font-semibold hover:bg-yellow-400 transition"
            onClick={() => {
              if (running) clearInterval(timer.current);
              setRunning(!running);
            }}
          >
            {running ? "Stop" : "Resume"}
          </button>
        </div>
      </div>
    </div>
  );
}

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};

export default App;
