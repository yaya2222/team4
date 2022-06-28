import styles from './style.module.css'
import DivCompicated from '../../../components/common/DivCompicated'
import Button_w140_w383_Link from'../../../components/common/Button w140-OR-w383 Link'
// Creator : Team A - Shahar
function Rate() {
    return <>
        <DivCompicated classAll={styles.bigDiv} classInternal={styles.div} isLeft>
            <p>How was that reading rate?</p>
            <div className={styles.divAll}>
                <div className={styles.btn}>
                    <Button_w140_w383_Link text="just Right"/>
                </div>
                <div className={styles.btn}>
                    <Button_w140_w383_Link white={true} text="Too Fast" />
                </div>
                <div className={styles.btn}>
                    <Button_w140_w383_Link white={true} text="Too Slow" />
                </div>
            </div>
        </DivCompicated>
    </>
}
export default Rate