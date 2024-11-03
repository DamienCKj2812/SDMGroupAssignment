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
        category: "applicant",
        name: "job-details",
        path: "applicant/job/:jobId",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/job-details/view"))),
    },
    {
        category: "applicant",
        name: "company-details",
        path: "applicant/company/:companyId",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/explore-companies/company-details/view"))),
    },
    {
        category: "employer",
        name: "dashboard",
        path: "employer/dashboard",
        element: withLazyComponent(React.lazy(() => import("../pages/employer/employer-dashboard/view"))),
    },
];
