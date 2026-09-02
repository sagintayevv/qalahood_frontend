import { SiWhatsapp, SiInstagram } from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 py-6">
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/77000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            aria-label="WhatsApp"
          >
            <SiWhatsapp size={20} />
          </a>

          <a
            href="https://instagram.com/qalahood"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            aria-label="Instagram"
          >
            <SiInstagram size={20} />
          </a>

          <a
            href="https://t.me/qalahood"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            aria-label="Telegram"
          >
            <Send size={20} />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 Qalahood. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
