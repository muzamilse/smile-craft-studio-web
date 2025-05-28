
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Meet Dr. Sarah Smith
              <span className="text-blue-600"> Your Smile Transformation Expert</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              With over 15 years of experience in aesthetic dentistry and dental implants, Dr. Smith is dedicated to creating beautiful, confident smiles using the latest techniques and technology.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/00601e1a-d550-4238-970b-b8e4cb9f4b0f.png" 
              alt="Dr. Smith in her dental practice"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Experience & Qualifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dr. Smith's extensive training and continuous education ensure you receive the highest quality care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">2000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Implants Placed</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="p-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Hours Annual CE</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="container mx-auto px-4 py-16 bg-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• DDS, Harvard School of Dental Medicine</li>
              <li>• Residency in Oral & Maxillofacial Surgery</li>
              <li>• Fellowship in Implant Dentistry</li>
              <li>• Certificate in Aesthetic Dentistry</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Memberships</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• American Academy of Implant Dentistry</li>
              <li>• American Academy of Cosmetic Dentistry</li>
              <li>• International Congress of Oral Implantologists</li>
              <li>• American Dental Association</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Philosophy
          </h2>
          <blockquote className="text-xl text-gray-600 italic leading-relaxed mb-8">
            "I believe that everyone deserves to feel confident about their smile. My goal is to combine artistry with advanced dental science to create smiles that not only look beautiful but also function perfectly for a lifetime."
          </blockquote>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dr. Smith takes a personalized approach to each patient, taking time to understand your unique goals and concerns. She uses the latest technology and techniques to ensure comfortable, precise treatments with predictable, beautiful results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Meet Dr. Smith?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your consultation to discuss your smile goals and learn how we can help you achieve them.
          </p>
          <BookingModal>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
          </BookingModal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
