
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DentalImplants from "./pages/DentalImplants";
import Veneers from "./pages/Veneers";
import TeethWhitening from "./pages/TeethWhitening";
import SmileMakeover from "./pages/SmileMakeover";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dental-implants" element={<DentalImplants />} />
          <Route path="/veneers" element={<Veneers />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/smile-makeover" element={<SmileMakeover />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
