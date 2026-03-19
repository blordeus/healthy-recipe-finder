import InstagramIcon from "../../assets/images/icon-instagram.svg";
import TikTokIcon from "../../assets/images/icon-tiktok.svg";
import BlueSkyIcon from "../../assets/images/icon-bluesky.svg";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="container-app flex flex-col items-center gap-5 py-8 text-sm text-neutral-600 md:flex-row md:justify-between">
        <p className="order-2 text-center md:text-left md:order-1">Made with ❤️ and 🥑</p>

        <div className="order-1 flex items-center gap-4 md:order-2">
          <a
            href="#"
            aria-label="Instagram"
            className="text-neutral-900 transition hover:text-neutral-600"
          >
            <img src={InstagramIcon} alt="Instagram" className="h-5 w-5" />
            
          </a>
          <a
            href="#"
            aria-label="Butterfly"
            className="text-neutral-900 transition hover:text-neutral-600"
          >
            <img src={BlueSkyIcon} alt="BlueSky" className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="text-neutral-900 transition hover:text-neutral-600"
          >
            <img src={TikTokIcon} alt="TikTok" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}