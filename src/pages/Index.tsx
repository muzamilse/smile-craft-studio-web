
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, Star, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Transform Your Smile with 
              <span className="text-blue-600"> Advanced Dental Implants</span> & 
              <span className="text-blue-600"> Aesthetic Treatments</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the confidence that comes with a perfect smile. Our expert team specializes in dental implants, veneers, and complete smile makeovers using the latest technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookingModal>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Get Your Dream Smile Today
                </Button>
              </BookingModal>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-600 ml-2">5.0 (200+ Reviews)</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
              alt="Beautiful smile transformation"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold text-gray-800">Free Consultation</p>
                  <p className="text-sm text-gray-600">No obligation assessment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We focus on aesthetic dentistry and dental implants to give you the perfect smile you've always wanted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                  alt="Dental Implants"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dental Implants</h3>
              <p className="text-gray-600 text-sm mb-4">
                Permanent tooth replacement solution that looks and feels natural.
              </p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                  alt="Veneers & Smile Design"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Veneers & Smile Design</h3>
              <p className="text-gray-600 text-sm mb-4">
                Custom porcelain veneers for a Hollywood-worthy smile transformation.
              </p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png" 
                  alt="Teeth Whitening"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Teeth Whitening</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional whitening for a brighter, more confident smile.
              </p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png" 
                  alt="Complete Smile Makeover"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Smile Makeover</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive treatment combining multiple procedures for total transformation.
              </p>
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16 bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Choose SmileCraft Studio?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional aesthetic dental care with the latest technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Specialization</h3>
            <p className="text-gray-600">
              Focused exclusively on aesthetic dentistry and dental implants with over 15 years of experience.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Latest Technology</h3>
            <p className="text-gray-600">
              State-of-the-art equipment and advanced techniques for precise, comfortable treatments.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Care</h3>
            <p className="text-gray-600">
              Custom treatment plans designed specifically for your unique smile goals and needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free consultation today and discover how we can help you achieve the smile of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingModal>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Book Free Consultation
              </Button>
            </BookingModal>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
