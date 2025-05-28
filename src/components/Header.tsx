
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-blue-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">SmileCraft Studio</h1>
              <p className="text-sm text-gray-600">Excellence in Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 p-4 bg-white">
                    <Link to="/dental-implants" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
                      Dental Implants
                    </Link>
                    <Link to="/veneers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
                      Veneers & Smile Design
                    </Link>
                    <Link to="/teeth-whitening" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
                      Teeth Whitening
                    </Link>
                    <Link to="/smile-makeover" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
                      Complete Smile Makeover
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  About Dr. Smith
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Before & After
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonials
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <BookingModal>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Book Consultation
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
