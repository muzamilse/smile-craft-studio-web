
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
            <Card key={case_.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <AspectRatio ratio={4 / 3}>
                  <img 
                    src={case_.beforeImage} 
                    alt={case_.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </AspectRatio>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {case_.treatment}
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{case_.title}</h3>
                <p className="text-gray-600 leading-relaxed">{case_.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 text-lg">
            All photos are of actual patients and used with permission. Individual results may vary.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 max-w-3xl mx-auto shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Want to See Your Potential Results?</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
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
