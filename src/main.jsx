import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { getProtectedRoutes, getPublicRoutes } from "./router/index.jsx";

const routes = (
    <>
        <Route>
            {getPublicRoutes()}
            {getProtectedRoutes()}
        </Route>
    </>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecoilRoot>
            <Theme>
                <App />
                <RouterProvider router={router} />
            </Theme>
        </RecoilRoot>
    </React.StrictMode>
);
