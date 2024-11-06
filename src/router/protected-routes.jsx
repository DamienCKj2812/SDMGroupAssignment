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
        category: "applicant",
        name: "applied-jobs",
        path: "applied-jobs/jobs",
        element: withLazyComponent(React.lazy(() => import("../pages/applicants/applied-jobs/view"))),
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
    {
        category: "company",
        name: "dashboard",
        path: "dashboard",
        element: withLazyComponent(React.lazy(() => import("../pages/company/dashboard/view"))),
    },
    {
        category: "company",
        name: "reports",
        path: "reports",
        element: withLazyComponent(React.lazy(() => import("../pages/company/reports/view"))),
    },
    {
        category: "company",
        name: "employer-ads",
        path: "employer-ads",
        element: withLazyComponent(React.lazy(() => import("../pages/company/employers-ads/view"))),
    },
    {
        category: "company",
        name: "employer-ads",
        path: "employer-ads/:jobId",
        element: withLazyComponent(React.lazy(() => import("../pages/company/employers-ads/ad-detail/view"))),
    },
    {
        category: "company",
        name: "employers-profile",
        path: "employers-profile",
        element: withLazyComponent(React.lazy(() => import("../pages/company/employers-profile/view"))),
    },
    {
        category: "company",
        name: "employers-details",
        path: "employer-profile/:companyId",
        element: withLazyComponent(React.lazy(() => import("../pages/company/employers-profile/employers-details/view"))),
    },
];
