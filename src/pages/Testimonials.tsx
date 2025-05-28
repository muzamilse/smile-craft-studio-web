
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Dental Implants",
      rating: 5,
      text: "Dr. Smith completely transformed my smile with dental implants. I can't believe how natural they look and feel. The entire process was comfortable and professional.",
      image: "/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png"
    },
    {
      name: "Michael Chen",
      treatment: "Smile Makeover",
      rating: 5,
      text: "I had veneers and whitening done, and the results exceeded my expectations. Dr. Smith is truly an artist. My confidence has skyrocketed!",
      image: "/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png"
    },
    {
      name: "Emily Rodriguez",
      treatment: "Porcelain Veneers",
      rating: 5,
      text: "The best investment I've ever made. My new smile looks so natural that people can't tell I had work done. Dr. Smith's attention to detail is incredible.",
      image: "/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Patient Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read what our patients say about their smile transformation experiences at SmileCraft Studio.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
