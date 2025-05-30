
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                Transform Your Smile with 
                <span className="block text-blue-600 font-medium"> Advanced Dental Implants</span> 
                <span className="block text-blue-600 font-medium"> & Aesthetic Treatments</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-xl">
                Discover the confidence that comes with a perfect smile. Our expert team specializes in dental implants, veneers, and complete smile makeovers using the latest technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <BookingModal>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  <Calendar className="h-5 w-5 mr-3" />
                  Get Your Dream Smile Today
                </Button>
              </BookingModal>
              <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <Phone className="h-5 w-5 mr-3" />
                Schedule Consultation
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-700 ml-3 font-medium">5.0 Rating</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium">200+ Happy Patients</span>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src="/lovable-uploads/ff81044a-e72d-416c-b466-28e4991ab4fc.png" 
                  alt="Professional dental surgery in modern clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </AspectRatio>
            </div>
            <div className="absolute -bottom-8 -left-4 bg-white rounded-2xl shadow-2xl p-8 max-w-xs border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Free Consultation</p>
                  <p className="text-sm text-gray-600">No obligation assessment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We focus on aesthetic dentistry and dental implants to give you the perfect smile you've always wanted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                      alt="Dental Implants"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </AspectRatio>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Dental Implants</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                    Permanent tooth replacement solution that looks and feels natural.
                  </p>
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                      alt="Veneers & Smile Design"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </AspectRatio>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Veneers & Smile Design</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                    Custom porcelain veneers for a Hollywood-worthy smile transformation.
                  </p>
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                      alt="Teeth Whitening"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </AspectRatio>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Teeth Whitening</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                    Professional whitening for a brighter, more confident smile.
                  </p>
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src="/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png" 
                      alt="Complete Smile Makeover"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </AspectRatio>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Complete Smile Makeover</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                    Comprehensive treatment combining multiple procedures for total transformation.
                  </p>
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-xl font-medium">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Why Choose Dr Mourad Gamani?
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We're committed to providing exceptional aesthetic dental care with the latest technology and techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Specialization</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Focused exclusively on aesthetic dentistry and dental implants with over 15 years of experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Star className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Latest Technology</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                State-of-the-art equipment and advanced techniques for precise, comfortable treatments.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                <Calendar className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Care</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Custom treatment plans designed specifically for your unique smile goals and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 lg:p-16 text-center text-white max-w-5xl mx-auto shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl mb-10 opacity-90 font-light leading-relaxed max-w-2xl mx-auto">
              Book your free consultation today and discover how we can help you achieve the smile of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <BookingModal>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book Free Consultation
                </Button>
              </BookingModal>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-lg font-medium rounded-xl transition-all duration-300">
                <Phone className="h-5 w-5 mr-3" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
