
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
    <header className="bg-white/98 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-b border-slate-200/60 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-amber-50/20 to-white/98"></div>
      
      <div className="container mx-auto px-12 py-10 relative z-10">
        <div className="flex items-center justify-between max-w-8xl mx-auto">
          <Link to="/" className="flex items-center space-x-8 hover:opacity-95 transition-all duration-700 group">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-1000 transform group-hover:scale-105">
              <span className="text-white font-light text-4xl tracking-wider">D</span>
            </div>
            <div>
              <h1 className="text-4xl font-extralight text-slate-900 tracking-tight">Dr Mourad Gamani</h1>
              <p className="text-lg text-slate-700 font-light tracking-wide">Oral Surgery & Aesthetic Dentistry</p>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Link to="/" className="px-10 py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-xl rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-slate-900 px-10 py-5 font-light text-xl rounded-3xl hover:bg-slate-50/90 transition-all duration-700 tracking-wide">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-10 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                    <Link to="/dental-implants" className="block px-10 py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-3xl font-light text-xl transition-all duration-700 tracking-wide">
                      {t('services.implants')}
                    </Link>
                    <Link to="/veneers" className="block px-10 py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-3xl font-light text-xl transition-all duration-700 tracking-wide">
                      {t('services.veneers')}
                    </Link>
                    <Link to="/teeth-whitening" className="block px-10 py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-3xl font-light text-xl transition-all duration-700 tracking-wide">
                      {t('services.whitening')}
                    </Link>
                    <Link to="/smile-makeover" className="block px-10 py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-3xl font-light text-xl transition-all duration-700 tracking-wide">
                      {t('services.makeover')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-10 py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-xl rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-10 py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-xl rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.gallery')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-10 py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-xl rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.testimonials')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-10">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center">
              <Phone className="h-8 w-8 text-slate-700 hover:text-slate-900 transition-all duration-700 cursor-pointer transform hover:scale-110" />
            </div>
            <BookingModal>
              <Button className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-12 py-5 rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-2 font-light text-xl tracking-wide">
                <Calendar className="h-7 w-7 mr-4" />
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
