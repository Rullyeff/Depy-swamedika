
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const hospitals = [
  {
    id: 1,
    name: "Rumah Sakit Swamedika Pusat",
    location: "Jakarta Selatan",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    specialties: ["Kardiologi", "Neurologi", "Pediatri", "Onkologi"]
  },
  {
    id: 2,
    name: "Rumah Sakit Swamedika Bandung",
    location: "Bandung",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
    specialties: ["Ortopedi", "Ginekologi", "Urologi"]
  },
  {
    id: 3,
    name: "Rumah Sakit Swamedika Surabaya",
    location: "Surabaya",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    specialties: ["Bedah Umum", "Mata", "Jantung"]
  },
  {
    id: 4,
    name: "Rumah Sakit Swamedika Semarang",
    location: "Semarang",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1516549655669-d86480c3d903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    specialties: ["Anak", "Paru", "Kulit"]
  }
];

const HospitalSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Rumah Sakit Rekanan</h2>
          <Link to="/rumah-sakit">
            <Button variant="outline">Lihat Semua</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitals.map((hospital) => (
            <Link to={`/rumah-sakit/${hospital.id}`} key={hospital.id}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden border-none">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{hospital.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{hospital.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Star size={16} className="mr-1 text-yellow-500 fill-yellow-500" />
                    <span>{hospital.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.slice(0, 2).map((specialty, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                    {hospital.specialties.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        +{hospital.specialties.length - 2} lainnya
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalSection;
