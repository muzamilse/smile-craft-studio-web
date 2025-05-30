
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-lg shadow-2xl border-b border-white/10 sticky top-0 z-50 relative overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      <div className="container mx-auto px-8 py-6 relative z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:shadow-blue-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-2xl drop-shadow-lg">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight drop-shadow-2xl">Dr Mourad Gamani</h1>
              <p className="text-sm text-gray-300 font-light drop-shadow-lg">Excellence in Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link to="/" className="px-6 py-3 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium rounded-xl hover:bg-blue-400/10 hover:shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-purple-400 px-6 py-3 font-medium rounded-xl hover:bg-purple-400/10 hover:shadow-lg hover:shadow-purple-400/20 backdrop-blur-sm transition-all duration-300">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-black/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-purple-500/20">
                    <Link to="/dental-implants" className="block px-6 py-4 text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
                      Dental Implants
                    </Link>
                    <Link to="/veneers" className="block px-6 py-4 text-gray-300 hover:bg-purple-400/20 hover:text-purple-400 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
                      Veneers & Smile Design
                    </Link>
                    <Link to="/teeth-whitening" className="block px-6 py-4 text-gray-300 hover:bg-pink-400/20 hover:text-pink-400 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20">
                      Teeth Whitening
                    </Link>
                    <Link to="/smile-makeover" className="block px-6 py-4 text-gray-300 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                      Complete Smile Makeover
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-6 py-3 text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium rounded-xl hover:bg-purple-400/10 hover:shadow-lg hover:shadow-purple-400/20 backdrop-blur-sm">
                  About Dr. Gamani
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-6 py-3 text-gray-300 hover:text-pink-400 transition-all duration-300 font-medium rounded-xl hover:bg-pink-400/10 hover:shadow-lg hover:shadow-pink-400/20 backdrop-blur-sm">
                  Before & After
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-6 py-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium rounded-xl hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm">
                  Testimonials
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <Phone className="h-6 w-6 text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-6 drop-shadow-lg" />
            </div>
            <BookingModal>
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 font-medium border border-white/20 backdrop-blur-sm">
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
