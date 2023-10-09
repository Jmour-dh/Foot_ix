import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import AuthProvider from "./components/AuthProvider/AuthProvider";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
