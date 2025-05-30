
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, Shield } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";

const DentalImplants = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Dental Implants: 
              <span className="text-black"> Your Permanent Solution</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Replace missing teeth with dental implants that look, feel, and function just like natural teeth. Our advanced implant technology ensures lasting results and renewed confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookingModal>
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Free Implant Consultation
                </Button>
              </BookingModal>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src="/lovable-uploads/2fca1257-4c15-422b-b3ea-e2581e900e10.png" 
                  alt="Dental implant procedure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Dental Implants?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dental implants offer superior benefits compared to traditional dentures or bridges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Permanent Solution</h3>
              <p className="text-gray-600">
                With proper care, dental implants can last a lifetime, making them the most cost-effective long-term solution.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Look & Feel</h3>
              <p className="text-gray-600">
                Implants integrate with your jawbone and feel completely natural, allowing you to eat and speak with confidence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Preserve Facial Structure</h3>
              <p className="text-gray-600">
                Implants prevent bone loss and maintain your facial structure, keeping you looking youthful.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Implant Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We follow a proven, step-by-step process to ensure your implant treatment is successful and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation & Planning</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive examination, 3D imaging, and personalized treatment planning.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Implant Placement</h3>
            <p className="text-gray-600 text-sm">
              Precise surgical placement of the titanium implant using advanced techniques.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Healing Period</h3>
            <p className="text-gray-600 text-sm">
              3-6 months for osseointegration, where the implant fuses with your jawbone.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Crown Placement</h3>
            <p className="text-gray-600 text-sm">
              Attachment of your custom-made crown for a beautiful, natural-looking result.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Restore Your Smile?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your free consultation to learn if dental implants are right for you.
          </p>
          <BookingModal>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
              <Calendar className="h-5 w-5 mr-2" />
              Book Free Consultation
            </Button>
          </BookingModal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DentalImplants;
