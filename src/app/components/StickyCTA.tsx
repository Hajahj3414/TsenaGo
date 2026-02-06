import { Phone, Zap } from "lucide-react";
import { motion } from "motion/react";

export function StickyCTA() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/26134XXXXXXXX', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+26134XXXXXXX';
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t-4 border-[#FFC107]"
    >
      <div className="container mx-auto px-4 py-3 flex gap-3">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
          className="flex-1 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white py-4 rounded-2xl font-bold uppercase text-xs min-h-[56px] hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span className="text-xl">💬</span>
          <span>WhatsApp</span>
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleCallClick}
          className="flex-1 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-[#1B5E20] py-4 rounded-2xl font-bold uppercase text-xs min-h-[56px] hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <Phone className="w-5 h-5" />
          <span>Appeler</span>
        </motion.button>
      </div>
      
      {/* Pulse indicator */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-[#FFC107] rounded-full blur-sm"
      ></motion.div>
    </motion.div>
  );
}