
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Star, Phone, Shield, Award, Users } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-100 relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 via-slate-50/50 to-amber-50/20"></div>
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-slate-300/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-gradient-to-r from-transparent via-amber-100/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section - Premium */}
        <section className="container mx-auto px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200/50 rounded-full shadow-lg backdrop-blur-sm">
                  <Star className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-amber-800 font-medium text-sm tracking-wide">EXCELLENCE MÉDICALE DEPUIS 2009</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-slate-900 leading-[0.9] tracking-tight">
                  {t('hero.title.advanced')}
                  <span className="block text-slate-800 font-extralight italic">{t('hero.title.oral')}</span> 
                  <span className="block text-slate-700 font-light">{t('hero.title.aesthetic')}</span>
                </h1>
                
                <p className="text-xl text-slate-700 leading-relaxed font-light max-w-xl tracking-wide">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <BookingModal>
                  <Button size="lg" className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-14 py-8 text-xl font-light rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-600/20">
                    <Calendar className="h-6 w-6 mr-3" />
                    {t('hero.cta.schedule')}
                  </Button>
                </BookingModal>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm text-slate-800 hover:bg-white hover:border-slate-400 px-14 py-8 text-xl font-light rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <Phone className="h-6 w-6 mr-3" />
                  {t('hero.cta.emergency')}
                </Button>
              </div>
              
              <div className="flex items-center space-x-12 pt-12">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full shadow-lg"></div>
                  <span className="text-slate-800 font-light text-lg tracking-wide">{t('hero.badge.certified')}</span>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full shadow-lg"></div>
                  <span className="text-slate-800 font-light text-lg tracking-wide">{t('hero.badge.experience')}</span>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full shadow-lg"></div>
                  <span className="text-slate-800 font-light text-lg tracking-wide">{t('hero.badge.procedures')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-12">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-slate-200/30 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src="/lovable-uploads/ff81044a-e72d-416c-b466-28e4991ab4fc.png" 
                    alt="Professional dental surgery in sterile clinical environment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                </AspectRatio>
              </div>
              <div className="absolute -bottom-12 -left-8 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-sm border border-white/80">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <CheckCircle className="h-9 w-9 text-white" />
                  </div>
                  <div>
                    <p className="font-light text-slate-900 text-2xl tracking-wide">{t('hero.badge.sterile')}</p>
                    <p className="text-slate-600 font-light tracking-wide">{t('hero.badge.safety')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Services Section - Luxury */}
        <section className="py-32 bg-gradient-to-b from-white/90 to-slate-50/90 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="text-center mb-24 max-w-5xl mx-auto">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-100/80 to-slate-100/80 border border-amber-200/50 rounded-full shadow-lg backdrop-blur-sm mb-8">
                <span className="text-amber-800 font-light text-sm tracking-[0.2em] uppercase">Services d'Excellence</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
                {t('services.title')} <span className="text-slate-700 italic">{t('services.title.clinical')}</span>
              </h2>
              <p className="text-2xl text-slate-700 font-light leading-relaxed tracking-wide">
                {t('services.subtitle')}
              </p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-white/80 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-amber-200/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                        alt="Osseointegrated Dental Implants"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">{t('services.implants')}</h3>
                    <p className="text-slate-600 text-base mb-8 leading-relaxed font-light">
                      {t('services.implants.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-300 bg-white/50 text-slate-800 hover:bg-slate-50 hover:border-amber-300 transition-all duration-500 rounded-xl py-6 font-light tracking-wide">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-white/80 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-amber-200/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                        alt="Porcelain Laminate Veneers"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">{t('services.veneers')}</h3>
                    <p className="text-slate-600 text-base mb-8 leading-relaxed font-light">
                      {t('services.veneers.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-300 bg-white/50 text-slate-800 hover:bg-slate-50 hover:border-amber-300 transition-all duration-500 rounded-xl py-6 font-light tracking-wide">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-white/80 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-amber-200/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                        alt="Professional Dental Bleaching"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">{t('services.whitening')}</h3>
                    <p className="text-slate-600 text-base mb-8 leading-relaxed font-light">
                      {t('services.whitening.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-300 bg-white/50 text-slate-800 hover:bg-slate-50 hover:border-amber-300 transition-all duration-500 rounded-xl py-6 font-light tracking-wide">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-white/80 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:border-amber-200/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png" 
                        alt="Full Mouth Rehabilitation"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">{t('services.makeover')}</h3>
                    <p className="text-slate-600 text-base mb-8 leading-relaxed font-light">
                      {t('services.makeover.desc')}
                    </p>
                    <Button variant="outline" className="w-full border-2 border-slate-300 bg-white/50 text-slate-800 hover:bg-slate-50 hover:border-amber-300 transition-all duration-500 rounded-xl py-6 font-light tracking-wide">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Excellence Section - Premium */}
        <section className="py-32 bg-gradient-to-b from-slate-50/90 to-white/90 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="text-center mb-24 max-w-5xl mx-auto">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-100/80 to-amber-100/80 border border-slate-200/50 rounded-full shadow-lg backdrop-blur-sm mb-8">
                <span className="text-slate-800 font-light text-sm tracking-[0.2em] uppercase">Excellence Clinique</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
                {t('excellence.title')} <span className="text-slate-700 italic">{t('excellence.title.standards')}</span>
              </h2>
              <p className="text-2xl text-slate-700 font-light leading-relaxed tracking-wide">
                {t('excellence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-110 shadow-xl">
                  <Shield className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-wide">{t('excellence.sterilization')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-xl tracking-wide">
                  {t('excellence.sterilization.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-110 shadow-xl">
                  <Star className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-wide">{t('excellence.technology')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-xl tracking-wide">
                  {t('excellence.technology.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-110 shadow-xl">
                  <Award className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-wide">{t('excellence.certification')}</h3>
                <p className="text-slate-700 leading-relaxed font-light text-xl tracking-wide">
                  {t('excellence.certification.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Luxury */}
        <section className="py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-8">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[3rem]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-transparent to-transparent rounded-[3rem]"></div>
              
              <div className="relative z-10 rounded-[3rem] p-16 lg:p-20 text-center text-white max-w-6xl mx-auto shadow-2xl">
                <div className="mb-8">
                  <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg mb-8">
                    <span className="text-amber-200 font-light text-sm tracking-[0.2em] uppercase">Consultation Privée</span>
                  </div>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight leading-tight">
                  {t('cta.title')} <span className="text-slate-300 italic">{t('cta.title.assessment')}</span>
                </h2>
                <p className="text-2xl mb-12 opacity-90 font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <BookingModal>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-50 px-16 py-10 text-2xl font-light rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 tracking-wide">
                      <Calendar className="h-7 w-7 mr-4" />
                      {t('cta.book')}
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/70 px-16 py-10 text-2xl font-light rounded-2xl transition-all duration-700 tracking-wide">
                    <Phone className="h-7 w-7 mr-4" />
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
