
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star, Palette, Shield } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";

const Veneers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Porcelain Veneers &
              <span className="text-black"> Custom Smile Design</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your smile with ultra-thin porcelain veneers. Correct chips, gaps, stains, and misalignment for a Hollywood-worthy smile that looks completely natural.
            </p>
            <BookingModal>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Get Your Smile Design
              </Button>
            </BookingModal>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src="/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png" 
                  alt="Beautiful veneer results"
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
            Why Choose Porcelain Veneers?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <Palette className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Appearance</h3>
              <p className="text-gray-600">
                Custom-crafted to match your natural teeth with perfect color, shape, and translucency.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Stain Resistant</h3>
              <p className="text-gray-600">
                Porcelain veneers resist coffee, wine, and other stains better than natural teeth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimal Preparation</h3>
              <p className="text-gray-600">
                Ultra-thin veneers require minimal tooth preparation while providing maximum impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Veneers;
