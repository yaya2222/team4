import { useState } from "react";
import Progressbar from "../../../components/common/Progressbar";
import Timer from "../../../components/common/Timer";
import TimerWithAll from "../../../components/common/TimerWithAll";
import styles from "./style.module.css";

// Creator : Team 4 - yaakov goldman
function Pushup1B() {

  return (
    <>
    <TimerWithAll clockTime={true} href={"/a"} />
    </>
  );
}

export default Pushup1B;
