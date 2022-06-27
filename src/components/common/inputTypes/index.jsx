import TextArea from "../textArea";
import PassInput from "../passwordInput";
import InputTextEmail from "../inputTextEmail";
// Creator : Team 1 - Avi 

//main frame work 

function InputTypes(props) { // ------------- avi work -------------   enter description end type. and name.. type: to selcet input type { includs !!! textarea }  , description: to do label text , name: 
    const type = props.type

    if (type =='password' ) 
    return  <PassInput {...props} /> 

       else if (type == 'text' || 'email' || 'tel' || 'date')  
           return <InputTextEmail {...props}/>

       else if (type == 'textarea') 
            return  <TextArea {...props} />

            else 
                return <></>
}
export default InputTypes