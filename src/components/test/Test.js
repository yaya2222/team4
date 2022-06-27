import InputTypes from "../common/inputTypes"
import Select_component from "../common/selectBar"

function Test() {
    return <>
        <InputTypes description={'first name'} type={'text'} onChange={(e)=>{console.log(e.target.value)}} />
        <InputTypes description={'last name'} type={'text'} onChange={(e)=>{console.log(e.target.value)}} />
        <InputTypes description={'email'} type={'email'} onChange={(e)=>{console.log(e.target.value)}} />
        <InputTypes description={'password'} type={'password'} onChange={(e)=>{console.log(e.target.value)}} />
        <InputTypes description={'day of birth'} type={'date'} onChange={(e)=>{console.log(e.target.value)}} />
        <InputTypes description={'phone'} type={'tel' } onChange={(e)=>{console.log(e.target.value)}} />
        <Select_component levels={['level 1', 'level 2' , 'level 3']} onChange={(e)=>{console.log(e.target.value)}}/>
      
    </>
}


export default Test