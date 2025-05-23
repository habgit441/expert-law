import { FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2  p-6 rounded-r-xl shadow-md z-50">
      <ul className="flex flex-col space-y-4 text-xl text-gray-700">
        <li>
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href="tel:+2348012345678" aria-label="Phone">
            <FaPhone />
          </a>
        </li>
      </ul>
    </div>
  );
}
