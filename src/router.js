import { createBrowserRouter } from "react-router-dom";
import Login from './page/Login';
import About from './page/About';
import Profile from './page/Profile';
import Register from './page/Register';
import ProtectedLeyout from './components/ProtectedLeyout';
import GuesttLeyout from './components/GuesttLeyout';

const router = createBrowserRouter([
    {
        path:'/',
        element:<GuesttLeyout/>,
        children:[
            {
                path:'/',
                element:<Login/>,
            },
            {
                path:'/register',
                element:<Register/>,
            }
        ]
    },
    {
        path:'/',
        element:<ProtectedLeyout/>,
        children:[
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/profile',
                element:<Profile/>,
            }
        ]
    }
]);

export default router;