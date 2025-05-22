
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Calendar, 
  MessageCircle, 
  BookOpen,
  Heart,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: "Cari Dokter",
    description: "Temukan dokter terbaik di sekitar Anda sesuai dengan kebutuhan kesehatan Anda",
    link: "/cari-dokter"
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "Buat Janji Medis",
    description: "Buat janji dengan dokter pilihan Anda tanpa perlu antri",
    link: "/janji-medis"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
    title: "Konsultasi Online",
    description: "Konsultasi dengan dokter spesialis kapan saja dan di mana saja",
    link: "/konsultasi"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: "Artikel Kesehatan",
    description: "Baca artikel kesehatan terpercaya dari pakar medis",
    link: "/artikel"
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: "Tips Hidup Sehat",
    description: "Dapatkan tips untuk menjalani gaya hidup sehat",
    link: "/gaya-hidup"
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
    title: "Info Penyakit",
    description: "Pelajari tentang berbagai penyakit, gejala, dan pengobatannya",
    link: "/penyakit"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Layanan Swamedika</h2>
          <p className="text-lg text-gray-600 mt-2">Solusi kesehatan lengkap dalam genggaman Anda</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
