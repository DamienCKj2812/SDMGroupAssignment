import React from "react";
import { withLazyComponent } from "./with-lazy-component";

export const protectedRoutes = [
    {
        category: "mainCategory",
        name: "helloworld",
        path: "/shop/:productId",
        elements: withLazyComponent(React.lazy(() => import("../pages/authentication/login/index"))),
    },
];
