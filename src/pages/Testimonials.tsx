import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aicha Benali",
      treatment: "Dental Implants",
      text: "MashaAllah! Dr. Smith completely transformed my smile with dental implants 😍 I can't believe how natural they look and feel. The entire process was so comfortable and professional. Highly recommend! 🦷✨",
      image: "/lovable-uploads/4354423c-60c5-498f-a18a-31dde1580202.png",
      timeAgo: "2h",
      likes: 47,
      comments: 12,
      shares: 3,
      hasLiked: false
    },
    {
      name: "Youssef El Moutaouakil",
      treatment: "Smile Makeover",
      text: "Subhan'Allah! I had veneers and whitening done, and the results exceeded my expectations 🙌 Dr. Smith is truly an artist. My confidence has skyrocketed! Thank you so much for giving me the perfect smile. Best decision ever! 😊💯",
      image: "/lovable-uploads/cd50fbe4-44af-47cc-902d-1f7891702636.png",
      timeAgo: "1d",
      likes: 89,
      comments: 23,
      shares: 8,
      hasLiked: true
    },
    {
      name: "Khadija Benjelloun",
      treatment: "Porcelain Veneers",
      text: "Alhamdulillah! The best investment I've ever made 💎 My new smile looks so natural that people can't tell I had work done. Dr. Smith's attention to detail is incredible. I'm so grateful! 🤲✨",
      image: "/lovable-uploads/b9d7e9c1-f823-4c10-ae29-6694c5a422db.png",
      timeAgo: "3d",
      likes: 156,
      comments: 34,
      shares: 15,
      hasLiked: false
    },
    {
      name: "Omar Rachidi",
      treatment: "Teeth Whitening",
      text: "Amazing experience at SmileCraft Studio! 🔥 My teeth are now several shades whiter and I feel so much more confident. The staff was incredibly professional and made me feel comfortable throughout the entire process. 10/10 would recommend to anyone looking for quality dental care! 🦷😁",
      image: "/lovable-uploads/32fbd011-09a3-46eb-a20d-5b769b9b08af.png",
      timeAgo: "5d",
      likes: 73,
      comments: 18,
      shares: 4,
      hasLiked: true
    },
    {
      name: "Salma Cherkaoui",
      treatment: "Full Mouth Rehabilitation",
      text: "La hawla wa la quwwata illa billah! What a transformation! 😱✨ After years of dental problems, Dr. Smith gave me a completely new smile. The full mouth rehabilitation was life-changing. I can eat, speak, and smile with confidence again! 🙏❤️",
      image: "/lovable-uploads/fddbc98c-a481-4d7d-b176-d8b95960a6d3.png",
      timeAgo: "1w",
      likes: 203,
      comments: 56,
      shares: 22,
      hasLiked: false
    },
    {
      name: "Hassan Alami",
      treatment: "Dental Implants",
      text: "Barakallahu fik Dr. Smith! 🙏 After losing a tooth in an accident, I was so self-conscious about my smile. The dental implant procedure was smooth and the results are perfect. It feels just like my natural tooth. Professional team and excellent service! Highly recommend to everyone! 👍",
      image: "/lovable-uploads/2d6f3aad-bedc-4bff-84a8-18ac44ba050e.png",
      timeAgo: "2w",
      likes: 91,
      comments: 27,
      shares: 6,
      hasLiked: true
    }
  ];

  const renderFacebookComment = (testimonial: any, index: number) => {
    return (
      <div key={index} className="bg-white border-b border-gray-200 p-4">
        {/* Comment Header */}
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback className="bg-blue-500 text-white text-sm">
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            {/* Comment Content */}
            <div className="bg-gray-100 rounded-2xl px-3 py-2 mb-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{testimonial.text}</p>
              <div className="mt-2 text-xs text-blue-600 font-medium">
                Treatment: {testimonial.treatment}
              </div>
            </div>
            
            {/* Comment Meta */}
            <div className="flex items-center space-x-4 text-xs text-gray-500 mb-2">
              <span className="font-medium">{testimonial.timeAgo}</span>
              <button className={`font-medium hover:underline ${testimonial.hasLiked ? 'text-blue-600' : 'text-gray-500'}`}>
                Like
              </button>
              <button className="font-medium hover:underline text-gray-500">
                Reply
              </button>
              <button className="font-medium hover:underline text-gray-500">
                Share
              </button>
            </div>
            
            {/* Like Count */}
            {testimonial.likes > 0 && (
              <div className="flex items-center space-x-1 mb-2">
                <div className="flex items-center bg-blue-600 rounded-full p-1">
                  <ThumbsUp className="h-3 w-3 text-white fill-current" />
                </div>
                <span className="text-xs text-gray-500">{testimonial.likes}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200">
          <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ${testimonial.hasLiked ? 'text-blue-600' : 'text-gray-600'}`}>
            <ThumbsUp className={`h-4 w-4 ${testimonial.hasLiked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">Like</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Comment</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
            <Share2 className="h-4 w-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            What Our Patients Say
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from our satisfied patients
          </p>
        </div>
      </section>

      {/* Facebook-style Comments */}
      <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              {testimonials.map(renderFacebookComment)}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
