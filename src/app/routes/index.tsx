import { BrowserRouter, Navigate, Route,Routes as Switch } from "react-router-dom";
import { Dashboard } from "../pages";

export const Router = () =>{

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/Pagina-inicial" element={<Dashboard/>} />
            <Route path="*" element= {<Navigate to={"/pagina-inicial"}/>}/>
        </Switch>
            {/* Your routes will go here */}
        </BrowserRouter>
    )
}