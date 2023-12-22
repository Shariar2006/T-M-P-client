import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import TaskManagement from "../Pages/Dashboard/TaskManagement";
import TaskCreate from "../Pages/Dashboard/TaskCreate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: 'taskManagement',
                element: <PrivateRoute><TaskManagement></TaskManagement></PrivateRoute>
            },
            {
                path: 'taskCreate',
                element: <PrivateRoute><TaskCreate></TaskCreate></PrivateRoute>
            },
            {
                path: 'updateTask/:id',
                loader: ({params})=> fetch(`http://localhost:5000/myTask/${params.id}`)
              },
        ]
    },
]);


export default router;