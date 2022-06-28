import Dashbord from "../../pages-order/admin/dashbord";
import AdminClassEnetr from "../common/admin/AdminClassEnter"
import AdminLogIn from "../common/admin/AdminLogIn"


export default function Test(){
    return <>
    <AdminLogIn />      
<Dashbord/>
{/* <SelectComponent labelText={'classRoom Id'} firstInfo={'choose class id'} optionArry={[12354,1223455,2443456,2345,2345,23456,234567,1234567,234567]}/> */}
   <AdminClassEnetr />
    </>
}
