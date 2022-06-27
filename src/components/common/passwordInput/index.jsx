import { useState } from 'react'
import styles from './style.module.css'
import { ImEye, ImEyeBlocked } from "react-icons/im";
<<<<<<< HEAD
// Creator : Team A - Shahar
function PassInput() {
    const [showPass, setShowPass] = useState(false)
    return <div className={styles.passInput}>
        <label className={styles.labelStyle}>password</label>
        <input name='inputPassword' type={showPass ? 'text' : 'password'} className={styles.inputArea} />
=======
// Creator : Team 1 - Avi
function PassInput(props) { // ------------- yoda work -------------  eye function visable true/fales, end input type password 
    const [showPass, setShowPass] = useState(false)
    return <div className={styles.passInput}>
        <label className={styles.labelStyle}>{props.description}</label>
        <input name={props.name} type={showPass ? 'text' : 'password'} className={styles.inputArea}  onChange={props.onChange} />
>>>>>>> c560cedc08aa2041306550a4e0dc7a2967b38b94
        <button className={styles.passBtn} onClick={() => setShowPass(!showPass)}>{showPass ? <ImEye /> : <ImEyeBlocked />}</button>
    </div>
}


export default PassInput