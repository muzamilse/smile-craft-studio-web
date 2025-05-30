
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-lg shadow-2xl border-b border-amber-400/10 sticky top-0 z-50 relative overflow-hidden">
      {/* Luxury glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-amber-800/10 animate-pulse"></div>
      
      <div className="container mx-auto px-8 py-6 relative z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-amber-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:shadow-amber-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-2xl drop-shadow-lg">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight drop-shadow-2xl">Dr Mourad Gamani</h1>
              <p className="text-sm text-amber-200 font-light drop-shadow-lg">Excellence in Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link to="/" className="px-6 py-3 text-gray-300 hover:text-blue-300 transition-all duration-300 font-medium rounded-xl hover:bg-blue-600/10 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-indigo-300 px-6 py-3 font-medium rounded-xl hover:bg-indigo-600/10 hover:shadow-lg hover:shadow-indigo-400/20 backdrop-blur-sm transition-all duration-300">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-3xl shadow-2xl shadow-indigo-500/20">
                    <Link to="/dental-implants" className="block px-6 py-4 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
                      Dental Implants
                    </Link>
                    <Link to="/veneers" className="block px-6 py-4 text-gray-300 hover:bg-indigo-600/20 hover:text-indigo-300 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-400/20">
                      Veneers & Smile Design
                    </Link>
                    <Link to="/teeth-whitening" className="block px-6 py-4 text-gray-300 hover:bg-amber-600/20 hover:text-amber-300 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20">
                      Teeth Whitening
                    </Link>
                    <Link to="/smile-makeover" className="block px-6 py-4 text-gray-300 hover:bg-teal-600/20 hover:text-teal-300 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20">
                      Complete Smile Makeover
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-6 py-3 text-gray-300 hover:text-indigo-300 transition-all duration-300 font-medium rounded-xl hover:bg-indigo-600/10 hover:shadow-lg hover:shadow-indigo-400/20 backdrop-blur-sm">
                  About Dr. Gamani
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-6 py-3 text-gray-300 hover:text-amber-300 transition-all duration-300 font-medium rounded-xl hover:bg-amber-600/10 hover:shadow-lg hover:shadow-amber-400/20 backdrop-blur-sm">
                  Before & After
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-6 py-3 text-gray-300 hover:text-teal-300 transition-all duration-300 font-medium rounded-xl hover:bg-teal-600/10 hover:shadow-lg hover:shadow-teal-400/20 backdrop-blur-sm">
                  Testimonials
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <Phone className="h-6 w-6 text-gray-300 hover:text-blue-300 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-6 drop-shadow-lg" />
            </div>
            <BookingModal>
              <Button className="bg-gradient-to-r from-blue-700 via-indigo-700 to-amber-600 hover:from-blue-800 hover:via-indigo-800 hover:to-amber-700 text-white px-8 py-3 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 font-medium border border-amber-400/20 backdrop-blur-sm">
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
