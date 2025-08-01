
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
    <header className="bg-black/98 backdrop-blur-2xl shadow-[0_20px_40px_rgba(212,175,55,0.2)] border-b border-yellow-500/40 sticky top-0 z-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/98 via-yellow-900/10 to-black/98"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 relative z-10">
        <div className="flex items-center justify-between max-w-full mx-auto">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 hover:opacity-95 transition-all duration-700 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.4)] transition-all duration-1000 transform group-hover:scale-105 luxury-glow overflow-hidden bg-white">
              <img 
                src="/lovable-uploads/e8af8297-0467-4e04-b16c-180abc2d02fc.png" 
                alt="Dr Gamani Dental Clinic Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg lg:text-xl font-extralight text-yellow-300 tracking-tight truncate luxury-text-gradient">Dr Gamani</h1>
              <p className="text-xs sm:text-sm lg:text-base text-yellow-200 font-light tracking-wide hidden sm:block">Oral Surgery & Aesthetic Dentistry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList className="space-x-1 lg:space-x-2">
              <NavigationMenuItem>
                <Link to="/" className="px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:text-yellow-100 transition-all duration-700 font-light text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-yellow-900/20 tracking-wide">
                  {t('nav.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-yellow-200 hover:text-yellow-100 px-3 lg:px-4 py-2 lg:py-3 font-light text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-yellow-900/20 transition-all duration-700 tracking-wide">
                  {t('nav.services')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] lg:w-[320px] p-4 lg:p-6 bg-black/98 backdrop-blur-2xl border border-yellow-500/40 rounded-xl lg:rounded-2xl shadow-[0_40px_80px_rgba(212,175,55,0.3)]">
                    <Link to="/dental-implants" className="block px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:bg-yellow-900/20 hover:text-yellow-100 rounded-lg lg:rounded-xl font-light text-sm lg:text-base transition-all duration-700 tracking-wide">
                      {t('services.implants')}
                    </Link>
                    <Link to="/veneers" className="block px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:bg-yellow-900/20 hover:text-yellow-100 rounded-lg lg:rounded-xl font-light text-sm lg:text-base transition-all duration-700 tracking-wide">
                      {t('services.veneers')}
                    </Link>
                    <Link to="/teeth-whitening" className="block px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:bg-yellow-900/20 hover:text-yellow-100 rounded-lg lg:rounded-xl font-light text-sm lg:text-base transition-all duration-700 tracking-wide">
                      {t('services.whitening')}
                    </Link>
                    <Link to="/smile-makeover" className="block px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:bg-yellow-900/20 hover:text-yellow-100 rounded-lg lg:rounded-xl font-light text-sm lg:text-base transition-all duration-700 tracking-wide">
                      {t('services.makeover')}
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:text-yellow-100 transition-all duration-700 font-light text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-yellow-900/20 tracking-wide">
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/gallery" className="px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:text-yellow-100 transition-all duration-700 font-light text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-yellow-900/20 tracking-wide">
                  {t('nav.gallery')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className="px-3 lg:px-4 py-2 lg:py-3 text-yellow-200 hover:text-yellow-100 transition-all duration-700 font-light text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-yellow-900/20 tracking-wide">
                  {t('nav.testimonials')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            <LanguageSwitcher />
            <div className="hidden sm:flex items-center">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-300 hover:text-yellow-100 transition-all duration-700 cursor-pointer transform hover:scale-110" />
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <BookingModal>
                <Button className="gold-gradient hover:from-yellow-600 hover:to-yellow-500 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl shadow-2xl hover:shadow-[0_30px_60px_rgba(212,175,55,0.4)] transition-all duration-1000 transform hover:-translate-y-1 font-light text-sm lg:text-base tracking-wide luxury-glow">
                  <Calendar className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                  {t('nav.consultation')}
                </Button>
              </BookingModal>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden p-2 text-yellow-300 hover:text-yellow-100 hover:bg-yellow-900/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-2xl border-b border-yellow-500/40 shadow-2xl">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <div className="space-y-1">
                <p className="px-3 py-1 text-yellow-300 font-medium text-xs uppercase tracking-wider">{t('nav.services')}</p>
                <Link 
                  to="/dental-implants" 
                  className="block px-4 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.implants')}
                </Link>
                <Link 
                  to="/veneers" 
                  className="block px-4 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.veneers')}
                </Link>
                <Link 
                  to="/teeth-whitening" 
                  className="block px-4 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.whitening')}
                </Link>
                <Link 
                  to="/smile-makeover" 
                  className="block px-4 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('services.makeover')}
                </Link>
              </div>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/gallery" 
                className="block px-3 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.gallery')}
              </Link>
              <Link 
                to="/testimonials" 
                className="block px-3 py-2 text-yellow-200 hover:text-yellow-100 hover:bg-yellow-900/20 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.testimonials')}
              </Link>
              <div className="pt-2 border-t border-yellow-500/40">
                <BookingModal>
                  <Button className="w-full gold-gradient hover:from-yellow-600 hover:to-yellow-500 text-black px-4 py-3 rounded-lg shadow-xl transition-all duration-700 font-light tracking-wide luxury-glow">
                    <Calendar className="h-4 w-4 mr-2" />
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
