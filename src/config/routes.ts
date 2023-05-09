import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Sales from "../pages/Sales";
import Parts from "../pages/Parts";
import { Component } from "react";

// interface is typescript specific
interface RouteTypes {
    path: string,
    component: ()=> JSX.Element,
    name: string
}

const routes: RouteTypes[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
    },
    {
        path: "/cars",
        component: Cars,
        name: "Cars"
    },
    {
        path: "/sales",
        component: Sales,
        name: "Sales"
    },
    {
        path: "/parts",
        component: Parts,
        name: "parts"
    }
    ];

export default routes
