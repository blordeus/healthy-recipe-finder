import { Instagram, Music2, Bird } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="container-app flex flex-col items-center gap-5 py-8 text-sm text-neutral-600 md:flex-row md:justify-between">
        <p className="order-2 md:order-1">Made with ❤️ and 🥑</p>

        <div className="order-1 flex items-center gap-4 md:order-2">
          <a
            href="#"
            aria-label="Instagram"
            className="text-neutral-900 transition hover:text-neutral-600"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            aria-label="Butterfly"
            className="text-neutral-900 transition hover:text-neutral-600"
          >
            <Bird size={18} />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="text-neutral-900 transition hover:text-neutral-600"
          >
            <Music2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}