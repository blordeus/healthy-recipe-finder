import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}