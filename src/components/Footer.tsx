
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-blue-700 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Dapatkan Info Kesehatan Terbaru
              </h3>
              <p className="text-blue-100">
                Langganan newsletter kami untuk mendapatkan artikel kesehatan terbaru dan tips hidup sehat.
              </p>
            </div>
            <div className="flex space-x-2">
              <Input 
                placeholder="Alamat email Anda"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-100"
              />
              <Button className="bg-white text-blue-700 hover:bg-blue-100">
                Langganan
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Swamedika</h4>
            <p className="mb-4">
              Platform kesehatan digital terpercaya yang menghubungkan pasien dengan dokter dan layanan kesehatan terbaik di Indonesia.
            </p>
            <div className="flex space-x-4">
              <Link to="#" aria-label="Facebook">
                <Facebook size={20} className="hover:text-white transition-colors" />
              </Link>
              <Link to="#" aria-label="Twitter">
                <Twitter size={20} className="hover:text-white transition-colors" />
              </Link>
              <Link to="#" aria-label="Instagram">
                <Instagram size={20} className="hover:text-white transition-colors" />
              </Link>
              <Link to="#" aria-label="Youtube">
                <Youtube size={20} className="hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Tautan</h4>
            <ul className="space-y-2">
              <li><Link to="/tentang-kami" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/dokter" className="hover:text-white transition-colors">Dokter</Link></li>
              <li><Link to="/rumah-sakit" className="hover:text-white transition-colors">Rumah Sakit</Link></li>
              <li><Link to="/artikel" className="hover:text-white transition-colors">Artikel</Link></li>
              <li><Link to="/karir" className="hover:text-white transition-colors">Karir</Link></li>
              <li><Link to="/hubungi-kami" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><Link to="/cari-dokter" className="hover:text-white transition-colors">Cari Dokter</Link></li>
              <li><Link to="/buat-janji" className="hover:text-white transition-colors">Buat Janji Medis</Link></li>
              <li><Link to="/konsultasi-online" className="hover:text-white transition-colors">Konsultasi Online</Link></li>
              <li><Link to="/direktori-penyakit" className="hover:text-white transition-colors">Direktori Penyakit</Link></li>
              <li><Link to="/info-obat" className="hover:text-white transition-colors">Info Obat-obatan</Link></li>
              <li><Link to="/kalkulator-kesehatan" className="hover:text-white transition-colors">Kalkulator Kesehatan</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Kontak Kami</h4>
            <address className="not-italic">
              <p className="mb-2">Gedung Swamedika</p>
              <p className="mb-2">Jl. Kesehatan No. 123</p>
              <p className="mb-2">Jakarta Selatan, Indonesia</p>
              <p className="mb-2">12345</p>
              <p className="flex items-center mt-4">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@swamedika.com" className="hover:text-white transition-colors">info@swamedika.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Swamedika. Hak Cipta Dilindungi.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link to="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
