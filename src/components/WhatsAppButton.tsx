
import { WhatsApp } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to schedule a consultation for aesthetic dental treatment.";
    const phoneNumber = "5551234567"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;
