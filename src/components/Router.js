import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddEmployee from "./AddEmployee"
import Employee from "./Employee"
import Home from "./Home"
import PageNotFound from "./PageNotFound"

const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path ="/MyFirstReact-1-/" element = {<Home/>}/>
                    <Route exact path ="/MyFirstReact-1-/employees" element = {<Employee/>}/>
                    <Route exact path ="/MyFirstReact-1-/add" element = {<AddEmployee/>}/>
                    <Route exact path ="/MyFirstReact-1-/edit/:employeeId" element={<AddEmployee/>} />
                    <Route exact path ="*" element = {<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
} 
export default Router;