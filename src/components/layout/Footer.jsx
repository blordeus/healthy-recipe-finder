export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100">
      <div className="container-app flex flex-col items-center justify-between gap-4 py-6 text-sm text-neutral-600 md:flex-row">
        <p>Made with ❤️ and 🥑</p>
        <div className="flex items-center gap-4">
          <span>Instagram</span>
          <span>Butterfly</span>
          <span>TikTok</span>
        </div>
      </div>
    </footer>
  );
}