import { Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/26134XXXXXXX', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+26134XXXXXXX';
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF9E6] via-white to-[#E8F5E9] pt-20 lg:pt-0 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1B5E20] px-4 py-2 rounded-full mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Livraison Express
              </span>
            </motion.div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, lineHeight: 1.2 }}
            >
              Des produits<br />
              <span className="text-[#FFC107]">100% frais</span> et<br />
              <span className="text-[#1B5E20]">100% locaux</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl mb-8 text-gray-600"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              🥭 Fruits • 🥬 Légumes • 🍯 Produits artisanaux<br />
              <span className="text-[#1B5E20] font-semibold">Livrés en 24h à Antananarivo</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="bg-[#1B5E20] text-white px-8 py-5 rounded-2xl font-bold uppercase text-sm min-h-[56px] hover:bg-[#145018] transition-all shadow-xl hover:shadow-2xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                💬 Commander sur WhatsApp
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCallClick}
                className="bg-[#FFC107] text-[#1B5E20] px-8 py-5 rounded-2xl font-bold uppercase text-sm min-h-[56px] hover:bg-[#FFD54F] transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <Phone className="w-5 h-5" />
                Appeler
              </motion.button>
            </div>

            <p className="mt-6 text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
              ⚡ Réponse en moins de 5 minutes
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/30 to-[#1B5E20]/30 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762414103968-0e1c31b1aaca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRyb3BpY2FsJTIwZnJ1aXRzJTIwdmVnZXRhYmxlcyUyMGJhc2tldHxlbnwxfHx8fDE3NzAzNTUxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Produits frais Madagascar"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold text-[#1B5E20]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ⭐ 500+ clients satisfaits
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-4 left-4 bg-[#FFC107] px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold text-[#1B5E20]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                🚚 Livraison 24h
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}