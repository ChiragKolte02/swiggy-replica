
import User from "./User"
import React from "react"
// const About=()=>{
//     return(
//         <div className="about-class">
//             <h1>This is namaste react</h1>
//             <h2>kinda good</h2>
//             <User/>
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("hello")
    }
    render(){
        return(
               <div className="about-class">
            <h1>This is namaste react</h1>
            <h2>kinda good</h2>
            <User />
        </div>
        )
    }
}

export default About