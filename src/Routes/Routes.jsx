import { createBrowserRouter } from "react-router";
import mainLayouts from "../Layouts/mainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import Error404 from "../Pages/Error404";
import Spinner from "../Components/Spinner";


const Routes = createBrowserRouter([
    {
        path: "/",
        Component: mainLayouts,
        HydrateFallback: <Spinner />,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: 'apps',
                Component: Apps,
                hydrateFallbackElement: <Spinner />,

            },
            {
                path: 'installation',
                Component: Installation,
            },
            {
                path: 'apps/:id',
                Component: AppDetails,

            },
            {
                path: '*',
                Component: Error404
            }
        ],
    },
]);

export default Routes;