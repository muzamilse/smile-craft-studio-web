
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Star, Phone } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Glowing background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10">
        <Header />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                  Transform Your Smile with 
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-medium drop-shadow-2xl animate-pulse"> Advanced Dental Implants</span> 
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-medium drop-shadow-2xl animate-pulse"> & Aesthetic Treatments</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-light max-w-xl drop-shadow-lg">
                  Discover the confidence that comes with a perfect smile. Our expert team specializes in dental implants, veneers, and complete smile makeovers using the latest technology.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <BookingModal>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-8 text-xl font-medium rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 border border-white/20 backdrop-blur-sm">
                    <Calendar className="h-6 w-6 mr-3" />
                    Get Your Dream Smile Today
                  </Button>
                </BookingModal>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-8 text-xl font-medium rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 backdrop-blur-sm hover:border-purple-400/50">
                  <Phone className="h-6 w-6 mr-3" />
                  Schedule Consultation
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 text-yellow-400 fill-current drop-shadow-lg animate-pulse" />
                  ))}
                  <span className="text-white ml-3 font-medium text-lg drop-shadow-lg">5.0 Rating</span>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                <span className="text-gray-300 font-medium text-lg drop-shadow-lg">200+ Happy Patients</span>
              </div>
            </div>
            
            <div className="relative lg:pl-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 z-10"></div>
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src="/lovable-uploads/ff81044a-e72d-416c-b466-28e4991ab4fc.png" 
                    alt="Professional dental surgery in modern clinic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent z-20"></div>
                </AspectRatio>
              </div>
              <div className="absolute -bottom-8 -left-4 bg-gradient-to-br from-white/90 to-white/80 rounded-3xl shadow-2xl p-8 max-w-xs border border-white/30 backdrop-blur-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                    <CheckCircle className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xl">Free Consultation</p>
                    <p className="text-sm text-gray-600">No obligation assessment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-black/30 to-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight drop-shadow-2xl">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Specialized Services</span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed drop-shadow-lg">
                We focus on aesthetic dentistry and dental implants to give you the perfect smile you've always wanted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="group hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                        alt="Dental Implants"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors drop-shadow-lg">Dental Implants</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
                      Permanent tooth replacement solution that looks and feels natural.
                    </p>
                    <Button variant="outline" className="w-full border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300 rounded-xl font-medium backdrop-blur-sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                        alt="Veneers & Smile Design"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 via-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors drop-shadow-lg">Veneers & Smile Design</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
                      Custom porcelain veneers for a Hollywood-worthy smile transformation.
                    </p>
                    <Button variant="outline" className="w-full border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/20 hover:border-purple-400 transition-all duration-300 rounded-xl font-medium backdrop-blur-sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                        alt="Teeth Whitening"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 via-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors drop-shadow-lg">Teeth Whitening</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
                      Professional whitening for a brighter, more confident smile.
                    </p>
                    <Button variant="outline" className="w-full border-2 border-pink-400/50 text-pink-400 hover:bg-pink-400/20 hover:border-pink-400 transition-all duration-300 rounded-xl font-medium backdrop-blur-sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16 / 10}>
                      <img 
                        src="/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png" 
                        alt="Complete Smile Makeover"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/60 via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </AspectRatio>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors drop-shadow-lg">Complete Smile Makeover</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
                      Comprehensive treatment combining multiple procedures for total transformation.
                    </p>
                    <Button variant="outline" className="w-full border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 rounded-xl font-medium backdrop-blur-sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight drop-shadow-2xl">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dr Mourad Gamani?</span>
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed drop-shadow-lg">
                We're committed to providing exceptional aesthetic dental care with the latest technology and techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <CheckCircle className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">Expert Specialization</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg">
                  Focused exclusively on aesthetic dentistry and dental implants with over 15 years of experience.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3">
                  <Star className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">Latest Technology</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg">
                  State-of-the-art equipment and advanced techniques for precise, comfortable treatments.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <Calendar className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">Personalized Care</h3>
                <p className="text-gray-300 leading-relaxed font-light text-lg">
                  Custom treatment plans designed specifically for your unique smile goals and needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-black/30 to-transparent">
          <div className="container mx-auto px-8">
            <div className="bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80 rounded-3xl p-12 lg:p-16 text-center text-white max-w-5xl mx-auto shadow-2xl border border-white/20 backdrop-blur-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              <div className="relative z-10">
                <h2 className="text-5xl lg:text-6xl font-light mb-6 tracking-tight drop-shadow-2xl">
                  Ready to Transform Your <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">Smile?</span>
                </h2>
                <p className="text-xl mb-10 opacity-90 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                  Book your free consultation today and discover how we can help you achieve the smile of your dreams.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <BookingModal>
                    <Button size="lg" className="bg-gradient-to-r from-white to-gray-100 text-purple-600 hover:from-gray-100 hover:to-white px-12 py-8 text-xl font-medium rounded-2xl shadow-2xl hover:shadow-white/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
                      <Calendar className="h-6 w-6 mr-3" />
                      Book Free Consultation
                    </Button>
                  </BookingModal>
                  <Button variant="outline" size="lg" className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white px-12 py-8 text-xl font-medium rounded-2xl transition-all duration-500 backdrop-blur-sm">
                    <Phone className="h-6 w-6 mr-3" />
                    Call Now
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
