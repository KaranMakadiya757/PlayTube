import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthGuard, LogGuard } from './Common/Protected Routes/AuthGuard';
import Layout from "./Common/Layout/Layout";

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
        children: []
    }
]);