import React from "react";
import { Route } from "react-router-dom";
import { publicRoutes } from "./public-routes";
import { protectedRoutes } from "./protected-routes";

function getPublicRoutes() {
    return publicRoutes.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
    });
}

function getProtectedRoutes(type) {
    console.log(type);
    return protectedRoutes
        .filter((route) => {
            // Check if the route is in the "company" category for admin, manager, or staff
            if ((type === "admin" || type === "manager" || type === "staff") && route.category === "company") {
                return true;
            }
            // Check if the route's category matches the `type`
            if (route.category === type) {
                return true;
            }
            return false;
        })
        .map((route) => <Route key={route.path} path={route.path} element={route.element} />);
}

export { getPublicRoutes, getProtectedRoutes };
