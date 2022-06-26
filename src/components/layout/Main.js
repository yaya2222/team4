import Test from "../test/Test";
import Header from "./Header";
import Nav from "./Nav";
import Popup from "./Popup";


function Main() {

    return <>

        <Header/>
        <Routes>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>

            <Route path='/test' element={<Test/>}/>
        </Routes>
        <Nav />
        <Popup />

    </>
}