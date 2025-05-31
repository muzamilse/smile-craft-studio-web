
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200 sticky top-0 z-50 relative">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-all duration-300 group">
            <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-800 tracking-tight">Dr Mourad Gamani</h1>
              <p className="text-sm text-slate-600 font-medium">Oral Surgery & Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link to="/" className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-all duration-300 font-medium rounded-lg hover:bg-slate-50">
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-600 hover:text-slate-800 px-6 py-3 font-medium rounded-lg hover:bg-slate-50 transition-all duration-300">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-6 bg-white border border-slate-200 rounded-2xl shadow-xl">
                    <Link to="/dental-implants" className="block px-6 py-4 text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-all duration-300">
                      {t('services.implants')}
                    </Link>
                    <Link to="/veneers" className="block px-6 py-4 text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-all duration-300">
                      {t('services.veneers')}
                    </Link>
                    <Link to="/teeth-whitening" className="block px-6 py-4 text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-all duration-300">
                      {t('services.whitening')}
                    </Link>
                    <Link to="/smile-makeover" className="block px-6 py-4 text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl font-medium transition-all duration-300">
                      {t('services.makeover')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-all duration-300 font-medium rounded-lg hover:bg-slate-50">
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-all duration-300 font-medium rounded-lg hover:bg-slate-50">
                  {t('nav.gallery')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-all duration-300 font-medium rounded-lg hover:bg-slate-50">
                  {t('nav.testimonials')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center">
              <Phone className="h-6 w-6 text-slate-600 hover:text-slate-800 transition-all duration-300 cursor-pointer transform hover:scale-110" />
            </div>
            <BookingModal>
              <Button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 font-medium">
                <Calendar className="h-5 w-5 mr-2" />
                {t('nav.consultation')}
              </Button>
            </BookingModal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
