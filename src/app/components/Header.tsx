import { Menu, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm border-b-2 border-[#FFC107]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-full flex items-center justify-center shadow-lg">
            <ShoppingBasket className="w-6 h-6 text-[#1B5E20]" />
          </div>
          <span
            className="text-2xl font-bold bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] bg-clip-text text-transparent"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            TsenaGo
          </span>
        </div>

        {/* Menu burger mobile */}
        <button
          className="p-2 hover:bg-[#FFC107]/20 rounded-lg transition-colors lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-[#1B5E20]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1B5E20]" />
          )}
        </button>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center gap-6" style={{ fontFamily: "Inter, sans-serif" }}>
          <a href="#produits" className="hover:text-[#FFC107] transition-colors font-medium">Produits</a>
          <a href="#comment" className="hover:text-[#FFC107] transition-colors font-medium">Comment ça marche</a>
          <a href="#zone" className="hover:text-[#FFC107] transition-colors font-medium">Zone de livraison</a>
          <button className="bg-[#FFC107] text-[#1B5E20] px-6 py-2 rounded-full font-bold hover:bg-[#FFD54F] transition-colors shadow-md">
            Commander
          </button>
        </nav>
      </div>

      {/* Menu mobile */}
      <nav
        className={`lg:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-max-h duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <ul className="flex flex-col p-4 space-y-3">
          <li>
            <a href="#produits" onClick={() => setMenuOpen(false)} className="hover:text-[#FFC107] font-medium">
              Produits
            </a>
          </li>
          <li>
            <a href="#comment" onClick={() => setMenuOpen(false)} className="hover:text-[#FFC107] font-medium">
              Comment ça marche
            </a>
          </li>
          <li>
            <a href="#zone" onClick={() => setMenuOpen(false)} className="hover:text-[#FFC107] font-medium">
              Zone de livraison
            </a>
          </li>
          <li>
            <button
              className="bg-[#FFC107] text-[#1B5E20] px-6 py-2 rounded-full font-bold hover:bg-[#FFD54F] transition-colors shadow-md w-full"
              onClick={() => setMenuOpen(false)}
            >
              Commander
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
