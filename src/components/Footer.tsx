
import { Phone, MessageCircle, Facebook, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/95 border-t border-yellow-500/40 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 gold-gradient rounded-full flex items-center justify-center luxury-glow">
                <span className="text-black font-bold text-sm sm:text-base">D</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-yellow-300">Dr Mourad Gamani</h3>
            </div>
            <p className="text-yellow-100 text-xs sm:text-sm leading-relaxed">
              Creating beautiful, confident smiles through advanced dental implants and aesthetic treatments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-300 mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-yellow-100">
              <li><Link to="/dental-implants" className="hover:text-yellow-300 transition-colors block py-1">Dental Implants</Link></li>
              <li><Link to="/veneers" className="hover:text-yellow-300 transition-colors block py-1">Veneers & Smile Design</Link></li>
              <li><Link to="/teeth-whitening" className="hover:text-yellow-300 transition-colors block py-1">Teeth Whitening</Link></li>
              <li><Link to="/smile-makeover" className="hover:text-yellow-300 transition-colors block py-1">Complete Smile Makeover</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-300 mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-yellow-100">
              <li><Link to="/about" className="hover:text-yellow-300 transition-colors block py-1">About Dr. Gamani</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-300 transition-colors block py-1">Before & After Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-yellow-300 transition-colors block py-1">Patient Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-300 mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-yellow-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-yellow-400" />
                <span>0528828440</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-yellow-400" />
                <span>WhatsApp Consultation</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                <div>
                  <p>Villa 12, Rue Mimouni</p>
                  <p>Oasis, Casablanca 20250</p>
                  <p>Morocco</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-3 sm:mt-4">
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-200 hover:text-yellow-300 cursor-pointer transition-colors" />
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-200 hover:text-yellow-300 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/40 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center text-xs sm:text-sm text-yellow-200">
          <p>&copy; 2024 Dr Mourad Gamani. All rights reserved. | Excellence in Aesthetic Dentistry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
