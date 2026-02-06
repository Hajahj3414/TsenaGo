import { ShoppingCart, MessageCircle, Home } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: ShoppingCart,
    number: "1",
    title: "Choisissez vos produits",
    description: "Parcourez notre sélection de produits frais locaux",
    color: "bg-[#FFC107]"
  },
  {
    icon: MessageCircle,
    number: "2",
    title: "Contactez-nous",
    description: "Via WhatsApp ou téléphone pour passer commande",
    color: "bg-[#1B5E20]"
  },
  {
    icon: Home,
    number: "3",
    title: "Livraison à domicile",
    description: "Recevez vos produits frais directement chez vous",
    color: "bg-[#4ECDC4]"
  }
];

export function HowItWorks() {
  return (
    <section id="comment" className="py-16 lg:py-24 bg-gradient-to-br from-[#FFF9E6] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#1B5E20] text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Simple & Rapide
          </span>
          <h2 
            className="text-3xl md:text-4xl mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Comment ça <span className="text-[#FFC107]">marche</span> ?
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            En 3 étapes faciles vers des produits frais
          </p>
        </motion.div>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 relative`}
                >
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#FF8787] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </motion.div>
                
                <h3 
                  className="text-xl mb-2 text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical */}
        <div className="lg:hidden max-w-md mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-24 w-0.5 h-full bg-gradient-to-b from-gray-300 to-gray-200"></div>
              )}
              
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#FF8787] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 
                  className="text-xl mb-2 text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}