import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.css";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RecoilRoot } from "recoil";
import * as Toast from "@radix-ui/react-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecoilRoot>
            <Theme>
                <Toast.Provider>
                    <App />
                    <Toast.Viewport className="ToastViewport" />
                </Toast.Provider>
            </Theme>
        </RecoilRoot>
    </React.StrictMode>
);
