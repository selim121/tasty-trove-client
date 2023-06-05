import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings";
import Contact from "../pages/Contact/Contact";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        {
            path: 'order/:category',
            element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/userHome',
          element: <UserHome></UserHome>
        },
        {
          path: '/dashboard/mycart',
          element: <MyCart></MyCart>
        },
        {
          path: '/dashboard/payment',
          element: <Payment></Payment>
        },
        //admin routes
        {
          path: '/dashboard/adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: '/dashboard/all-users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: '/dashboard/manage-items',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: '/dashboard/manage-bookings',
          element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
        }
      ]
    }
  ]);

  
  export default router;