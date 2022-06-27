import styles from './style.module.css'

<<<<<<< HEAD
// Creator : Team A - Shahar
function TextArea(props) {
    return <div className={styles.textAreaInputDiv}>
        <label className={styles.labelStyleTextArea}>{props.description || 'test'} </label>
        <textarea className={styles.textAreaInput} >
=======
// Creator : Team 1 - Avi
function TextArea(props) { // ------------- yoda work -------------  textarea enter description 
    return <div className={styles.textAreaInputDiv}>
        <label className={styles.labelStyleTextArea}>{props.description || 'test'} </label>
        <textarea onChange={props.onChange} className={styles.textAreaInput} name={props.name}>
>>>>>>> c560cedc08aa2041306550a4e0dc7a2967b38b94
        </textarea>
    </div >
}


export default TextArea