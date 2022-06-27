import DivCompicated from "../common/DivCompicated"
import PopUp from "../common/PopUp"

function Test() {
    return <>
        <DivCompicated></DivCompicated>
        <PopUp title="question" question="do you want" yesFn={(e) => { console.log(e.target.value) }} />
    </>
}


export default Test