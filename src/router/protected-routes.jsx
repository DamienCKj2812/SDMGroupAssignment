import React from "react";
import { withLazyComponent } from "./with-lazy-component";

export const protectedRoutes = [
    {
        category: "applicant",
        name: "profile",
        path: "applicant/profile",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/applicant-profile/view"))),
    },
    {
        category: "applicant",
        name: "job-search",
        path: "applicant/job-search",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/job-search/view"))),
    },
    {
        category: "employer",
        name: "dashboard",
        path: "employer/dashboard",
        element: withLazyComponent(React.lazy(() => import("../pages/employer/employer-dashboard/view"))),
    },
];
