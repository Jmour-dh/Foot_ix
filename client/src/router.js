import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import { lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { rootLoader } from "./components/loaders/rootLoader";

const Home = lazy(() => import("./components/pages/Home/Home"));
const JoueursListe = lazy(() => import("./components/pages/Joueurs/JoueursListe"));
const Stades = lazy(() => import("./components/pages/stades/Stades"));
const Clubs = lazy(() => import("./components/pages/clubs/Clubs"));
const Signin = lazy(() => import("./components/pages/Signin/Signin"));
const Profile = lazy(() => import("./components/pages/Profile/Profile"));
const AdminJoueurs = lazy(() =>
  import("./components/pages/Profile/pages/AdminJoueurs/AdminJoueurs")
);
const AdminJoueursList = lazy(() =>
  import(
    "./components/pages/Profile/pages/AdminJoueurs/pages/AdminJoueursList/AdminJoueursList"
  )
);
const AdminJoueursForm = lazy(() =>
  import(
    "./components/pages/Profile/pages/AdminJoueurs/pages/AdminJoueursForm/AdminJoueusForm"
  )
);

const AdminAdmins = lazy(() =>
  import("./components/pages/Profile/pages/AdminAdmins/AdminAdmins")
);
const AdminAdminsList = lazy(() =>
  import(
    "./components/pages/Profile/pages/AdminAdmins/pages/AdminAdminsList/AdminAdminsList"
  )
);
const AdminAdminsForm = lazy(() =>
  import(
    "./components/pages/Profile/pages/AdminAdmins/pages/AdminAdminsForm/AdminAdminsForm"
  )
);

const Signup = lazy(() => import("./components/pages/Signup/Signup"));
const Projet = lazy(() => import("./components/pages/projet/Projet"));
const Contact = lazy(() => import("./components/pages/contact/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/joueurs",
        element: <JoueursListe />,
      },
      {
        path: "/stades",
        element: <Stades />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/projet",
        element: <Projet />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "players",
            element: <AdminJoueurs />,
            children: [
              {
                path: "list",
                element: <AdminJoueursList />,
              },
              {
                path: "new",
                element: <AdminJoueursForm />,
              },
              {
                index: true,
                loader: async () => redirect('/profile/players/list'),
              },
            ],
          },
          {
            path: "admins",
            element: <AdminAdmins />,
            children: [
              {
                path: "listAdmins",
                element: <AdminAdminsList />,
              },
              {
                path: "newAdmin",
                element: <AdminAdminsForm />,
              },
              {
                index: true,
                loader: async () => redirect('/profile/admins/listAdmins'),
              },
            ],
          },
        ],
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
