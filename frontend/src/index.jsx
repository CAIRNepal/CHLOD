import React from 'react';
import { createRoot } from "react-dom/client";
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';
import '@civicactions/data-catalog-components/dist/index.css';
import './theme/index.css';

import Home from './templates/home';
import About from './templates/about';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
import Publishers from './templates/publishers';
import Form from './templates/form';
import Curation from './templates/curation';
import Activity from './templates/activity';
import Queues from './templates/queues';
import WebformSubmissions from './templates/test';
import Leaderboard from './templates/leaderboard';
import { ClerkProvider,SignIn, SignOutButton, useUser } from '@clerk/clerk-react';
// import Signin from './templates/loginPanel/index.jsx';
import SignUp from './templates/signupPanel';
// import LogoutPanel from './templates/logout';
import Moderator from './templates/moderator';
import Profile from './templates/profile';
import Viewresponse from './templates/viewResponse';
import ViewProfile from './templates/viewprofile';
import ViewForm from './templates/viewform';
import ViewProfileOrForm from './templates/viewprofile';
import Contributors from './templates/contributor';

const clerk_key= import.meta.env.VITE_CLERK_KEY;
if(!clerk_key){
  throw new Error("Key Was Not Found");

}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Navigate replace to="/" />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/publishers",
    element: <Publishers />
  },
  {
    path: "/search",
    element: <SearchTemplate />
  },
  {
    path: "/api",
    element: <ApiDocsFull />
  },
  {
    path: "/dataset/:id",
    element: <Dataset />
  },
  {
    path: "/dataset/:id/api",
    element: <ApiDocsSpecific />
  },
  {
    path: "/contribution",
    element: <Form />
  },
  {
    path: "/curation",
    element: <Curation />
  },
  {
    path: "/curation/activity",
    element: <Activity/>
  },
  {
    path: "/curation/queues",
    element: <Queues/>
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />
  },
  {
    path: "/test",
    element: <WebformSubmissions />
  },
  {
    path: '/login',
    element: (
      <div className="auth-container">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/signup"
          
          appearance={{
            variables: {
              colorPrimary: '#4A90E2',
              colorText: '#333',
              fontFamily: '"Roboto", sans-serif',
              borderRadius: '8px',
            },
            elements: {
              formButtonPrimary: {
                backgroundColor: '#4A90E2',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
              },
              card: {
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
              },
            },
          }}
        />
      </div>
    ),
  },
  {
    path: '/signup',
    element: <SignUp />
    
  },
  {
    path: '/logout',
    element: (
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <SignOutButton signOutCallback={() => window.location.href = '/'} />
        </div>
      
    ),
  },
  {
    path: "/moderator",
    element: <Moderator/>
  },

  // {
  //   path: "/logout",
  //   element: <LogoutPanel />
  // },
  {
    path: "/viewresponse/:id",
    element: <Viewresponse />
  },
  {
    path: "/me",
    element: <Profile />
  },

  {
    path: '*',
    element: <NotFound />,
  },
  {
    path:'/view/:username',
    element: <ViewProfileOrForm />
  },
  {
    path:'/viewform/:title',
    element: <ViewProfileOrForm  />
  },
  {
    path:'/contributors',
    element: <Contributors  />
  },
]);

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerk_key} afterSignOutUrl="/">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ClerkProvider>
);