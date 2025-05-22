import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          
          {/* Layanan Routes */}
          <Route path="/cari-dokter" element={<Index />} />
          <Route path="/cari-rumah-sakit" element={<Index />} />
          <Route path="/janji-medis" element={<Index />} />
          <Route path="/konsultasi" element={<Index />} />
          
          {/* Informasi Routes */}
          <Route path="/artikel" element={<Index />} />
          <Route path="/artikel/:id" element={<Index />} />
          <Route path="/penyakit" element={<Index />} />
          <Route path="/obat" element={<Index />} />
          <Route path="/gaya-hidup" element={<Index />} />
          <Route path="/tanya-dokter" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Index />} />
          <Route path="/register" element={<Index />} />
          
          {/* Hospital Routes */}
          <Route path="/rumah-sakit" element={<Index />} />
          <Route path="/rumah-sakit/:id" element={<Index />} />
          
          {/* Other Routes */}
          <Route path="/tentang-kami" element={<Index />} />
          <Route path="/hubungi-kami" element={<Index />} />
          <Route path="/kebijakan-privasi" element={<Index />} />
          <Route path="/syarat-ketentuan" element={<Index />} />
          <Route path="/faq" element={<Index />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
