
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-blue-600 font-bold text-2xl">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Dr Mourad Gamani</h1>
              <p className="text-sm text-gray-600 font-light">Excellence in Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link to="/" className="px-6 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-6 py-3 font-medium rounded-lg hover:bg-blue-50">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-white border border-gray-100 rounded-2xl shadow-xl">
                    <Link to="/dental-implants" className="block px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl font-medium transition-colors">
                      Dental Implants
                    </Link>
                    <Link to="/veneers" className="block px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl font-medium transition-colors">
                      Veneers & Smile Design
                    </Link>
                    <Link to="/teeth-whitening" className="block px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl font-medium transition-colors">
                      Teeth Whitening
                    </Link>
                    <Link to="/smile-makeover" className="block px-6 py-4 text-gray-700 hover:bg-blue-50 rounded-xl font-medium transition-colors">
                      Complete Smile Makeover
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-6 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
                  About Dr. Gamani
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-6 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
                  Before & After
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-6 py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50">
                  Testimonials
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <Phone className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer" />
            </div>
            <BookingModal>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-medium">
                <Calendar className="h-5 w-5 mr-2" />
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
