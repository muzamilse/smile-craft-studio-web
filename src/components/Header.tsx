
import { Phone, Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/98 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-b border-slate-200/60 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-amber-50/20 to-white/98"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-10 relative z-10">
        <div className="flex items-center justify-between max-w-8xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4 lg:space-x-8 hover:opacity-95 transition-all duration-700 group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-1000 transform group-hover:scale-105">
              <span className="text-white font-light text-lg sm:text-2xl lg:text-4xl tracking-wider">D</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl lg:text-4xl font-extralight text-slate-900 tracking-tight truncate">Dr Mourad Gamani</h1>
              <p className="text-xs sm:text-sm lg:text-lg text-slate-700 font-light tracking-wide hidden sm:block">Oral Surgery & Aesthetic Dentistry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList className="space-x-2 lg:space-x-6">
              <NavigationMenuItem>
                <Link to="/" className="px-4 lg:px-10 py-3 lg:py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-base lg:text-xl rounded-2xl lg:rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700 hover:text-slate-900 px-4 lg:px-10 py-3 lg:py-5 font-light text-base lg:text-xl rounded-2xl lg:rounded-3xl hover:bg-slate-50/90 transition-all duration-700 tracking-wide">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] lg:w-[420px] p-6 lg:p-10 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                    <Link to="/dental-implants" className="block px-6 lg:px-10 py-4 lg:py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-2xl lg:rounded-3xl font-light text-base lg:text-xl transition-all duration-700 tracking-wide">
                      {t('services.implants')}
                    </Link>
                    <Link to="/veneers" className="block px-6 lg:px-10 py-4 lg:py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-2xl lg:rounded-3xl font-light text-base lg:text-xl transition-all duration-700 tracking-wide">
                      {t('services.veneers')}
                    </Link>
                    <Link to="/teeth-whitening" className="block px-6 lg:px-10 py-4 lg:py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-2xl lg:rounded-3xl font-light text-base lg:text-xl transition-all duration-700 tracking-wide">
                      {t('services.whitening')}
                    </Link>
                    <Link to="/smile-makeover" className="block px-6 lg:px-10 py-4 lg:py-6 text-slate-700 hover:bg-slate-50/90 hover:text-slate-900 rounded-2xl lg:rounded-3xl font-light text-base lg:text-xl transition-all duration-700 tracking-wide">
                      {t('services.makeover')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-4 lg:px-10 py-3 lg:py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-base lg:text-xl rounded-2xl lg:rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-4 lg:px-10 py-3 lg:py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-base lg:text-xl rounded-2xl lg:rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.gallery')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-4 lg:px-10 py-3 lg:py-5 text-slate-700 hover:text-slate-900 transition-all duration-700 font-light text-base lg:text-xl rounded-2xl lg:rounded-3xl hover:bg-slate-50/90 tracking-wide">
                  {t('nav.testimonials')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-10">
            <LanguageSwitcher />
            <div className="hidden sm:flex items-center">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-slate-700 hover:text-slate-900 transition-all duration-700 cursor-pointer transform hover:scale-110" />
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <BookingModal>
                <Button className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-6 lg:px-12 py-3 lg:py-5 rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-2 font-light text-sm lg:text-xl tracking-wide">
                  <Calendar className="h-4 w-4 lg:h-7 lg:w-7 mr-2 lg:mr-4" />
                  {t('nav.consultation')}
                </Button>
              </BookingModal>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200/60 shadow-2xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <div className="space-y-2">
                <p className="px-4 py-2 text-slate-600 font-medium text-sm uppercase tracking-wider">{t('nav.services')}</p>
                <Link 
                  to="/dental-implants" 
                  className="block px-6 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.implants')}
                </Link>
                <Link 
                  to="/veneers" 
                  className="block px-6 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.veneers')}
                </Link>
                <Link 
                  to="/teeth-whitening" 
                  className="block px-6 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.whitening')}
                </Link>
                <Link 
                  to="/smile-makeover" 
                  className="block px-6 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.makeover')}
                </Link>
              </div>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/gallery" 
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.gallery')}
              </Link>
              <Link 
                to="/testimonials" 
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.testimonials')}
              </Link>
              <div className="pt-4 border-t border-slate-200">
                <BookingModal>
                  <Button className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-6 py-4 rounded-xl shadow-xl transition-all duration-700 font-light tracking-wide">
                    <Calendar className="h-5 w-5 mr-3" />
                    {t('nav.consultation')}
                  </Button>
                </BookingModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
