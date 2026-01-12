import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, LogGuard } from './Common/Protected Routes/AuthGuard';
import Layout from "./Common/Layout/Layout";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Videos/Video";
import Settings from "./Pages/Settings/Settings";
import Profile from "./Pages/Profile/Profile";
import SubscriptionList from "./Pages/Subscriptions/SubscriptionList";
import Playlist from "./Pages/Playlists/Playlist";
import PlaylistList from "./Pages/Playlists/PlaylistList";

// -------------------------------------- Authentication Pages --------------------------------------

const Signin = lazy(() => import('./Pages/Signin/Signin'));
const Signup = lazy(() => import('./Pages/Signup/Signup'));


// -------------------------------------- Welcome Pages --------------------------------------
// -------------------------------------- Common Pages --------------------------------------
// -------------------------------------- Overview Module --------------------------------------
// -------------------------------------- Trading Entities Module --------------------------------------
// -------------------------------------- Permit Types Module --------------------------------------
// -------------------------------------- My Permit Module --------------------------------------

export const Routes = createBrowserRouter([
    //Authantication Routes
    {
        path: "/sign-in",
        element: <LogGuard><Signin /> </LogGuard >
    },
    {
        path: "/sign-in/verify-otp",
        element: <LogGuard><Signin /> </LogGuard >
    },
    {
        path: "/sign-up",
        element: <LogGuard><Signup /> </LogGuard >
    },

    // Dashboard Layout
    {
        path: "/",
        element: <AuthGuard><Layout /></AuthGuard>,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "search",
                element: <Home />,
            },
            {
                path: "video",
                element: <Video />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "my-profile",
                element: <Profile />,
            },
            {
                path: "subscriptions",
                element: <SubscriptionList />,
            },
            {
                path: "subscriptions/:id",
                element: <Profile />,
            },
            {
                path: "playlists",
                element: <PlaylistList />,
            },
            {
                path: "playlists/:id",
                element: <Playlist />,
            },
        ]
    }
]);