import { createBrowserRouter } from "react-router";

import MainLayout from "../mainLayout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";
import ErrorPage from "../pages/error/ErrorPage";
import FriendsDetails from "../pages/friendsDetails/FriendsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <HomePage></HomePage>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/:id',
                element: <FriendsDetails></FriendsDetails>
            },
            {
                path: '/timeline',
                element: <TimeLine></TimeLine>
            },
            {
                path: '/stats',
                element: <Stats></Stats>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);