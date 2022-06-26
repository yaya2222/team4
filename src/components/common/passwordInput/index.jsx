import { useState } from 'react'
import styles from './style.module.css'
import { ImEye, ImEyeBlocked } from "react-icons/im";
// Creator : Team A - Shahar
function PassInput() {
    const [showPass, setShowPass] = useState(false)
    return <div className={styles.passInput}>
        <label className={styles.labelStyle}>password</label>
        <input name='inputPassword' type={showPass ? 'text' : 'password'} className={styles.inputArea} />
        <button className={styles.passBtn} onClick={() => setShowPass(!showPass)}>{showPass ? <ImEye /> : <ImEyeBlocked />}</button>
    </div>
}


export default PassInput