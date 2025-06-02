import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Star, Phone, Shield, Award, Users, Quote } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const beforeAfterCases = [
    {
      id: 1,
      title: "Complete Smile Transformation",
      description: "Full mouth rehabilitation with dental implants and porcelain crowns",
      beforeImage: "/lovable-uploads/fddbc98c-a481-4d7d-b176-d8b95960a6d3.png",
      afterImage: "/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png",
      treatment: "Dental Implants + Crowns",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Porcelain Veneers Makeover",
      description: "Natural-looking smile enhancement with premium porcelain veneers",
      beforeImage: "/lovable-uploads/00d8ea99-d8c5-43e3-9228-11a1c8c5a17c.png",
      afterImage: "/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png",
      treatment: "Porcelain Veneers",
      duration: "3 weeks"
    },
    {
      id: 3,
      title: "Professional Whitening Results",
      description: "Advanced teeth whitening for a brilliant, confident smile",
      beforeImage: "/lovable-uploads/32fbd011-09a3-46eb-a20d-5b769b9b08af.png",
      afterImage: "/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png",
      treatment: "Professional Whitening",
      duration: "1 session"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-stone-50 relative overflow-hidden">
      {/* Ultra-luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 via-zinc-50/60 to-amber-50/30"></div>
      <div className="absolute top-0 left-1/4 w-[1200px] h-[1200px] bg-gradient-to-br from-amber-300/15 via-gold-200/10 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[900px] h-[900px] bg-gradient-to-tl from-slate-400/15 via-zinc-300/10 to-transparent rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[600px] bg-gradient-to-r from-transparent via-amber-200/8 to-transparent rounded-full blur-[140px]"></div>
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-[80px]"></div>
      
      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="container mx-auto px-12 py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-8xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-10">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-100/90 via-gold-50/80 to-amber-50/90 border border-amber-300/40 rounded-full shadow-2xl backdrop-blur-lg">
                  <Star className="h-6 w-6 text-amber-700 mr-3" />
                  <span className="text-amber-900 font-medium text-sm tracking-[0.25em] uppercase">EXCELLENCE MÉDICALE DEPUIS 2009</span>
                </div>
                
                <h1 className="text-7xl lg:text-8xl font-extralight text-slate-900 leading-[0.85] tracking-tighter">
                  {t('hero.title.advanced')}
                  <span className="block text-slate-800 font-thin italic tracking-tight">{t('hero.title.oral')}</span> 
                  <span className="block text-slate-700 font-light tracking-wide">{t('hero.title.aesthetic')}</span>
                </h1>
                
                <p className="text-2xl text-slate-700 leading-relaxed font-light max-w-2xl tracking-wide">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <BookingModal>
                  <Button size="lg" className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-16 py-10 text-xl font-light rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 border border-slate-600/30 backdrop-blur-sm">
                    <Calendar className="h-7 w-7 mr-4" />
                    {t('hero.cta.schedule')}
                  </Button>
                </BookingModal>
                <Button variant="outline" size="lg" className="border-2 border-slate-400/50 bg-white/90 backdrop-blur-xl text-slate-800 hover:bg-white hover:border-slate-500/60 px-16 py-10 text-xl font-light rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                  <Phone className="h-7 w-7 mr-4" />
                  {t('hero.cta.emergency')}
                </Button>
              </div>
              
              <div className="flex items-center space-x-16 pt-16">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-xl"></div>
                  <span className="text-slate-800 font-light text-xl tracking-wide">{t('hero.badge.certified')}</span>
                </div>
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-xl"></div>
                  <span className="text-slate-800 font-light text-xl tracking-wide">{t('hero.badge.experience')}</span>
                </div>
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"></div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-xl"></div>
                  <span className="text-slate-800 font-light text-xl tracking-wide">{t('hero.badge.procedures')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-16">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 via-gold-200/15 to-slate-300/20 rounded-[3rem] blur-[100px] transform rotate-6"></div>
              <div className="relative overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-white/60 backdrop-blur-lg">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src="/lovable-uploads/ff81044a-e72d-416c-b466-28e4991ab4fc.png" 
                    alt="Professional dental surgery in sterile clinical environment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </AspectRatio>
              </div>
              <div className="absolute -bottom-16 -left-12 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] p-12 max-w-sm border border-white/90">
                <div className="flex items-center space-x-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl flex items-center justify-center shadow-2xl">
                    <CheckCircle className="h-11 w-11 text-white" />
                  </div>
                  <div>
                    <p className="font-light text-slate-900 text-2xl tracking-wide">{t('hero.badge.sterile')}</p>
                    <p className="text-slate-600 font-light tracking-wide text-lg">{t('hero.badge.safety')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Services Section */}
        <section className="py-40 bg-gradient-to-b from-white/95 via-zinc-50/95 to-slate-50/95 backdrop-blur-lg">
          <div className="container mx-auto px-12">
            <div className="text-center mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-100/90 via-gold-50/80 to-slate-100/90 border border-amber-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-10">
                <span className="text-amber-900 font-light text-sm tracking-[0.3em] uppercase">Services d'Excellence</span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-extralight text-slate-900 mb-10 tracking-tighter leading-tight">
                {t('services.title')} <span className="text-slate-700 italic font-thin">{t('services.title.clinical')}</span>
              </h2>
              <p className="text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-8xl mx-auto">
              <Card className="group hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-6 border border-white/90 shadow-2xl bg-white/95 backdrop-blur-lg rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
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
                  <div className="p-12">
                    <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">{t('services.implants')}</h3>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                      {t('services.implants.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-2xl py-8 font-light tracking-wide text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-6 border border-white/90 shadow-2xl bg-white/95 backdrop-blur-lg rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
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
                  <div className="p-12">
                    <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">{t('services.veneers')}</h3>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                      {t('services.veneers.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-2xl py-8 font-light tracking-wide text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-6 border border-white/90 shadow-2xl bg-white/95 backdrop-blur-lg rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
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
                  <div className="p-12">
                    <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">{t('services.whitening')}</h3>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                      {t('services.whitening.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-2xl py-8 font-light tracking-wide text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-6 border border-white/90 shadow-2xl bg-white/95 backdrop-blur-lg rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png" 
                        alt="Full Mouth Rehabilitation"
                        className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-115"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-12">
                    <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">{t('services.makeover')}</h3>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                      {t('services.makeover.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-400/50 bg-white/60 text-slate-800 hover:bg-slate-50 hover:border-amber-400/60 transition-all duration-700 rounded-2xl py-8 font-light tracking-wide text-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Excellence Section */}
        <section className="py-40 bg-gradient-to-b from-slate-50/95 via-zinc-50/95 to-white/95 backdrop-blur-lg">
          <div className="container mx-auto px-12">
            <div className="text-center mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-slate-100/90 via-zinc-50/80 to-amber-100/90 border border-slate-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-10">
                <span className="text-slate-900 font-light text-sm tracking-[0.3em] uppercase">Excellence Clinique</span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-extralight text-slate-900 mb-10 tracking-tighter leading-tight">
                {t('excellence.title')} <span className="text-slate-700 italic font-thin">{t('excellence.title.standards')}</span>
              </h2>
              <p className="text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                {t('excellence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto">
              <div className="text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 transform group-hover:scale-110 shadow-2xl">
                  <Shield className="h-20 w-20 text-white" />
                </div>
                <h3 className="text-3xl font-light text-slate-900 mb-8 tracking-wide">{t('excellence.sterilization')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-xl tracking-wide">
                  {t('excellence.sterilization.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:shadow-[0_40px_80px_rgba(245,158,11,0.2)] transition-all duration-1000 transform group-hover:scale-110 shadow-2xl">
                  <Star className="h-20 w-20 text-white" />
                </div>
                <h3 className="text-3xl font-light text-slate-900 mb-8 tracking-wide">{t('excellence.technology')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-xl tracking-wide">
                  {t('excellence.technology.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 transform group-hover:scale-110 shadow-2xl">
                  <Award className="h-20 w-20 text-white" />
                </div>
                <h3 className="text-3xl font-light text-slate-900 mb-8 tracking-wide">{t('excellence.certification')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-xl tracking-wide">
                  {t('excellence.certification.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section - Ultra Luxury */}
        <section className="py-40 bg-gradient-to-b from-white/95 via-slate-50/95 to-zinc-50/95 backdrop-blur-lg">
          <div className="container mx-auto px-12">
            <div className="text-center mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-100/90 via-gold-50/80 to-slate-100/90 border border-amber-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-10">
                <span className="text-amber-900 font-light text-sm tracking-[0.3em] uppercase">Transformations Remarquables</span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-extralight text-slate-900 mb-10 tracking-tighter leading-tight">
                Avant & <span className="text-slate-700 italic font-thin">Après</span>
              </h2>
              <p className="text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                Découvrez les transformations extraordinaires réalisées par notre équipe d'experts
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent className="-ml-12">
                  {beforeAfterCases.map((case_) => (
                    <CarouselItem key={case_.id} className="pl-12 md:basis-1/2 lg:basis-1/3">
                      <Card className="group overflow-hidden hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-6 border border-white/90 shadow-2xl bg-white/95 backdrop-blur-lg rounded-[2.5rem]">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <AspectRatio ratio={16 / 12}>
                              <div className="grid grid-cols-2 h-full">
                                <div className="relative">
                                  <img 
                                    src={case_.beforeImage} 
                                    alt={`Before ${case_.title}`}
                                    className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
                                  />
                                  <div className="absolute top-4 left-4 bg-slate-800/90 backdrop-blur-lg text-white px-4 py-2 rounded-2xl text-sm font-light shadow-xl">
                                    Avant
                                  </div>
                                </div>
                                <div className="relative">
                                  <img 
                                    src={case_.afterImage} 
                                    alt={`After ${case_.title}`}
                                    className="w-full h-full object-cover transition-transform duration-1500 group-hover:scale-110"
                                  />
                                  <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-lg text-white px-4 py-2 rounded-2xl text-sm font-light shadow-xl">
                                    Après
                                  </div>
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            </AspectRatio>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl border border-white/90">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-amber-600 font-light text-sm tracking-wide bg-amber-50/80 px-4 py-2 rounded-full">
                                  {case_.treatment}
                                </span>
                                <span className="text-slate-600 font-light text-sm">
                                  {case_.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="p-12">
                            <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-wide">{case_.title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed font-light">
                              {case_.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex -left-16 w-16 h-16 bg-white/95 backdrop-blur-2xl shadow-2xl border border-white/90 hover:bg-white hover:shadow-3xl transition-all duration-700" />
                <CarouselNext className="hidden lg:flex -right-16 w-16 h-16 bg-white/95 backdrop-blur-2xl shadow-2xl border border-white/90 hover:bg-white hover:shadow-3xl transition-all duration-700" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Ultra Luxury */}
        <section className="py-40 bg-gradient-to-b from-zinc-50/95 via-slate-50/95 to-white/95 backdrop-blur-lg">
          <div className="container mx-auto px-12">
            <div className="text-center mb-32 max-w-6xl mx-auto">
              <div className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-slate-100/90 via-zinc-50/80 to-amber-100/90 border border-slate-300/40 rounded-full shadow-2xl backdrop-blur-lg mb-10">
                <span className="text-slate-900 font-light text-sm tracking-[0.3em] uppercase">Témoignages de Patients</span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-extralight text-slate-900 mb-10 tracking-tighter leading-tight">
                Expériences <span className="text-slate-700 italic font-thin">Exceptionnelles</span>
              </h2>
              <p className="text-2xl text-slate-700 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                Les témoignages authentiques de nos patients qui nous font confiance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-8xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="group hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-all duration-1000 transform hover:-translate-y-6 border border-white/90 shadow-2xl bg-white/95 backdrop-blur-lg rounded-[2.5rem] overflow-hidden hover:border-amber-300/50">
                  <CardContent className="p-12 relative">
                    <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-500/20 via-amber-600/15 to-amber-700/20 rounded-3xl flex items-center justify-center shadow-xl">
                      <Quote className="h-8 w-8 text-amber-600" />
                    </div>
                    
                    <div className="flex mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-amber-500 fill-current mr-1" />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 text-lg mb-10 leading-relaxed font-light italic tracking-wide">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="space-y-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-light text-slate-900 text-xl tracking-wide mb-2">{testimonial.name}</p>
                          <p className="text-amber-600 font-light text-sm tracking-wide bg-amber-50/80 px-4 py-2 rounded-full inline-block">
                            {testimonial.treatment}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-600 font-light text-sm tracking-wide">{testimonial.location}</p>
                          <p className="text-slate-500 font-light text-xs tracking-wide">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-12">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[4rem]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/25 via-transparent to-transparent rounded-[4rem]"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/15 to-transparent rounded-[4rem] blur-3xl"></div>
              
              <div className="relative z-10 rounded-[4rem] p-20 lg:p-24 text-center text-white max-w-7xl mx-auto shadow-[0_60px_120px_rgba(0,0,0,0.2)]">
                <div className="mb-10">
                  <div className="inline-flex items-center px-10 py-5 bg-white/15 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl mb-10">
                    <span className="text-amber-200 font-light text-sm tracking-[0.3em] uppercase">Consultation Privée</span>
                  </div>
                </div>
                
                <h2 className="text-6xl lg:text-7xl font-extralight mb-10 tracking-tighter leading-tight">
                  {t('cta.title')} <span className="text-slate-300 italic font-thin">{t('cta.title.assessment')}</span>
                </h2>
                <p className="text-2xl mb-16 opacity-95 font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-10 justify-center">
                  <BookingModal>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 px-20 py-12 text-2xl font-light rounded-3xl shadow-[0_30px_60px_rgba(255,255,255,0.2)] hover:shadow-[0_40px_80px_rgba(255,255,255,0.3)] transition-all duration-1000 transform hover:-translate-y-3 tracking-wide">
                      <Calendar className="h-8 w-8 mr-5" />
                      {t('cta.book')}
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" className="border-2 border-white/60 bg-white/15 backdrop-blur-lg text-white hover:bg-white/25 hover:border-white/80 px-20 py-12 text-2xl font-light rounded-3xl transition-all duration-1000 tracking-wide">
                    <Phone className="h-8 w-8 mr-5" />
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
