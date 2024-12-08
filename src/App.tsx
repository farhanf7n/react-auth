import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import HomeLayout from "@/layout/home";
import Loading from "./pages/Loading";
import SparklesPreview from "@/components/sparkles/sparkles-preview";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));

function App() {
  const [authenticate, setAuthenticate] = useState(false);

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
          element: <SparklesPreview />,
        },
      ],
    },
    {
      path: "/sparkles",
      element: (
        <Suspense fallback={<Loading />}>
          <SparklesPreview />
        </Suspense>
      ),
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
    {
      path: "/forgot-password",
      element: (
        <Suspense fallback={<Loading />}>
          <ForgotPassword />
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
