import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import RouteNames from "./routenames";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path={RouteNames.HOME} element={<Home/>} ></Route>
            <Route path={RouteNames.LOGIN} element={<Login/>} ></Route>
        </Routes>
        </BrowserRouter>
    );
}