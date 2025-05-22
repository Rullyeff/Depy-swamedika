
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "10 Cara Menjaga Kesehatan Jantung yang Perlu Diketahui",
    category: "Kesehatan Jantung",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    excerpt: "Pelajari cara menjaga kesehatan jantung Anda dengan tips-tips sederhana yang bisa diterapkan sehari-hari.",
    date: "20 Mei 2025"
  },
  {
    id: 2,
    title: "Mengenal Gejala Diabetes dan Cara Pencegahannya",
    category: "Diabetes",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    excerpt: "Kenali gejala diabetes sejak dini dan pelajari langkah-langkah pencegahan yang efektif.",
    date: "18 Mei 2025"
  },
  {
    id: 3,
    title: "Pentingnya Imunisasi pada Anak dan Jadwalnya",
    category: "Kesehatan Anak",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    excerpt: "Memahami pentingnya imunisasi untuk anak dan jadwal pemberian vaksin yang tepat.",
    date: "15 Mei 2025"
  }
];

const ArticleSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Artikel Kesehatan Terbaru</h2>
          <Link to="/artikel">
            <Button variant="outline">Lihat Semua</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link to={`/artikel/${article.id}`} key={article.id}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden border-none">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-md text-xs">
                    {article.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
