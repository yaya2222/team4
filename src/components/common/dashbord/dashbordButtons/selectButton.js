import styles from './style.module.css'

function SelectButton(props) {

    return <>
        <label for="select time"></label>
        <select name="time" id="select time" onChange={props.onChange} className={styles.SelectButton}>
            <option value="0">LAST WEEK</option>
            <option value="1" >LAST MONTH</option>
            <option value="2" >LAST YEAR</option>
        </select>
    </>
}

export default SelectButton