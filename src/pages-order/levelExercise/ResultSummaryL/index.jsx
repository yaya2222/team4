import styles from './style.module.css'
import img from "./Resuil vector.svg"
import DivCompicated from "../../../components/common/DivCompicated"
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link"
// Creator : Team 4 - amichai
function ResultSummaryL(){
    return <>
    <div style={{height:"40px"}}>header2</div>
    <div className={styles.all}>
    <div className={styles.img}></div>
    <DivCompicated>
        <div className={styles.mainDiv}>
        <div className={styles.icon}></div>
        <p>Confortable Reading Rate</p>
        <h3>12LPM</h3>
        </div>
    </DivCompicated>
    <div className={styles.but}>
        <div className={styles.divBut}>
    <Button_w140_w383_Link text="Go To Dashboard"/>
        </div>
    </div>
    </div>
    </>
}


export default ResultSummaryL