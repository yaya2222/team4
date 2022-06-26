import styles from './style.module.css'

// Creator : Team A - Shahar
function TextArea(props) {
    return <div className={styles.textAreaInputDiv}>
        <label className={styles.labelStyleTextArea}>{props.description || 'test'} </label>
        <textarea className={styles.textAreaInput} >
        </textarea>
    </div >
}


export default TextArea