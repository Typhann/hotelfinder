import { Outlet, Navigate } from "react-router-dom";

// Component that renders protected routes if user is authenticated
export default function AuthRequired() {
  const authenticated = false;
  if (!authenticated) {
    return <Navigate to="/?authenticated=false" />;
  }
  return <Outlet />;
}
