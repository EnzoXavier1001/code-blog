import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "@/pages/Post";
import { Profile } from "@/pages/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/post/:id',
        element: <Post />
    },
    {
        path: '/profile/:id',
        element: <Profile />
    }
])