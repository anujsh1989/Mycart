import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import SelectedItem from "../components/SelectedItem";
import Signup from "../components/Signup";
import RouteNames from "./routenames";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path={RouteNames.HOME} element={<Home/>} ></Route>
            <Route path={RouteNames.LOGIN} element={<Login/>} ></Route>
            <Route path={RouteNames.SIGNUP} element={<Signup/>} ></Route>
            <Route path={RouteNames.SELECTED_ITEM} element={<SelectedItem/>} ></Route>
        </Routes>
        </BrowserRouter>
    );
}