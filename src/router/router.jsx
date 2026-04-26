import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Homepage from "../view/Homepage.jsx";
import routes from "./routes";
import { getAllGamesLoader, getAllGenres, getFilteredBuGenreGames } from "./loaders.jsx";
import { getSearchedGames } from "./loaders.jsx";
import SearchPage from "../view/SearchPage.jsx";
import GenrePage from "../view/GenrePage.jsx";
import AuthenticationLayout from "../components/layouts/AuthenticationLayout.jsx";
import RegisterPage from "../view/auth/RegisterPage.jsx";
import LoginPage from "../view/auth/LoginPage.jsx";






const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
        children: [
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getFilteredBuGenreGames
            },
            {
                path: '/auth',
                Component: AuthenticationLayout,
                children: [
                    {
                        path: routes.register,
                        Component: RegisterPage
                    },
                    {
                        path: routes.login,
                        Component: LoginPage
                    }
                ]
            }
        ]
    }
]);

export default router;