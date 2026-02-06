import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

const products = [
  {
    name: "Mangues Fraîches",
    price: "5 000 Ar",
    image: "https://images.unsplash.com/photo-1724120996945-88eb4637bfc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1hbmdvZXMlMjBwYXBheWFzJTIwdHJvcGljYWwlMjBmcnVpdHN8ZW58MXx8fHwxNzcwMzU1MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Frais du jour",
    badgeColor: "bg-[#FFC107]"
  },
  {
    name: "Légumes Variés",
    price: "3 500 Ar",
    image: "https://images.unsplash.com/photo-1725483990685-820291c0fca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjB0b21hdG9lcyUyMGNhcnJvdHN8ZW58MXx8fHwxNzcwMzU1MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Populaire",
    badgeColor: "bg-[#FF6B6B]"
  },
  {
    name: "Miel Artisanal",
    price: "12 000 Ar",
    image: "https://images.unsplash.com/photo-1719871766551-b9ecf87eee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbG9jYWwlMjBob25leSUyMGphcnxlbnwxfHx8fDE3NzAzNTUxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Artisanal",
    badgeColor: "bg-[#A1887F]"
  },
  {
    name: "Bananes Locales",
    price: "2 000 Ar",
    image: "https://images.unsplash.com/photo-1757332050958-b797a022c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhbmFuYSUyMGJ1bmNoJTIweYllbG93fGVufDF8fHx8MTc3MDM1NTEwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Frais du jour",
    badgeColor: "bg-[#FFC107]"
  },
  {
    name: "Légumes Verts",
    price: "2 000 Ar",
    image: "https://images.unsplash.com/photo-1741515042603-70545daeb0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlYWZ5JTIwZ3JlZW5zJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzAzNTUxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Populaire",
    badgeColor: "bg-[#FF6B6B]"
  },
  {
    name: "Panier Découverte",
    price: "15 000 Ar",
    image: "https://images.unsplash.com/photo-1762414103968-0e1c31b1aaca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRyb3BpY2FsJTIwZnJ1aXRzJTIwdmVnZXRhYmxlcyUyMGJhc2tldHxlbnwxfHx8fDE3NzAzNTUxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Best-seller",
    badgeColor: "bg-[#1B5E20]"
  }
];

export function FeaturedProducts() {
  const handleOrderClick = () => {
    window.open('https://wa.me/26134XXXXXXXX', '_blank');
  };

  return (
    <section id="produits" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-[#1B5E20] px-4 py-2 rounded-full text-sm font-bold uppercase mb-4 shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Sparkles className="w-4 h-4" />
            Nos produits
          </span>
          <h2 
            className="text-3xl md:text-4xl mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Produits <span className="text-[#FFC107]">en vedette</span>
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Une sélection de nos meilleurs produits locaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg`}>
                    {product.badge}
                  </span>
                </div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">🔥</span>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-xl mb-2 text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <p 
                    className="text-2xl text-[#1B5E20]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    {product.price}
                  </p>
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    /unité
                  </span>
                </div>
                <button
                  onClick={handleOrderClick}
                  className="w-full bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-[#1B5E20] py-3 rounded-xl font-bold uppercase text-sm hover:shadow-lg transition-all min-h-[48px] group-hover:scale-105"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Commander 🛒
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}