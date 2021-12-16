import { useEffect, useState } from "react";
import helloService from "../services/helloService.js"

//function - arrow function
// function Hello() - normal function "stateless"
const Hello = () => {
    //function hooks
    const [hello, setHello] = useState("No api found better luck next life")

    //hooks
    useEffect(() => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
            }
        )
        .catch(
            err => {console.log("You're a mistake. I mean, someting went wrong!s")}
        )
    })
    return hello;
}
export default Hello;