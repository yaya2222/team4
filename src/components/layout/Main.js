import Test from "../test/Test";
import Header from "./Header";
import Nav from "./Nav";
import Popup from "./Popup";
import { Outlet, Route, Routes } from "react-router-dom"
import Context from "../../context";
import Dashboard from "../../pages-order/Dashboard"
import { SignUp, } from "../../pages-order/signup/index"
import { } from "../../pages-order/admin"
import { } from "../../pages-order/firstAssessement"
import { } from "../../pages-order/freeStyle"
import { } from "../../pages-order/levelExercise/index"
import { } from "../../pages-order/setting"
import { } from "../../pages-order/trainFocus"
import { } from "../../pages-order/trainReading"

function Main() {

    return <>
        <Context>
            <Header />
            <Routes>

                {/* sign */}
                <Route path="sign-up" >
                    <Route index element={<>sign up</>} />
                    <Route path="connect-teacher" element={<>connect teacher</>} />
                </Route>

                {/* student */}
                <Route path="/student" element={<><h1> protected - route - student  </h1><Outlet /></>}>
                    <Route path="dashboard" element={<Dashboard />} />

                    <Route path="train-focus">
                        <Route index element={<>focus-train</>} />
                        <Route path="exercise" element={<>exercise</>} />
                    </Route>

                    <Route path="first-assessement">
                        <Route index element={<>firstAssessementn</>} />
                    </Route>

                    <Route path="free-style">
                        <Route index element={<>free style</>} />
                    </Route>

                    <Route path="level-exercise">
                        <Route index element={<>levelEcecise</>} />
                    </Route>

                    <Route path="setting">
                        <Route index element={<>setting</>} />
                    </Route>

                    <Route path="trainReading">
                        <Route index element={<>trainReading</>} />
                    </Route>


                </Route>

                {/* teacher */}
                <Route path="/teacher" element={<><h1> protected - route - teacher  </h1><Outlet /></>}>
                    <Route path="view-create" element={<>view-create</>} />
                    <Route path="class" element={<>class</>} />
                </Route>

                {/* admin - desktop*/}
                <Route path="/admin" element={<><h1> protected - route - admin  </h1><Outlet /></>}>
                    <Route path="add-remove-teacher" element={<>add-remove-teacher</>} />
                </Route>

                <Route path='/test' element={<Test />} />
            </Routes>
            <Nav />
            <Popup />
        </Context>

    </>
}

export default Main