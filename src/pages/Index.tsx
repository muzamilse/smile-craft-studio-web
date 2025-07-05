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
    name: "Sophie Martineau",
    treatment: "Implants Dentaires",
    rating: 5,
    text: "Une transformation complète de mon sourire. L'équipe est exceptionnelle et les résultats dépassent toutes mes attentes. Je recommande vivement.",
    location: "Paris, France",
    date: "Novembre 2024"
  },
  {
    id: 2,
    name: "Jean-Claude Dubois", 
    treatment: "Facettes en Porcelaine",
    rating: 5,
    text: "Un travail d'artiste ! Mes nouvelles facettes sont si naturelles que personne ne peut deviner que j'ai eu un traitement. Service impeccable.",
    location: "Lyon, France",
    date: "Octobre 2024"
  },
  {
    id: 3,
    name: "Marie-Élise Laurent",
    treatment: "Blanchiment Professionnel", 
    rating: 5,
    text: "Résultats extraordinaires en une seule séance. Mon sourire n'a jamais été aussi éclatant. Une expérience de luxe du début à la fin.",
    location: "Marseille, France",
    date: "Septembre 2024"
  }
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-stone-50 relative overflow-hidden">
      {/* Ultra-luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 via-zinc-50/60 to-amber-50/30"></div>
      <div className="absolute top-0 left-1/4 w-[600px] sm:w-[900px] lg:w-[1200px] h-[600px] sm:h-[900px] lg:h-[1200px] bg-gradient-to-br from-amber-300/15 via-gold-200/10 to-transparent rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] sm:w-[700px] lg:w-[900px] h-[450px] sm:h-[700px] lg:h-[900px] bg-gradient-to-tl from-slate-400/15 via-zinc-300/10 to-transparent rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] lg:w-[1600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-to-r from-transparent via-amber-200/8 to-transparent rounded-full blur-[100px] sm:blur-[120px] lg:blur-[140px]"></div>
      <div className="absolute top-10 sm:top-16 lg:top-20 right-10 sm:right-16 lg:right-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-[40px] sm:blur-[60px] lg:blur-[80px]"></div>
      
      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section - Mobile Optimized */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center max-w-8xl mx-auto">
            <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-center lg:text-left">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-amber-100/90 via-gold-50/80 to-amber-50/90 border border-amber-300/40 rounded-full shadow-2xl backdrop-blur-lg">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-amber-700 mr-2 sm:mr-3" />
                  <span className="text-amber-900 font-medium text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase">EXCELLENCE MÉDICALE DEPUIS 2009</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-slate-900 leading-[0.9] sm:leading-[0.85] tracking-tighter">
                  {t('hero.title.advanced')}
                  <span className="block text-slate-800 font-thin italic tracking-tight">{t('hero.title.oral')}</span> 
                  <span className="block text-slate-700 font-light tracking-wide">{t('hero.title.aesthetic')}</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 tracking-wide">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
                <BookingModal>
                  <Button size="lg" className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 text-base sm:text-lg lg:text-xl font-light rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 border border-slate-600/30 backdrop-blur-sm">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 mr-3 sm:mr-4" />
                    {t('hero.cta.schedule')}
                  </Button>
                </BookingModal>
                <Button variant="outline" size="lg" className="border-2 border-slate-400/50 bg-white/90 backdrop-blur-xl text-slate-800 hover:bg-white hover:border-slate-500/60 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 text-base sm:text-lg lg:text-xl font-light rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 mr-3 sm:mr-4" />
                  {t('hero.cta.emergency')}
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-16 pt-8 sm:pt-12 lg:pt-16">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-xl"></div>
                  <span className="text-slate-800 font-light text-sm sm:text-base lg:text-xl tracking-wide">{t('hero.badge.certified')}</span>
                </div>
                <div className="hidden sm:block h-8 sm:h-12 lg:h-16 w-px bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"></div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-xl"></div>
                  <span className="text-slate-800 font-light text-sm sm:text-base lg:text-xl tracking-wide">{t('hero.badge.experience')}</span>
                </div>
                <div className="hidden sm:block h-8 sm:h-12 lg:h-16 w-px bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"></div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-xl"></div>
                  <span className="text-slate-800 font-light text-sm sm:text-base lg:text-xl tracking-wide">{t('hero.badge.procedures')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-8 xl:pl-16">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 via-gold-200/15 to-slate-300/20 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] blur-[60px] sm:blur-[80px] lg:blur-[100px] transform rotate-6"></div>
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:shadow-[0_40px_80px_rgba(0,0,0,0.15)] lg:shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-white/60 backdrop-blur-lg">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src="/lovable-uploads/a349b8ac-3757-463e-a8fb-7433f51b2d65.png" 
                    alt="Dr. Mourad Garin in his modern dental clinic with certifications and advanced dental technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </AspectRatio>
              </div>
              
              {/* Enhanced Sterile Protocol Badge with Star Rating */}
              <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 -left-4 sm:-left-8 lg:-left-12 bg-white/95 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.10)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.12)] p-4 sm:p-6 lg:p-12 max-w-[320px] sm:max-w-md border border-white/90">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 lg:h-11 lg:w-11 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-light text-slate-900 text-sm sm:text-lg lg:text-2xl tracking-wide mb-1">Sterile Protocol</p>
                      <p className="text-slate-600 font-light tracking-wide text-xs sm:text-sm lg:text-lg">Hospital-grade safety standards</p>
                    </div>
                  </div>
                  
                  {/* Star Rating Section */}
                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-current" />
                        ))}
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-current" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />
                      </div>
                      <span className="text-slate-700 font-medium text-sm sm:text-base">4.5</span>
                    </div>
                    <div className="inline-block">
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg">
                        BEST IN AGADIR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Services Section - Mobile Optimized */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white/95 via-zinc-50/95 to-slate-50/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16 sm:mb-24 lg:mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-amber-100/90 via-gold-50/80 to-slate-100/90 border border-amber-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-6 sm:mb-8 lg:mb-10">
                <span className="text-amber-900 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Services d'Excellence</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-slate-900 mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight">
                {t('services.title')} <span className="text-slate-700 italic font-thin">{t('services.title.clinical')}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-8xl mx-auto">
              <Card className="group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] lg:hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-white/90 shadow-xl sm:shadow-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                        alt="Osseointegrated Dental Implants"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-4 sm:mb-6 tracking-wide">{t('services.implants')}</h3>
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      {t('services.implants.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] lg:hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-white/90 shadow-xl sm:shadow-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                        alt="Porcelain Laminate Veneers"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-4 sm:mb-6 tracking-wide">{t('services.veneers')}</h3>
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      {t('services.veneers.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] lg:hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-white/90 shadow-xl sm:shadow-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                        alt="Professional Dental Bleaching"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-4 sm:mb-6 tracking-wide">{t('services.whitening')}</h3>
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      {t('services.whitening.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] lg:hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-white/90 shadow-xl sm:shadow-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/b9e80e27-3c67-40e0-b192-6153d8008aae.png" 
                        alt="Full Mouth Rehabilitation"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-slate-900 mb-4 sm:mb-6 tracking-wide">{t('services.makeover')}</h3>
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light">
                      Comprehensive prosthodontic reconstruction combining multiple treatment modalities.
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-xl sm:rounded-2xl py-4 sm:py-6 lg:py-8 font-light tracking-wide text-sm sm:text-base lg:text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Excellence Section - Mobile Optimized */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-slate-50/95 via-zinc-50/95 to-white/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16 sm:mb-24 lg:mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-slate-100/90 via-zinc-50/80 to-amber-100/90 border border-slate-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-6 sm:mb-8 lg:mb-10">
                <span className="text-slate-900 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Excellence Clinique</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-slate-900 mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight">
                {t('excellence.title')} <span className="text-slate-700 italic font-thin">{t('excellence.title.standards')}</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                {t('excellence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 max-w-7xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 transform group-hover:scale-110 shadow-xl sm:shadow-2xl">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 mb-4 sm:mb-6 lg:mb-8 tracking-wide">{t('excellence.sterilization')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-base sm:text-lg lg:text-xl tracking-wide">
                  {t('excellence.sterilization.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:shadow-[0_30px_60px_rgba(245,158,11,0.15)] sm:group-hover:shadow-[0_40px_80px_rgba(245,158,11,0.2)] transition-all duration-1000 transform group-hover:scale-110 shadow-xl sm:shadow-2xl">
                  <Star className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 mb-4 sm:mb-6 lg:mb-8 tracking-wide">{t('excellence.technology')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-base sm:text-lg lg:text-xl tracking-wide">
                  {t('excellence.technology.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 transform group-hover:scale-110 shadow-xl sm:shadow-2xl">
                  <Award className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900 mb-4 sm:mb-6 lg:mb-8 tracking-wide">{t('excellence.certification')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-base sm:text-lg lg:text-xl tracking-wide">
                  {t('excellence.certification.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Mobile Optimized */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-zinc-50/95 via-slate-50/95 to-white/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16 sm:mb-24 lg:mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-slate-100/90 via-zinc-50/80 to-amber-100/90 border border-slate-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-6 sm:mb-8 lg:mb-10">
                <span className="text-slate-900 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Témoignages de Patients</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-slate-900 mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight">
                Expériences <span className="text-slate-700 italic font-thin">Exceptionnelles</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                Les témoignages authentiques de nos patients qui nous font confiance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-8xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] lg:hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-4 sm:hover:-translate-y-6 border border-white/90 shadow-xl sm:shadow-2xl bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                  <CardContent className="p-6 sm:p-8 lg:p-12 relative">
                    <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500/20 via-amber-600/15 to-amber-700/20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                      <Quote className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-amber-600" />
                    </div>
                    
                    <div className="flex mb-4 sm:mb-6 lg:mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-amber-500 fill-current mr-0.5 sm:mr-1" />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed font-light italic tracking-wide">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div>
                          <p className="font-light text-slate-900 text-base sm:text-lg lg:text-xl tracking-wide mb-1 sm:mb-2">{testimonial.name}</p>
                          <p className="text-amber-600 font-light text-xs sm:text-sm tracking-wide bg-amber-50/80 px-3 sm:px-4 py-1 sm:py-2 rounded-full inline-block">
                            {testimonial.treatment}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-slate-600 font-light text-xs sm:text-sm tracking-wide">{testimonial.location}</p>
                          <p className="text-slate-500 font-light text-[10px] sm:text-xs tracking-wide">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl lg:rounded-[4rem]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/25 via-transparent to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[4rem]"></div>
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-bl from-amber-500/15 to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[4rem] blur-2xl sm:blur-3xl"></div>
              
              <div className="relative z-10 rounded-2xl sm:rounded-3xl lg:rounded-[4rem] p-8 sm:p-12 lg:p-16 xl:p-24 text-center text-white max-w-7xl mx-auto shadow-[0_30px_60px_rgba(0,0,0,0.15)] sm:shadow-[0_40px_80px_rgba(0,0,0,0.18)] lg:shadow-[0_60px_120px_rgba(0,0,0,0.2)]">
                <div className="mb-6 sm:mb-8 lg:mb-10">
                  <div className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/15 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl mb-6 sm:mb-8 lg:mb-10">
                    <span className="text-amber-200 font-light text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Consultation Privée</span>
                  </div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight mb-6 sm:mb-8 lg:mb-10 tracking-tighter leading-tight">
                  {t('cta.title')} <span className="text-slate-300 italic font-thin">{t('cta.title.assessment')}</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-12 lg:mb-16 opacity-95 font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center">
                  <BookingModal>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 px-8 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-12 text-base sm:text-lg lg:text-xl xl:text-2xl font-light rounded-2xl lg:rounded-3xl shadow-[0_20px_40px_rgba(255,255,255,0.15)] sm:shadow-[0_25px_50px_rgba(255,255,255,0.2)] lg:shadow-[0_30px_60px_rgba(255,255,255,0.2)] hover:shadow-[0_30px_60px_rgba(255,255,255,0.25)] sm:hover:shadow-[0_35px_70px_rgba(255,255,255,0.3)] lg:hover:shadow-[0_40px_80px_rgba(255,255,255,0.3)] transition-all duration-1000 transform hover:-translate-y-2 sm:hover:-translate-y-3 tracking-wide">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 mr-3 sm:mr-4 lg:mr-5" />
                      {t('cta.book')}
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" className="border-2 border-white/60 bg-white/15 backdrop-blur-lg text-white hover:bg-white/25 hover:border-white/80 px-8 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-12 text-base sm:text-lg lg:text-xl xl:text-2xl font-light rounded-2xl lg:rounded-3xl transition-all duration-1000 tracking-wide">
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
