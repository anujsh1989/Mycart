import React from "react";
import { useNavigate } from "react-router-dom";
import RouteNames from "../../router/routenames";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer} from "../../actions/actions";


export default function Header() {
    const navigate = useNavigate();
    const mystate = useSelector((state)=> state.openCloseDrawer);
    const dispatch = useDispatch();
    return (
        <div className="header-container" >
            <div className="header-logo-box" onClick={(e)=>navigate(RouteNames.HOME)} >
            <h1>FakeStore</h1>
            </div>
            <div className="icon-box" onClick={()=>dispatch(openDrawer())} >
                <img className="icon" src="./assets/shopping-cart.png"  alt="Cart-Icon"/>
            </div>
        </div >
    );
}