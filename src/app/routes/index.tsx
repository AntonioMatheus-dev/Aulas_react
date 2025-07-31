import { BrowserRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import { Dashboard,Login} from "../pages";

export const Router = () =>{

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Pagina-inicial" element={<Dashboard />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="*" element={<Navigate to={"/pagina-inicial"} />} />
        </Switch>
      </BrowserRouter>
    );
}