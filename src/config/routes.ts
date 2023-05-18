import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Sales from "../pages/Sales";
import Parts from "../pages/Parts";

// interface is typescript specific
interface RouteTypes {
    path: string,
    component: ()=> JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteTypes[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    {
        path: "/cars",
        component: Cars,
        name: "Cars",
        protected: true
    },
    {
        path: "/sales",
        component: Sales,
        name: "Sales",
        protected: false
    },
    {
        path: "/parts",
        component: Parts,
        name: "Parts",
        protected: false
    }
    ];

export default routes
