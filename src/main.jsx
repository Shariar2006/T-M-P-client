import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/Routes.jsx';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/AuthContext/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
