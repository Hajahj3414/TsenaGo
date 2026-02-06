import { Leaf, Truck, ShoppingBasket, Handshake } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Leaf,
    title: "Produits 100% locaux",
    description: "Directement des producteurs malagasy vers votre table",
    color: "from-[#1B5E20] to-[#2E7D32]"
  },
  {
    icon: Truck,
    title: "Livraison rapide",
    description: "Commandez aujourd'hui, recevez demain",
    color: "from-[#FFC107] to-[#FFD54F]"
  },
  {
    icon: ShoppingBasket,
    title: "Fraîcheur garantie",
    description: "Produits sélectionnés chaque matin",
    color: "from-[#FF6B6B] to-[#FF8787]"
  },
  {
    icon: Handshake,
    title: "Service de proximité",
    description: "Une équipe à votre écoute 7j/7",
    color: "from-[#4ECDC4] to-[#44A8A0]"
  }
];

export function WhyMadaFresh() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1B5E20]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#FFC107] text-[#1B5E20] px-4 py-2 rounded-full text-sm font-bold uppercase mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nos avantages
          </span>
          <h2 
            className="text-3xl md:text-4xl mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Pourquoi choisir <span className="text-[#FFC107]">TsenaGo</span> ?
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            La meilleure façon d'acheter des produits frais locaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg rotate-3 hover:rotate-6 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="text-xl mb-2 text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}