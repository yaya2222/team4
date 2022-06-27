import DivCompicated from '../DivCompicated'
import styles from './style.module.css'
// import vd from "./a.mov"
import { useEffect, useRef, useState } from 'react'

// Creator : Team 5 - Nati Shanker
function Movies(props) {
    const [isPlayed, setIsPlayed] = useState(false)
    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.src = props.video
    }, []);
    return <DivCompicated classAll={styles.all} classBack={styles.back} classInternal={styles.internal} isLeft={true}>

        <video onClick={() => { setIsPlayed(false); videoRef.current.pause() }} ref={videoRef} className={`${styles.video} ${styles.internal}`} controls={!isPlayed ? false : true} />
        {!isPlayed ? <button onClick={() => { setIsPlayed(!isPlayed); videoRef.current.play() }} className={styles.play}>Play</button> : ""}
    </DivCompicated>

}


export default Movies