import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './Pages/Register/Register.jsx';
import DashBoard from './DashBoard/DashBoard/DashBoard.jsx';
import User from './Components/User/User.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Instructor from './Pages/Instructor/Instructor.jsx';
import AddClass from './DashBoard/AddClass/AddClass.jsx';
// import Feedback from './Components/Feedback/Feedback.jsx';
import AllClass from './DashBoard/DashBoard/AllClass/AllClass.jsx';
import MyClasses from './Pages/MyClasses/MyClasses.jsx';
import Payment from './Pages/Payment/Payment.jsx';
import PrivateRoute from './Router/PrivateRoute.jsx';
import InstructorClass from './Components/InstructorClass/InstructorClass.jsx';
import UpdateIns from './Pages/UpdateIns/UpdateIns.jsx';

// import User from './Components/User/User.jsx';


const queryClient = new QueryClient()

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
        path: '/instructor',
        element: <PrivateRoute><Instructor></Instructor></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/myclasses',
        element: <PrivateRoute><MyClasses></MyClasses></PrivateRoute>
      },
      
      // {
      //   path: '/dashboard',
      //   element: <DashBoard></DashBoard>,
      // },
      // {
      //   path: '/dashboard/user',
      //   element: <User></User>
      // },
      // {
      //   path: '/dashboard/addClass',
      //   element: <AddClass></AddClass>
      // }
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'user',
        element: <User></User>
      },
      {
        path: 'addClass',
        element: <AddClass></AddClass>
      },
      {
        path: 'payment/:id',
        element: <Payment></Payment>,
        // loader:({params})=>fetch(`  https://academy-sports-abdullahalmamun2001.vercel.app/pay/${params.id}`)

      },
      // {
      //   path: 'feedback/:id',
      //   element: <Feedback></Feedback>
      // },
      {
        path: 'allClass',
        element: <AllClass></AllClass>
      },
      {
        path: 'instructorClass',
        element: <InstructorClass></InstructorClass>
      },
      {
        path: 'update/:id',
        element: <UpdateIns></UpdateIns>,
        loader:({params})=>fetch(`http://localhost:5000/class/${params.id}`)
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
