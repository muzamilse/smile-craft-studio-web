
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Star, Phone, Shield, Award, Users, Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    id: 1,
    name: "Aicha Benali",
    treatment: "Implants Dentaires",
    rating: 5,
    text: "Une transformation complète de mon sourire. L'équipe est exceptionnelle et les résultats dépassent toutes mes attentes. Je recommande vivement.",
    location: "Agadir, Morocco",
    date: "Novembre 2024"
  },
  {
    id: 2,
    name: "Youssef El Moutaouakil", 
    treatment: "Facettes en Porcelaine",
    rating: 5,
    text: "Un travail d'artiste ! Mes nouvelles facettes sont si naturelles que personne ne peut deviner que j'ai eu un traitement. Service impeccable.",
    location: "Agadir, Morocco",
    date: "Octobre 2024"
  },
  {
    id: 3,
    name: "Khadija Benjelloun",
    treatment: "Blanchiment Professionnel", 
    rating: 5,
    text: "Résultats extraordinaires en une séance. Mon sourire n'a jamais été aussi éclatant. Une expérience de luxe du début à la fin.",
    location: "Agadir, Morocco",
    date: "Septembre 2024"
  }
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen luxury-gradient relative overflow-hidden">
      {/* Ultra-luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-yellow-900/10 to-black/40"></div>
      <div className="absolute top-0 left-1/4 w-[600px] sm:w-[900px] lg:w-[1200px] h-[600px] sm:h-[900px] lg:h-[1200px] bg-gradient-to-br from-yellow-600/20 via-amber-500/15 to-transparent rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] sm:w-[700px] lg:w-[900px] h-[450px] sm:h-[700px] lg:h-[900px] bg-gradient-to-tl from-yellow-800/25 via-amber-600/20 to-transparent rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] lg:w-[1600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-to-r from-transparent via-yellow-700/12 to-transparent rounded-full blur-[100px] sm:blur-[120px] lg:blur-[140px]"></div>
      <div className="absolute top-10 sm:top-16 lg:top-20 right-10 sm:right-16 lg:right-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full blur-[40px] sm:blur-[60px] lg:blur-[80px]"></div>
      
      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section - Ultra Luxury */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center max-w-8xl mx-auto">
            <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-center lg:text-left">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-yellow-600/30 via-amber-500/25 to-yellow-700/30 border border-yellow-500/60 rounded-full shadow-2xl backdrop-blur-lg luxury-glow">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 mr-2 sm:mr-3" />
                  <span className="text-yellow-300 font-medium text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase">EXCELLENCE MÉDICALE DEPUIS 2009</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-yellow-400 leading-[0.9] sm:leading-[0.85] tracking-tighter luxury-text-gradient">
                  {t('hero.title.advanced')}
                  <span className="block text-yellow-300 font-thin italic tracking-tight">{t('hero.title.oral')}</span> 
                  <span className="block text-yellow-200 font-light tracking-wide">{t('hero.title.aesthetic')}</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-yellow-100 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 tracking-wide">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
                <BookingModal>
                  <Button size="lg" className="gold-gradient hover:from-yellow-600 hover:to-yellow-500 text-black px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 text-base sm:text-lg lg:text-xl font-light rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-[0_30px_60px_rgba(212,175,55,0.4)] transition-all duration-700 transform hover:-translate-y-3 border border-yellow-500/30 backdrop-blur-sm luxury-glow">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 mr-3 sm:mr-4" />
                    {t('hero.cta.schedule')}
                  </Button>
                </BookingModal>
                <Button variant="outline" size="lg" className="border-2 border-yellow-500/60 bg-black/60 backdrop-blur-xl text-yellow-300 hover:bg-yellow-900/30 hover:border-yellow-400/80 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 text-base sm:text-lg lg:text-xl font-light rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 mr-3 sm:mr-4" />
                  {t('hero.cta.emergency')}
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-16 pt-8 sm:pt-12 lg:pt-16">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 gold-gradient rounded-full shadow-xl luxury-glow"></div>
                  <span className="text-yellow-200 font-light text-sm sm:text-base lg:text-xl tracking-wide">{t('hero.badge.certified')}</span>
                </div>
                <div className="hidden sm:block h-8 sm:h-12 lg:h-16 w-px bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent"></div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 gold-gradient rounded-full shadow-xl luxury-glow"></div>
                  <span className="text-yellow-200 font-light text-sm sm:text-base lg:text-xl tracking-wide">{t('hero.badge.experience')}</span>
                </div>
                <div className="hidden sm:block h-8 sm:h-12 lg:h-16 w-px bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent"></div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 gold-gradient rounded-full shadow-xl luxury-glow"></div>
                  <span className="text-yellow-200 font-light text-sm sm:text-base lg:text-xl tracking-wide">{t('hero.badge.procedures')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-8 xl:pl-16">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-amber-500/25 to-yellow-700/30 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] blur-[60px] sm:blur-[80px] lg:blur-[100px] transform rotate-6 luxury-glow"></div>
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:shadow-[0_40px_80px_rgba(212,175,55,0.4)] lg:shadow-[0_50px_100px_rgba(212,175,55,0.4)] border border-yellow-500/60 backdrop-blur-lg">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src="/lovable-uploads/a349b8ac-3757-463e-a8fb-7433f51b2d65.png" 
                    alt="Dr. Mourad Garin in his modern dental clinic with certifications and advanced dental technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </AspectRatio>
              </div>
              
              {/* Enhanced Ultra-Professional Sterile Protocol Badge - Mobile Optimized */}
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-10 -left-2 sm:-left-6 lg:-left-10 bg-gradient-to-br from-slate-950/98 via-gray-950/98 to-black/98 backdrop-blur-3xl rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.8)] sm:shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-yellow-500/40 luxury-glow p-3 sm:p-6 lg:p-10 w-[220px] sm:max-w-[280px] lg:max-w-[360px]">
                <div className="space-y-2 sm:space-y-4 lg:space-y-6">
                  {/* Premium Header Section */}
                  <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
                    <div className="relative mx-auto w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18">
                      <div className="absolute inset-0 gold-gradient rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl luxury-glow"></div>
                      <div className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                        <Shield className="h-5 w-5 sm:h-7 sm:w-7 lg:h-9 lg:w-9 text-black drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-sm sm:text-lg lg:text-2xl font-semibold text-yellow-300 tracking-wide">
                        Sterile Protocol
                      </h3>
                      <p className="text-yellow-200/90 text-xs sm:text-sm lg:text-base font-light leading-relaxed">
                        Hospital-grade safety standards
                      </p>
                    </div>
                  </div>
                  
                  {/* Elegant Divider */}
                  <div className="relative py-1 sm:py-2 lg:py-3">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full shadow-lg luxury-glow"></div>
                    </div>
                  </div>
                  
                  {/* Professional Rating Display */}
                  <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
                    <div className="flex justify-center items-center space-x-1 sm:space-x-2 lg:space-x-3">
                      <div className="flex items-center space-x-0.5 sm:space-x-1">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current drop-shadow-md" />
                        ))}
                        <div className="relative">
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-400/30" />
                          <div className="absolute inset-0 overflow-hidden w-1/2">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current drop-shadow-md" />
                          </div>
                        </div>
                      </div>
                      <span className="text-lg sm:text-xl lg:text-3xl font-light text-yellow-300 tracking-wide">
                        4.5
                      </span>
                    </div>
                    
                    <div className="inline-flex items-center justify-center">
                      <div className="gold-gradient px-2 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-full shadow-2xl luxury-glow border border-yellow-500/30">
                        <span className="text-black text-[10px] sm:text-xs lg:text-base font-semibold tracking-[0.1em] uppercase">
                          Best in Agadir
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Bottom Accent */}
                  <div className="flex justify-center pt-1 sm:pt-2 lg:pt-3">
                    <div className="w-6 sm:w-8 lg:w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent rounded-full shadow-md luxury-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Services Section - Ultra Luxury */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16 sm:mb-24 lg:mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-yellow-600/30 via-amber-500/25 to-yellow-700/30 border border-yellow-500/60 rounded-full shadow-2xl backdrop-blur-lg mb-6 sm:mb-8 lg:mb-10 luxury-glow">
                <span className="text-yellow-300 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Services d'Excellence</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-yellow-400 mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight luxury-text-gradient">
                {t('services.title')} <span className="text-yellow-300 italic font-thin">{t('services.title.clinical')}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-100 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-8xl mx-auto">
              <Card className="group hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] lg:hover:shadow-[0_50px_100px_rgba(212,175,55,0.4)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-yellow-500/60 shadow-xl sm:shadow-2xl bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-yellow-400/80 luxury-glow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                        alt="Osseointegrated Dental Implants"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-yellow-300 mb-4 sm:mb-6 tracking-wide">{t('services.implants')}</h3>
                    <p className="text-yellow-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      {t('services.implants.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-yellow-500/60 bg-black/60 text-yellow-300 hover:bg-yellow-900/30 hover:border-yellow-400/80 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] lg:hover:shadow-[0_50px_100px_rgba(212,175,55,0.4)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-yellow-500/60 shadow-xl sm:shadow-2xl bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-yellow-400/80 luxury-glow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                        alt="Porcelain Laminate Veneers"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-yellow-300 mb-4 sm:mb-6 tracking-wide">{t('services.veneers')}</h3>
                    <p className="text-yellow-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      {t('services.veneers.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-yellow-500/60 bg-black/60 text-yellow-300 hover:bg-yellow-900/30 hover:border-yellow-400/80 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] lg:hover:shadow-[0_50px_100px_rgba(212,175,55,0.4)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-yellow-500/60 shadow-xl sm:shadow-2xl bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-yellow-400/80 luxury-glow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                        alt="Professional Dental Bleaching"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-yellow-300 mb-4 sm:mb-6 tracking-wide">{t('services.whitening')}</h3>
                    <p className="text-yellow-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      {t('services.whitening.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-yellow-500/60 bg-black/60 text-yellow-300 hover:bg-yellow-900/30 hover:border-yellow-400/80 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] lg:hover:shadow-[0_50px_100px_rgba(212,175,55,0.4)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-yellow-500/60 shadow-xl sm:shadow-2xl bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-yellow-400/80 luxury-glow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/df9cc25c-4666-48f4-8fc0-fcb208a18eb2.png" 
                        alt="Full Mouth Rehabilitation - Before and After"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-yellow-300 mb-4 sm:mb-6 tracking-wide">{t('services.makeover')}</h3>
                    <p className="text-yellow-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      Comprehensive prosthodontic reconstruction combining multiple treatment modalities.
                    </p>
                    <Button variant="outline" className="w-full border-2 border-yellow-500/60 bg-black/60 text-yellow-300 hover:bg-yellow-900/30 hover:border-yellow-400/80 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Excellence Section - Ultra Luxury */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16 sm:mb-24 lg:mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-yellow-600/30 via-amber-500/25 to-yellow-700/30 border border-yellow-500/60 rounded-full shadow-2xl backdrop-blur-lg mb-6 sm:mb-8 lg:mb-10 luxury-glow">
                <span className="text-yellow-300 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Excellence Clinique</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-yellow-400 mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight luxury-text-gradient">
                {t('excellence.title')} <span className="text-yellow-300 italic font-thin">{t('excellence.title.standards')}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-100 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                {t('excellence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 max-w-7xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-black via-gray-800 to-black rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] transition-all duration-1000 transform group-hover:scale-110 shadow-xl sm:shadow-2xl border border-yellow-500/60 luxury-glow">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-yellow-300 mb-4 sm:mb-6 lg:mb-8 tracking-wide">{t('excellence.sterilization')}</h3>
                <p className="text-yellow-100 leading-relaxed font-light text-base sm:text-lg lg:text-xl tracking-wide">
                  {t('excellence.sterilization.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 gold-gradient rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.5)] sm:group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.6)] transition-all duration-1000 transform group-hover:scale-110 shadow-xl sm:shadow-2xl luxury-glow">
                  <Star className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-yellow-300 mb-4 sm:mb-6 lg:mb-8 tracking-wide">{t('excellence.technology')}</h3>
                <p className="text-yellow-100 leading-relaxed font-light text-base sm:text-lg lg:text-xl tracking-wide">
                  {t('excellence.technology.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-black via-gray-800 to-black rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] transition-all duration-1000 transform group-hover:scale-110 shadow-xl sm:shadow-2xl border border-yellow-500/60 luxury-glow">
                  <Award className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-yellow-300 mb-4 sm:mb-6 lg:mb-8 tracking-wide">{t('excellence.certification')}</h3>
                <p className="text-yellow-100 leading-relaxed font-light text-base sm:text-lg lg:text-xl tracking-wide">
                  {t('excellence.certification.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Ultra Luxury */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16 sm:mb-24 lg:mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-yellow-600/30 via-amber-500/25 to-yellow-700/30 border border-yellow-500/60 rounded-full shadow-2xl backdrop-blur-lg mb-6 sm:mb-8 lg:mb-10 luxury-glow">
                <span className="text-yellow-300 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Témoignages de Patients</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-yellow-400 mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight luxury-text-gradient">
                Expériences <span className="text-yellow-300 italic font-thin">Exceptionnelles</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-100 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                Les témoignages authentiques de nos patients qui nous font confiance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-8xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="group hover:shadow-[0_30px_60px_rgba(212,175,55,0.3)] sm:hover:shadow-[0_40px_80px_rgba(212,175,55,0.4)] lg:hover:shadow-[0_50px_100px_rgba(212,175,55,0.4)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-yellow-500/60 shadow-xl sm:shadow-2xl bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-yellow-400/80 luxury-glow">
                  <CardContent className="p-6 sm:p-8 lg:p-12 relative">
                    <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-600/30 via-amber-500/25 to-yellow-700/30 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl luxury-glow">
                      <Quote className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-400" />
                    </div>
                    
                    <div className="flex mb-4 sm:mb-6 lg:mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-400 fill-current mr-0.5 sm:mr-1" />
                      ))}
                    </div>
                    
                    <p className="text-yellow-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light italic tracking-wide">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div>
                          <p className="font-light text-yellow-300 text-base sm:text-lg lg:text-xl tracking-wide mb-1 sm:mb-2">{testimonial.name}</p>
                          <p className="text-yellow-400 font-light text-xs sm:text-sm tracking-wide bg-yellow-600/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full inline-block border border-yellow-500/40">
                            {testimonial.treatment}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-yellow-200 font-light text-xs sm:text-sm tracking-wide">{testimonial.location}</p>
                          <p className="text-yellow-300 font-light text-[10px] sm:text-xs tracking-wide">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Ultra Luxury */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl sm:rounded-3xl lg:rounded-[4rem]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/25 via-transparent to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[4rem]"></div>
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-yellow-500/15 to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[4rem] blur-2xl sm:blur-3xl"></div>
              
              <div className="relative z-10 rounded-2xl sm:rounded-3xl lg:rounded-[4rem] p-8 sm:p-12 lg:p-16 xl:p-24 text-center text-yellow-100 max-w-7xl mx-auto shadow-[0_30px_60px_rgba(212,175,55,0.2)] sm:shadow-[0_40px_80px_rgba(212,175,55,0.3)] lg:shadow-[0_60px_120px_rgba(212,175,55,0.3)] border border-yellow-500/60 luxury-glow">
                <div className="mb-6 sm:mb-8 lg:mb-10">
                  <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-yellow-600/20 backdrop-blur-lg border border-yellow-500/40 rounded-full shadow-2xl mb-6 sm:mb-8 lg:mb-10 luxury-glow">
                    <span className="text-yellow-300 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Consultation Privée</span>
                  </div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight luxury-text-gradient">
                  {t('cta.title')} <span className="text-yellow-300 italic font-thin">{t('cta.title.assessment')}</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-12 lg:mb-16 opacity-95 font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center">
                  <BookingModal>
                    <Button size="lg" className="gold-gradient text-black hover:from-yellow-600 hover:to-yellow-500 px-8 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-12 text-base sm:text-lg lg:text-xl xl:text-2xl font-light rounded-2xl lg:rounded-3xl shadow-[0_20px_40px_rgba(212,175,55,0.3)] sm:shadow-[0_25px_50px_rgba(212,175,55,0.4)] lg:shadow-[0_30px_60px_rgba(212,175,55,0.4)] hover:shadow-[0_35px_70px_rgba(212,175,55,0.5)] transition-all duration-1000 transform hover:-translate-y-2 sm:hover:-translate-y-3 tracking-wide luxury-glow">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 mr-3 sm:mr-4 lg:mr-5" />
                      {t('cta.book')}
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" className="border-2 border-yellow-500/60 bg-black/30 backdrop-blur-lg text-yellow-300 hover:bg-yellow-900/25 hover:border-yellow-400/80 px-8 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-12 text-base sm:text-lg lg:text-xl xl:text-2xl font-light rounded-2xl lg:rounded-3xl transition-all duration-1000 tracking-wide">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 mr-3 sm:mr-4 lg:mr-5" />
                    {t('cta.emergency')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
