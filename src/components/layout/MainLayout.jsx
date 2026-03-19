import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-neutral-900"
      >
        Skip to content
      </a>

      <Header />
      <main id="main-content" className="min-h-[calc(100vh-72px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}