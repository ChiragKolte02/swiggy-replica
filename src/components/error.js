import { useRouteError } from "react-router-dom"
import Header from "./Header";
import useOnlineStatus from "../utils/useOnlineStatus";
const Error=()=>{
    const err= useRouteError();
    const onlineStatus= useOnlineStatus();
    if(!onlineStatus)  return <h1>Look like you are offline plase check your internet</h1>
    return(
        <div>
            <Header/>
            <h1>Oopps!!</h1>
            <h2>THiS IS NOT RIGHT PATH</h2>
            <h3>{err.status}</h3>
        </div>
    )
}
export default Error