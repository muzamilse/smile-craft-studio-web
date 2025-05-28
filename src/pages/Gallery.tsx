
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const beforeAfterCases = [
    {
      id: 1,
      title: "Complete Smile Makeover",
      description: "Dental implants and veneers transformation",
      beforeImage: "/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png",
      treatment: "Dental Implants + Veneers"
    },
    {
      id: 2,
      title: "Teeth Whitening Results",
      description: "Professional whitening treatment",
      beforeImage: "/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png",
      treatment: "Professional Whitening"
    },
    {
      id: 3,
      title: "Perfect Smile Design",
      description: "Natural-looking smile enhancement",
      beforeImage: "/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png",
      treatment: "Smile Design"
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
            Before & After Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the incredible transformations we've achieved for our patients. Real results from real people who trusted us with their smiles.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterCases.map((case_) => (
            <Card key={case_.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={case_.beforeImage} 
                  alt={case_.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {case_.treatment}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{case_.title}</h3>
                <p className="text-gray-600">{case_.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All photos are of actual patients and used with permission. Individual results may vary.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Want to See Your Potential Results?</h3>
            <p className="text-gray-600">
              Schedule a consultation to discuss your smile goals and see what's possible for you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
