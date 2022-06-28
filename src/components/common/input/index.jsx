import styles from './style.module.css'

// Creator : Team 1 - Politi

// To define a type, insert the name of the type in the string in the props And set the description as first name or last name
function InputTypes(props){
    return <>
    <div className={styles.inputDiv}>
        <label className={styles.labelStyle}>{props.discription}</label>
    <input className={styles.inputEara} type={props.type} placeholder={props.discription} name={props.discription} />
    </div>
    </>
}

export default InputTypes