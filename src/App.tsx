import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import HomeLayout from "@/layout/home";
import "./App.css";
import Loading from "./pages/Loading";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  // Move router creation inside the component to access authenticate state
  const router = createBrowserRouter([
    {
      path: "/",
      element: authenticate ? (
        <HomeLayout>
          <Suspense fallback={<Loading />}>
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
        <Suspense fallback={<Loading />}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<Loading />}>
          <RegisterPage />
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
