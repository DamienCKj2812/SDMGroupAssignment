import { atom } from "recoil";
import { IUser } from "../interface";

export const counterState = atom({
    key: "counterState", // unique ID with respect to other atoms/selectors
    default: 0, // default value (aka initial value)
});

export const currentLoggedInUserState = atom<IUser | null>({
    key: "currentLoggedInUserState",
    default: null,
    effects_UNSTABLE: [
        ({ setSelf, onSet }) => {
            // Get the saved user from localStorage
            const savedUser = localStorage.getItem("currentUser");

            if (savedUser) {
                // Parse the saved user and set it as the initial state
                setSelf(JSON.parse(savedUser));
            }

            // Set up a listener to update localStorage whenever the state changes
            onSet((newValue) => {
                if (newValue === null) {
                    localStorage.removeItem("currentUser"); // Remove user from localStorage if null
                } else {
                    localStorage.setItem("currentUser", JSON.stringify(newValue)); // Store user as JSON string
                }
            });
        },
    ],
});

export const userRoleState = atom({
    key: "userRoleState",
    default: "",
    effects_UNSTABLE: [
        ({ setSelf, onSet }) => {
            // Get the saved role from localStorage
            const savedRole = localStorage.getItem("role");

            if (savedRole) {
                setSelf(savedRole); // Set the initial state from localStorage
            }

            // Set up a listener to update localStorage whenever the state changes
            onSet((newValue) => {
                localStorage.setItem("role", newValue || "");
            });
        },
    ],
});
