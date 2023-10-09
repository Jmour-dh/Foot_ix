import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminJoueursNav from "./components/AdminJoueursNav/AdminJoueursNav";

function AdminJoueurs() {
  const { key } = useLocation();
  return (
    <div className="d-flex flex-column flex-fill">
      <h4 className="mb-20">Gestion des joueurs</h4>
      <div className="flex-fill d-flex flex-column">
        <AdminJoueursNav />
        <div className="flex-fill d-flex flex-column">
          <Suspense>
            <Outlet key={key} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AdminJoueurs;
