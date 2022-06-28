import styles from './style.module.css'
import InputTypes from "../../../components/common/inputTypes"
import Button_w140_OR_w383_Link from  "../../../components/common/Button w140-OR-w383 Link" 

<<<<<<< HEAD
// Creator : Team 4 - all
=======
// Creator : Team A - Shahar
>>>>>>> 852215434757d1a06825dcd1e547a941e68bbbbe
function BookDetails(){
    return <>
    <InputTypes description="What Book are you going to read?" type="text"/>
    <InputTypes description="Genre?" type="text"/>
    <div className={styles.button}><Button_w140_OR_w383_Link href="/instructions"/></div>
    </>
}


export default BookDetails