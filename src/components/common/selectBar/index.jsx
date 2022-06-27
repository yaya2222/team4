
import styles from './style.module.css'
import React, { Component } from 'react'


// Creator : Team 1 -Avi
function Select_component(props){ // ------------- bentsi work -------------  enter porps of level array to do options
   
    // ,call it by :levels.value -מערך של אופציות
    const levels =  props.levels

//מחזיר לולאה אופשן של הערך הראשוניו את רשימת השלבים
    return <>
    <div className={styles.inputDiv}>
 <label className={styles.labelStyle}> Reading Level</label>       
    <select  className={styles.selectInput} name={props.name} onChange={props.onChange}>       
         {levels.map((val) => (
             <option value={val}  >{val}</option>
             ))}
    </select>

             </div>
    </>
}
//אופציה לעשות את הערך הראשוני אפור ולא פעיל
// disabled:true,באובייקט
// disabled={level.disabled}באופשן
export default Select_component