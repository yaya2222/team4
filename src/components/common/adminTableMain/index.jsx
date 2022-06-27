import styles from './style.module.css'
import AdminTableRow from '../tableRow'
// Creator : Team A - Shahar
const arr = [{ a: 'class a', b: '#123453', c: '6' }, { a: 'class a', b: '#123453', c: '6' }, { a: 'class a', b: '#123453', c: '6' }, { a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b', c: 'c' }]
function AdminTable(props) {
    let cnt =0
    return <>
        <div className={styles.allFlexItem}>

            <div className={styles.mainDiv}>
                <div className={styles.prpDiv}>
                    <span className={styles.allFlexItem}>class name</span>
                    <span className={styles.allFlexItem}>Classroom ID</span>
                    <span className={styles.allFlexItem}>Students</span>
                    <span className={styles.allFlexItem}>Action</span>
                </div>
            </div>
            {arr.map(v => < AdminTableRow className={v.a} key={cnt++} classRoomId={v.b} studentNum={v.c} />)}
        </div>

    </>
}


export default AdminTable