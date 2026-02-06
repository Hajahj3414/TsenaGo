import { Phone, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/26134XXXXXXX', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+26134XXXXXXX';
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFC107] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD54F] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 text-6xl opacity-20"
      >
        🥭
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-6xl opacity-20"
      >
        🥬
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 text-center text-white"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1B5E20] px-5 py-2 rounded-full mb-6 shadow-xl"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-bold uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Offre Spéciale
          </span>
        </motion.div>

        <h2 
          className="text-3xl md:text-5xl lg:text-6xl mb-6"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}
        >
          Prêt à commander<br />
          des produits <span className="text-[#FFC107]">100% frais</span> ?
        </h2>
        
        <p 
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          ⚡ Livraison express • 🌱 Produits locaux • ✨ Fraîcheur garantie
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(255, 193, 7, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="w-full sm:flex-1 bg-[#FFC107] text-[#1B5E20] px-10 py-6 rounded-2xl font-bold uppercase text-base min-h-[64px] hover:bg-[#FFD54F] transition-all shadow-2xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="flex items-center justify-center gap-3">
              <span className="text-2xl">💬</span>
              <span>Commander sur WhatsApp</span>
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCallClick}
            className="w-full sm:flex-1 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-6 rounded-2xl font-bold uppercase text-base min-h-[64px] hover:bg-white/30 transition-all flex items-center justify-center gap-3 shadow-2xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Phone className="w-6 h-6" />
            <span>Appeler maintenant</span>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#FFC107]" />
            <span>Réponse en 5 min</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            <span>Service 7j/7</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🚚</span>
            <span>Livraison 24h</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}