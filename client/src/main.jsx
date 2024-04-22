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
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { store, persister } from './store/store.js';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { PersistGate } from 'redux-persist/integration/react';
import Profile from './pages/auth/Profile.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { ThemeProvider } from './components/theme/ThemeProvider.jsx';
import PrivateRoute from './components/Private/PrivateRoute.jsx';
// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route  path="about" element={<About />} />
      <Route  path="projects" element={<Projects />} />

        <Route element={<PrivateRoute />}>
          <Route  path="dashboard" element={<Dashboard />} />
          <Route  path="profile" element={<Profile />} />
        </Route>
        
      <Route  path="sign-up" element={<SignUp />} />
      <Route  path="sign-in" element={<SignIn />} />
      <Route  path="forgot-password" element={<ForgotPassword />} />
      <Route  path="*" element={<PageNotFound />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persister}>

    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Provider>,
  </PersistGate>
)
