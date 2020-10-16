import { lazy } from "react";

export default [
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./views/LoginView")),
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./views/RegisterView")),
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./views/ContactsViews")),
  },
];
