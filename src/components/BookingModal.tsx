
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const BookingModal = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", formData);
    toast({
      title: "Consultation Booked!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">Book Your Free Consultation</DialogTitle>
          <DialogDescription className="text-gray-600">
            Take the first step towards your dream smile. Fill out the form below and we'll contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="service">Service Interest</Label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              <option value="dental-implants">Dental Implants</option>
              <option value="veneers">Veneers & Smile Design</option>
              <option value="teeth-whitening">Teeth Whitening</option>
              <option value="smile-makeover">Complete Smile Makeover</option>
            </select>
          </div>
          <div>
            <Label htmlFor="message">Additional Message</Label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your smile goals..."
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Book Free Consultation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
