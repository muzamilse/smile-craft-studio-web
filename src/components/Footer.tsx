
import { Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">SmileCraft Studio</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating beautiful, confident smiles through advanced dental implants and aesthetic treatments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/dental-implants" className="hover:text-blue-600 transition-colors">Dental Implants</Link></li>
              <li><Link to="/veneers" className="hover:text-blue-600 transition-colors">Veneers & Smile Design</Link></li>
              <li><Link to="/teeth-whitening" className="hover:text-blue-600 transition-colors">Teeth Whitening</Link></li>
              <li><Link to="/smile-makeover" className="hover:text-blue-600 transition-colors">Complete Smile Makeover</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Dr. Smith</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-600 transition-colors">Before & After Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-600 transition-colors">Patient Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Consultation</span>
              </div>
              <p>123 Dental Ave, Suite 100<br />Beautiful City, BC 12345</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 SmileCraft Studio. All rights reserved. | Excellence in Aesthetic Dentistry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
