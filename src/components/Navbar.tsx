
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { User, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            Swamedika
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-white gap-1 hover:text-blue-100">
                  Layanan <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link to="/cari-dokter" className="w-full">Cari Dokter</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cari-rumah-sakit" className="w-full">Cari Rumah Sakit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/janji-medis" className="w-full">Buat Janji Medis</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/konsultasi" className="w-full">Konsultasi Online</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/artikel" className="hover:text-blue-100">
              Artikel
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-white gap-1 hover:text-blue-100">
                  Informasi <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link to="/penyakit" className="w-full">Penyakit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/obat" className="w-full">Obat-obatan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/gaya-hidup" className="w-full">Gaya Hidup Sehat</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/tanya-dokter" className="hover:text-blue-100">
              Tanya Dokter
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-white text-blue-600 hover:bg-blue-100">
                Daftar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 pb-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link to="/cari-dokter" className="text-white py-2 border-b border-blue-500">
              Cari Dokter
            </Link>
            <Link to="/cari-rumah-sakit" className="text-white py-2 border-b border-blue-500">
              Cari Rumah Sakit
            </Link>
            <Link to="/artikel" className="text-white py-2 border-b border-blue-500">
              Artikel
            </Link>
            <Link to="/penyakit" className="text-white py-2 border-b border-blue-500">
              Penyakit
            </Link>
            <Link to="/tanya-dokter" className="text-white py-2 border-b border-blue-500">
              Tanya Dokter
            </Link>
            
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/login">
                <Button variant="outline" className="w-full text-white border-white hover:bg-blue-700">
                  Masuk
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-100">
                  Daftar
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
