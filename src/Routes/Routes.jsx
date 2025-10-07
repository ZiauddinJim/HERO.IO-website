import { createBrowserRouter } from "react-router";
import mainLayouts from "../Layouts/mainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Home from "../Pages/Home";


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
            }
        ],
    }
]);

export default Routes;