import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFoundPage() {
  useDocumentTitle("Not Found");

  return (
    <section className="container-app py-20 md:py-24">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white px-6 py-10 text-center shadow-sm">
        <h1
          className="text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Page not found
        </h1>
        <p className="mt-4 text-base leading-[1.65] text-neutral-600 md:text-lg">
          The page you were looking for doesn’t exist or may have moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}