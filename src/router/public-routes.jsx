import React from "react";
import { withLazyComponent } from "./with-lazy-component";

export const publicRoutes = [
    {
        category: "home",
        name: "home",
        path: "/home",
        element: withLazyComponent(React.lazy(() => import("../pages/informational/home/view"))),
    },
    {
        category: "home",
        name: "profile",
        path: "/profile",
        element: withLazyComponent(React.lazy(() => import("../pages/informational/profile/view"))),
    },
    {
        category: "authentication",
        name: "login",
        path: "/login",
        element: withLazyComponent(React.lazy(() => import("../pages/authentication/login/view/"))),
    },
    {
        category: "authentication",
        name: "register",
        path: "/register",
        element: withLazyComponent(React.lazy(() => import("../pages/authentication/register/view/"))),
    },
];
