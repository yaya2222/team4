import DashbordChart from "./DashbordChart";
import { useState } from "react"
//data and graph they are getting the details of the student and give it to the  function to create the dashbord 

function Dashbord() {
    const [labels, setLabels] = useState([])

    function changeChart(e) {
        setLabels(["SUN", 'MON', "TUE", "WED", "THU", "FRI", "SAT"])
    }

    return <>
        <div >
            <DashbordChart labels={labels} onChange={changeChart} label='Graph' data={[10, 20, 40, 60, 80, 124, 12]} />
        </div>

    </>
}

export default Dashbord;