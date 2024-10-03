import React from "react";
import { withLazyComponent } from "./with-lazy-component";

export const publicRoutes = [
    {
        category: "mainCategory",
        name: "helloworld",
        path: "/",
        elements: withLazyComponent(React.lazy(() => import("../pages/authentication/login/index"))),
    },
    {
        category: "mainCategory",
        name: "helloworld",
        path: "/register",
        elements: withLazyComponent(React.lazy(() => import("../pages/authentication/register/index"))),
    },
];
