
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
    <header className="bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-amber-50/30 to-white/95"></div>
      
      <div className="container mx-auto px-8 py-8 relative z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-6 hover:opacity-90 transition-all duration-500 group">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-105">
              <span className="text-white font-light text-3xl tracking-wide">D</span>
            </div>
            <div>
              <h1 className="text-3xl font-light text-slate-900 tracking-tight">Dr Mourad Gamani</h1>
              <p className="text-base text-slate-700 font-light tracking-wide">Oral Surgery & Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Link to="/" className="px-8 py-4 text-slate-700 hover:text-slate-900 transition-all duration-500 font-light text-lg rounded-2xl hover:bg-slate-50/80 tracking-wide">
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-slate-900 px-8 py-4 font-light text-lg rounded-2xl hover:bg-slate-50/80 transition-all duration-500 tracking-wide">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-8 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl">
                    <Link to="/dental-implants" className="block px-8 py-5 text-slate-700 hover:bg-slate-50/80 hover:text-slate-900 rounded-2xl font-light text-lg transition-all duration-500 tracking-wide">
                      {t('services.implants')}
                    </Link>
                    <Link to="/veneers" className="block px-8 py-5 text-slate-700 hover:bg-slate-50/80 hover:text-slate-900 rounded-2xl font-light text-lg transition-all duration-500 tracking-wide">
                      {t('services.veneers')}
                    </Link>
                    <Link to="/teeth-whitening" className="block px-8 py-5 text-slate-700 hover:bg-slate-50/80 hover:text-slate-900 rounded-2xl font-light text-lg transition-all duration-500 tracking-wide">
                      {t('services.whitening')}
                    </Link>
                    <Link to="/smile-makeover" className="block px-8 py-5 text-slate-700 hover:bg-slate-50/80 hover:text-slate-900 rounded-2xl font-light text-lg transition-all duration-500 tracking-wide">
                      {t('services.makeover')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-8 py-4 text-slate-700 hover:text-slate-900 transition-all duration-500 font-light text-lg rounded-2xl hover:bg-slate-50/80 tracking-wide">
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-8 py-4 text-slate-700 hover:text-slate-900 transition-all duration-500 font-light text-lg rounded-2xl hover:bg-slate-50/80 tracking-wide">
                  {t('nav.gallery')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-8 py-4 text-slate-700 hover:text-slate-900 transition-all duration-500 font-light text-lg rounded-2xl hover:bg-slate-50/80 tracking-wide">
                  {t('nav.testimonials')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-8">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center">
              <Phone className="h-7 w-7 text-slate-700 hover:text-slate-900 transition-all duration-500 cursor-pointer transform hover:scale-110" />
            </div>
            <BookingModal>
              <Button className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 font-light text-lg tracking-wide">
                <Calendar className="h-6 w-6 mr-3" />
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
