
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Kesehatan Anda <br />Prioritas Kami
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Temukan dokter terbaik, buat janji medis, dan dapatkan informasi kesehatan terpercaya melalui Swamedika
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cari-dokter">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
                  Cari Dokter
                </Button>
              </Link>
              <Link to="/konsultasi">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Konsultasi Online
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Dokter dengan pasien"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
