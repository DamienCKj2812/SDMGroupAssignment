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
        name: "companies",
        path: "applicant/companies",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/explore-companies/companies/view"))),
    },
    {
        category: "applicant",
        name: "company-details",
        path: "applicant/company/:companyId",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/explore-companies/company-details/view"))),
    },
    {
        category: "applicant",
        name: "review-company",
        path: "applicant/review-company/:companyId",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/review-company/view"))),
    },
    {
        category: "employer",
        name: "dashboard",
        path: "employer/dashboard",
        element: withLazyComponent(React.lazy(() => import("../pages/employer/employer-dashboard/view"))),
    },
    {
        category: "employer",
        name: "create-job-ad",
        path: "employer/create-job-ad",
        element: withLazyComponent(React.lazy(() => import("../pages/employer/create-job-ad/view"))),
    },
    {
        category: "employer",
        name: "company-profile",
        path: "employer/company-profile",
        element: withLazyComponent(React.lazy(() => import("../pages/employer/company-profile/view"))),
    },
    {
        category: "meeting",
        name: "meeting",
        path: "meeting/meet/:meetingId",
        element: withLazyComponent(React.lazy(() => import("../pages/_shared/meeting/view"))),
    },
    {
        category: "meeting",
        name: "schedule-meeting",
        path: "meeting/schedule-meeting",
        element: withLazyComponent(React.lazy(() => import("../pages/_shared/schedule-meeting/view"))),
    },
];
