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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Medical luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-blue-100/50 to-slate-100/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light text-slate-800 leading-tight tracking-tight">
                  {t('hero.title.advanced')}
                  <span className="block text-slate-700 font-medium">{t('hero.title.oral')}</span> 
                  <span className="block text-slate-600 font-medium">{t('hero.title.aesthetic')}</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-light max-w-xl">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <BookingModal>
                  <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white px-12 py-8 text-xl font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Calendar className="h-6 w-6 mr-3" />
                    {t('hero.cta.schedule')}
                  </Button>
                </BookingModal>
                <Button variant="outline" size="lg" className="border-2 border-slate-400 text-slate-700 hover:bg-slate-100 px-12 py-8 text-xl font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="h-6 w-6 mr-3" />
                  {t('hero.cta.emergency')}
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-slate-600" />
                  <span className="text-slate-700 font-medium text-lg">{t('hero.badge.certified')}</span>
                </div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-slate-600" />
                  <span className="text-slate-700 font-medium text-lg">{t('hero.badge.experience')}</span>
                </div>
                <div className="h-8 w-px bg-slate-300"></div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-slate-600" />
                  <span className="text-slate-700 font-medium text-lg">{t('hero.badge.procedures')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative lg:pl-8">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src="/lovable-uploads/ff81044a-e72d-416c-b466-28e4991ab4fc.png" 
                    alt="Professional dental surgery in sterile clinical environment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </AspectRatio>
              </div>
              <div className="absolute -bottom-8 -left-4 bg-white/95 rounded-2xl shadow-xl p-8 max-w-xs border border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-slate-600 rounded-lg flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-xl">{t('hero.badge.sterile')}</p>
                    <p className="text-sm text-slate-600">{t('hero.badge.safety')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Services Section */}
        <section className="py-24 bg-white/80">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight">
                {t('services.title')} <span className="text-slate-700">{t('services.title.clinical')}</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                {t('services.subtitle')}
              </p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                        alt="Osseointegrated Dental Implants"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('services.implants')}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {t('services.implants.desc')}
                    </p>
                    <Button variant="outline" className="w-full border border-slate-600 text-slate-600 hover:bg-slate-50 transition-all duration-300 rounded-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                        alt="Porcelain Laminate Veneers"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('services.veneers')}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {t('services.veneers.desc')}
                    </p>
                    <Button variant="outline" className="w-full border border-slate-600 text-slate-600 hover:bg-slate-50 transition-all duration-300 rounded-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                        alt="Professional Dental Bleaching"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('services.whitening')}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {t('services.whitening.desc')}
                    </p>
                    <Button variant="outline" className="w-full border border-slate-600 text-slate-600 hover:bg-slate-50 transition-all duration-300 rounded-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png" 
                        alt="Full Mouth Rehabilitation"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('services.makeover')}</h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {t('services.makeover.desc')}
                    </p>
                    <Button variant="outline" className="w-full border border-slate-600 text-slate-600 hover:bg-slate-50 transition-all duration-300 rounded-lg">
                      {t('services.view.details')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinical Excellence Section */}
        <section className="py-24 bg-slate-50/80">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight">
                {t('excellence.title')} <span className="text-slate-700">{t('excellence.title.standards')}</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                {t('excellence.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t('excellence.sterilization')}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  {t('excellence.sterilization.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t('excellence.technology')}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  {t('excellence.technology.desc')}
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t('excellence.certification')}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  {t('excellence.certification.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 lg:p-16 text-center text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  {t('cta.title')} <span className="text-slate-200">{t('cta.title.assessment')}</span>
                </h2>
                <p className="text-xl mb-10 opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
                  {t('cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <BookingModal>
                    <Button size="lg" className="bg-white text-slate-800 hover:bg-slate-100 px-12 py-8 text-xl font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                      <Calendar className="h-6 w-6 mr-3" />
                      {t('cta.book')}
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" className="border-2 border-slate-200 text-slate-200 hover:bg-slate-700 hover:border-slate-200 px-12 py-8 text-xl font-medium rounded-xl transition-all duration-500">
                    <Phone className="h-6 w-6 mr-3" />
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
