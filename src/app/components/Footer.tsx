import { ShoppingBasket, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white py-12 pb-24 lg:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBasket className="w-8 h-8" />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                TsenaGo
              </span>
            </div>
            <p 
              className="text-white/80"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Votre source de produits locaux frais à Madagascar
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 
              className="text-lg mb-4 font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:+26134XXXXXXX" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>+261 34 XX XXX XX</span>
              </a>
              <a 
                href="mailto:contact@madafresh.mg" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>xxxx@xxxxTsenaGo.mg</span>
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>
                  Antananarivo, Madagascar
                </span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 
              className="text-lg mb-4 font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Horaires
            </h3>
            <div 
              className="space-y-2 text-white/80"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>Lundi - Samedi : 8h - 18h</p>
              <p>Dimanche : 8h - 13h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/60">
          <p style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 TsenaGo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
