import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917780183374?text=Hi%20Ranjith%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      title="Chat on WhatsApp"
      aria-label="WhatsApp Chat"
    >
      <FaWhatsapp size={28} color="white" />
      <div className="wa-online" />
    </a>
  );
}
