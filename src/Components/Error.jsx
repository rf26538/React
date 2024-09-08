/**
 * Get more info of error using react router dom
 */
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <>
            <h1>Error</h1>
            <p>Oops Something went wrong</p>
            <h3>{ err.status } : { err.statusText }</h3>
        </>
    )
}

export default Error;