import React, { useEffect } from "react";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import { useRecoilState } from "recoil";
import MainLayout from "./layout/view";
import { getProtectedRoutes, getPublicRoutes } from "./router";
import { currentLoggedInUserState, userRoleState } from "./_common/state";
import { applicantList, companyUser, employerList } from "./_common/data/users-list";

function App() {
    const [currentUser] = useRecoilState(currentLoggedInUserState);
    const [userRole, setUserRole] = useRecoilState(userRoleState);

    useEffect(() => {
        if (currentUser) {
            if (applicantList.some((u) => u.userId == currentUser.userId)) {
                setUserRole("applicant");
            } else if (employerList.some((u) => u.userId == currentUser.userId)) {
                setUserRole("employer");
            } else if (companyUser.some((u) => u.userId == currentUser.userId)) {
                setUserRole(currentUser.role);
            }
        } else {
            setUserRole("applicant");
        }
    }, [currentUser]);

    const getRedirectElement = () => {
        if (currentUser) {
            if (userRole === "employer") {
                return <Navigate to="employer/dashboard" replace />;
            }
            if (userRole === "applicant") {
                return <Navigate to="applicant/job-search" replace />;
            }
            if (userRole === "staff") {
                return <Navigate to="/employer-ads" replace />;
            }
            if (userRole === "manager") {
                return <Navigate to="/dashboard" replace />;
            }
        }
        return <Navigate to="/home" replace />;
    };

    const routes = createRoutesFromElements(
        <>
            <Route path="" element={<MainLayout />}>
                {/* Redirect to the dashboard if logged in, else redirect to the home page */}
                <Route index element={getRedirectElement()} />

                {/* Render public routes if not logged in */}
                {!currentUser && getPublicRoutes()}

                {/* Render protected routes based on the user role */}
                {currentUser && getProtectedRoutes(userRole)}

                {/* Render the meeting route for all parties */}
                {currentUser && getProtectedRoutes("meeting")}

                {/* Render the contract route for all parties */}
                {currentUser && getProtectedRoutes("contract")}

                {/* Render the payment route for all parties */}
                {currentUser && getProtectedRoutes("payment")}

                {/* Catch-all route for non-existent paths */}
                <Route path="*" element={getRedirectElement()} />
            </Route>
        </>
    );

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}

export default App;
