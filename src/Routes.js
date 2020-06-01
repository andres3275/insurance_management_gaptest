import { Route, Switch } from "react-router-dom";
import React from 'react'
import { Login } from "./containers/Login";
import { InsuranceManagement } from "./containers/InsuranceManagement";

export const Routes = () =>
    (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/insurance-management" component={InsuranceManagement} />
        </Switch>
    )