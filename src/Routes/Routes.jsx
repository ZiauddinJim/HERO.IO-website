import { createBrowserRouter } from "react-router";
import mainLayouts from "../Layouts/mainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import Error404 from "../Pages/Error404";


const Routes = createBrowserRouter([
    {
        path: "/",
        Component: mainLayouts,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: 'apps',
                Component: Apps,

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