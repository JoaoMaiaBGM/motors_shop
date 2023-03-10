import { createBrowserRouter, Navigate } from "react-router-dom";
import { Vehicle } from "../components/Vehicle";
import { VehiclePage } from "../pages/VehiclePage";
import Home from "../pages/home";
import { Profile } from "../pages/Profile";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";
import { CommentsProvider } from "../contexts/comments.context";
import { ProtectedRoute } from "./ProtectedRoute";
import { SendResetPasswordPage } from "../pages/sendResetPassword";
import { ResetPasswordPage } from "../pages/resetPassword";

export const Route = createBrowserRouter([
  {
    path: "/*",
    element: (
      <Navigate to={"/home"}></Navigate>
    ),
  },
  {
    path : "/home",
    element: (
        <Home></Home>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/user/password",
    element: <SendResetPasswordPage></SendResetPasswordPage>,
  },
  {
    path: "/user/resetpassword/:token_reset_password",
    element: <ResetPasswordPage></ResetPasswordPage>,
  },
  {
    path: "vehicle",
    element: (
      <ProtectedRoute>
        <VehiclePage></VehiclePage>
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":vehicle_id",
        element: (
          <CommentsProvider>
            <Vehicle></Vehicle>
          </CommentsProvider>
        ),
      },
    ],
  },
  {
    path: "/profile/:profile_id",
    element: (
      <ProtectedRoute>
        <Profile></Profile>
      </ProtectedRoute>
    ),
  },
]);
