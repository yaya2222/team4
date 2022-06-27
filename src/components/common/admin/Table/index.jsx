import styles from './style.module.css'
import Tr from '../Tr'
 export default function Table(poros){
    return  <>
    <table className={styles.Table}>
<tr >
    <th  >Student Name</th>
    <th >Assessment (WPM)</th>
    <th >Reading (LPM)</th>
    <th >Focus (CM)</th>
</tr>
<tr>


    <Tr/>

</tr>
    </table>
    </>

    
 }