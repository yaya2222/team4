import styles from './style.module.css'
import Button_w140_w383_Link from '../../../Button w140-OR-w383 Link'
import Title from '../../../Title/Title'
import { useState } from 'react'
import DivCompicated from '../../../DivCompicated'
import SelectComponent from '../../../selectBar'
import { Link } from 'react-router-dom'

export default function AdminClassEnetr(){
    const [option, setOption] = useState()
    function selectOptionReq(e){
    setOption(e.target.value)
    }
return (
    <>
    <Title title={"ClassRoom Id"}/>
    <div className={styles.mainDiv}>

    <div className={styles.linkDiv}> 
     <Link to={'test'} className={styles.linkStyle}>craete new classroom id</Link>
    </div>
    <DivCompicated isLeft={true} classInternal={styles.frontDiv}>
        <form onSubmit={(e)=>{e.preventDefault(); console.log(option)}}>
<SelectComponent labelText='classroom id' firstInfo='Choose ClassRoom Id' onChange={selectOptionReq}/>
<div className={styles.buttonDiv}>
<Button_w140_w383_Link text='Submit'/>
</div>
        </form>
    </DivCompicated>
    </div>
    </>
)
}