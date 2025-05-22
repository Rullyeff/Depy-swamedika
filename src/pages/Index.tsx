
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Stethoscope, 
  Calendar, 
  Heart, 
  MessageCircle, 
  BookOpen,
  User,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import ArticleSection from "@/components/ArticleSection";
import HospitalSection from "@/components/HospitalSection";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8 -mt-12 relative z-10">
          <Card className="shadow-lg border-none">
            <CardContent className="p-6">
              <Tabs defaultValue="dokter" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="dokter" className="text-base">Cari Dokter</TabsTrigger>
                  <TabsTrigger value="rs" className="text-base">Cari Rumah Sakit</TabsTrigger>
                  <TabsTrigger value="penyakit" className="text-base">Cari Penyakit</TabsTrigger>
                </TabsList>
                
                <TabsContent value="dokter" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input 
                          placeholder="Cari dokter (contoh: dokter anak)" 
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input 
                          placeholder="Pilih lokasi" 
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Cari Dokter</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="rs" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input 
                          placeholder="Cari rumah sakit" 
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input 
                          placeholder="Pilih lokasi" 
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Cari Rumah Sakit</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="penyakit" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input 
                          placeholder="Cari penyakit atau gejala" 
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Cari Penyakit</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <FeatureSection />
        <ArticleSection />
        <HospitalSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
