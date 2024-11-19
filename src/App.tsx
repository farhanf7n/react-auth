import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import HomeLayout from "@/layout/home";
import "./App.css";

const LoginPage = lazy(() => import("@/pages/Login"));

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // Move router creation inside the component to access authenticate state
  const router = createBrowserRouter([
    {
      path: "/",
      element: authenticate ? (
        <HomeLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </HomeLayout>
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          index: true,
          element: <div>Home Page Content</div>,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading Login...</div>}>
          <LoginPage />
        </Suspense>
      ),
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
