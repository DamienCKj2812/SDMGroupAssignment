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
    return protectedRoutes.map((route) => {
        if (route.category == type) return <Route key={route.path} path={route.path} element={route.element} />;
    });
}

export { getPublicRoutes, getProtectedRoutes };
