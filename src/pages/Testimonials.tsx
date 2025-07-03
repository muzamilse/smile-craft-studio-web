
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Heart, MessageCircle, Share } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aicha Benali",
      username: "@aicha.benali92",
      treatment: "Dental Implants",
      rating: 5,
      text: "MashaAllah! Dr. Smith completely transformed my smile with dental implants 😍 I can't believe how natural they look and feel. The entire process was so comfortable and professional. Highly recommend! 🦷✨",
      image: "/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png",
      timeAgo: "2 hours ago",
      likes: 47,
      comments: 12,
      platform: "instagram"
    },
    {
      name: "Youssef Alaoui",
      username: "Youssef Alaoui",
      treatment: "Smile Makeover",
      rating: 5,
      text: "Subhan'Allah! I had veneers and whitening done, and the results exceeded my expectations 🙌 Dr. Smith is truly an artist. My confidence has skyrocketed! Thank you so much for giving me the perfect smile. Best decision ever! 😊💯",
      image: "/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png",
      timeAgo: "1 day ago",
      likes: 89,
      comments: 23,
      platform: "facebook"
    },
    {
      name: "Fatima Zahra Idrissi",
      username: "@fati_zahra",
      treatment: "Porcelain Veneers",
      rating: 5,
      text: "Alhamdulillah! The best investment I've ever made 💎 My new smile looks so natural that people can't tell I had work done. Dr. Smith's attention to detail is incredible. I'm so grateful! 🤲✨ #SmileTransformation #Blessed",
      image: "/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png",
      timeAgo: "3 days ago",
      likes: 156,
      comments: 34,
      platform: "instagram"
    },
    {
      name: "Omar Berrada",
      username: "Omar Berrada",
      treatment: "Teeth Whitening",
      rating: 5,
      text: "Amazing experience at SmileCraft Studio! 🔥 My teeth are now several shades whiter and I feel so much more confident. The staff was incredibly professional and made me feel comfortable throughout the entire process. 10/10 would recommend to anyone looking for quality dental care! 🦷😁",
      image: "/lovable-uploads/32fbd011-09a3-46eb-a20d-5b769b9b08af.png",
      timeAgo: "5 days ago",
      likes: 73,
      comments: 18,
      platform: "facebook"
    },
    {
      name: "Salma Benjelloun",
      username: "@salma_benj",
      treatment: "Full Mouth Rehabilitation",
      rating: 5,
      text: "La hawla wa la quwwata illa billah! What a transformation! 😱✨ After years of dental problems, Dr. Smith gave me a completely new smile. The full mouth rehabilitation was life-changing. I can eat, speak, and smile with confidence again! 🙏❤️ #NewMe #Grateful",
      image: "/lovable-uploads/fddbc98c-a481-4d7d-b176-d8b95960a6d3.png",
      timeAgo: "1 week ago",
      likes: 203,
      comments: 56,
      platform: "instagram"
    },
    {
      name: "Hamza Tazi",
      username: "Hamza Tazi",
      treatment: "Dental Implants",
      rating: 5,
      text: "Barakallahu fik Dr. Smith! 🙏 After losing a tooth in an accident, I was so self-conscious about my smile. The dental implant procedure was smooth and the results are perfect. It feels just like my natural tooth. Professional team and excellent service! Highly recommend to everyone! 👍",
      image: "/lovable-uploads/2d6f3aad-bedc-4bff-84a8-18ac44ba050e.png",
      timeAgo: "2 weeks ago",
      likes: 91,
      comments: 27,
      platform: "facebook"
    }
  ];

  const renderSocialMediaCard = (testimonial: any, index: number) => {
    const isInstagram = testimonial.platform === "instagram";
    
    return (
      <Card key={index} className={`border-none shadow-lg ${isInstagram ? 'bg-gradient-to-br from-purple-50 to-pink-50' : 'bg-blue-50'}`}>
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-center mb-3">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
              <AvatarFallback className="bg-blue-500 text-white text-sm">
                {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h3>
                {isInstagram && (
                  <span className="text-blue-500 ml-1 text-xs">✓</span>
                )}
              </div>
              <p className="text-xs text-gray-500">
                {isInstagram ? testimonial.username : testimonial.timeAgo}
              </p>
            </div>
            <div className="text-xs text-gray-500">{testimonial.timeAgo}</div>
          </div>

          {/* Content */}
          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed mb-2">{testimonial.text}</p>
            
            {/* Stars */}
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <div className="text-xs text-gray-500">
              Treatment: <span className="font-medium text-blue-600">{testimonial.treatment}</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                <Heart className="h-4 w-4" />
                <span className="text-xs">{testimonial.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">{testimonial.comments}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                <Share className="h-4 w-4" />
                <span className="text-xs">Share</span>
              </button>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full ${isInstagram ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-blue-500 text-white'}`}>
              {isInstagram ? 'Instagram' : 'Facebook'}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            What Our Patients Say
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from our satisfied patients on social media
          </p>
        </div>
      </section>

      {/* Social Media Testimonials */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map(renderSocialMediaCard)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
