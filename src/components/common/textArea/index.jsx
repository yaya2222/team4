import styles from './style.module.css'

// Creator : Team 1 - Avi
function TextArea(props) { // ------------- yoda work -------------  textarea enter description 
    return <div className={styles.textAreaInputDiv}>
        <label className={styles.labelStyleTextArea}>{props.description || 'test'} </label>
        <textarea onChange={props.onChange} className={styles.textAreaInput} name={props.name}>
        </textarea>
    </div >
}


export default TextArea