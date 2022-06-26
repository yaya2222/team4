import Test from "../test/Test";
import Header from "./Header";
import Nav from "./Nav";
import Popup from "./Popup";
import { Outlet, Route, Routes } from "react-router-dom"

function Main() {

    return <>
        <Header />
        <Routes>

            <Route path="/student" element={<><h1> protected - route - student  </h1><Outlet /></>}>
                <Route path="sign-up" >
                    <Route index element={<>sign up</>} />
                    <Route path="connect-teacher" element={<>connect teacher</>} />
                </Route>

                <Route path="focus-train">
                    <Route index element={<>focus-train</>} />
                    <Route path="exercise" element={<>exercise</>} />
                </Route>


            </Route>

            <Route path="/teacher" element={<><h1> protected - route - teacher  </h1><Outlet /></>}>
                <Route path="view-create" element={<>view-create <Outlet /></>} />
                <Route path="class" element={<>class</>} />
            </Route>


            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route path='/test' element={<Test />} />
        </Routes>
        <Nav />
        <Popup />

    </>
}

export default Main