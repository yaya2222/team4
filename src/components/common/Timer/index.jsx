// import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SpeedLimit from "../SpeedLimit";
import TimerButton from "../TimerButton/index";

// Creator : Team 4 - yaakov goldman

function Timer({ state, fullStop }) {
  const [timeMove, setTimeMove] = useState(true);
//   const [numberLPM, setNumberLPM] = useState(10);

// function changeLPM(plusOrMinus){
//   (plusOrMinus==="+")? setNumberLPM(numberLPM+2)
//   :setNumberLPM(numberLPM-2)
// }

  function changeMoveTime(){
    setTimeMove(!timeMove)
  }
  function printTime(time) {
    const minute = Math.floor(time / 60),
      numberSecond = time % 60;
    let second;
    if (numberSecond) {
      if (numberSecond < 10) second = "0" + numberSecond;
      else second = numberSecond;
    } else second = "00";
    return `${minute}:${second}`;
  }

  return (
    <div className={styles.main}>
      <TimerButton  state="+" />
      <div className={styles.watch}>
        <CountdownCircleTimer
          isPlaying={timeMove}
          duration={180}
          colors={"purple"}
          rotation={"counterclockwise"}
          strokeLinecap={"square"}
          size={220}
        >
          {({ remainingTime }) => {
            return (
              <div className={styles.insideTimer}>
                {state !== "+" && state !== "-" ? (
                  <h2>{printTime(remainingTime)}</h2>
                ) : (
                  <SpeedLimit numberLPM={10} />
                )}
                <TimerButton fullStop={fullStop} changeMoveTime={changeMoveTime} />
              </div>
            );
          }}
        </CountdownCircleTimer>
      </div>
      <TimerButton state="-"  />
    </div>
  );
}

export default Timer;
