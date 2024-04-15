import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SignUp from './pages/auth/SignUp.jsx';
import SignIn from './pages/auth/SignIn.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<App />}>
     <Route index path="/" element={<Home />} />
     <Route index path="about" element={<About />} />
     <Route index path="projects" element={<Projects />} />
     <Route index path="dashboard" element={<Dashboard />} />
     <Route index path="sign-up" element={<SignUp />} />
     <Route index path="sign-in" element={<SignIn />} />
     <Route index path="forgot-password" element={<ForgotPassword />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
