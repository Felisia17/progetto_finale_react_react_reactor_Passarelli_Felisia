import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout.jsx";
import Homepage from "../view/Homepage.jsx";
import routes from "./routes";
import { getAllGamesLoader, getAllGenres, getFilteredBuGenreGames, getGameDetails  } from "./loaders.jsx";
import { getSearchedGames } from "./loaders.jsx";
import SearchPage from "../view/SearchPage.jsx";
import GenrePage from "../view/GenrePage.jsx";
import AuthenticationLayout from "../components/layouts/AuthenticationLayout.jsx";
import RegisterPage from "../view/auth/RegisterPage.jsx";
import LoginPage from "../view/auth/LoginPage.jsx";
import ProfilePage from "../view/auth/ProfilePage.jsx";
import ProfileSettingsPage from "../view/auth/ProfileSettingsPage.jsx";
import DetailPage from "../view/DetailPage.jsx";




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
                path: routes.detail,
                Component: DetailPage,
                loader: getGameDetails
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
                    },
                    {
                        path: routes.profile,
                        Component: ProfilePage
                    },
                    {
                        path: routes.profile_settings,
                        Component: ProfileSettingsPage
                    },
                    
                ]
            }
        ]
    }
]);

export default router;