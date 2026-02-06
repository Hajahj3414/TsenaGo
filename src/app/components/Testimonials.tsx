import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ravaka M.",
    location: "Antananarivo",
    text: "Produits très frais, livraison rapide. Service fiable.",
    rating: 5,
    avatar: "🙋‍♀️"
  },
  {
    name: "Jean-Claude R.",
    location: "Fianarantsoa",
    text: "J'adore commander ici ! Les fruits sont toujours parfaits.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    name: "Nirina T.",
    location: "Mahajanga",
    text: "Excellente qualité et service client très réactif sur WhatsApp.",
    rating: 5,
    avatar: "👩‍🦱"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#E8F5E9] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1B5E20]/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white text-[#1B5E20] px-4 py-2 rounded-full text-sm font-bold uppercase mb-4 shadow-lg border-2 border-[#FFC107]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Témoignages
          </span>
          <h2 
            className="text-3xl md:text-4xl mb-4 text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Ce que disent nos <span className="text-[#FFC107]">clients</span>
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Des centaines de clients satisfaits à Madagascar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, rotate: 2 }}
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>
              
              <p 
                className="text-gray-700 mb-6 text-base leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p 
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {testimonial.name}
                  </p>
                  <p 
                    className="text-sm text-gray-600 flex items-center gap-1"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-[#FFC107]">
            <Star className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
            <span className="font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              4.9/5 • 500+ avis vérifiés
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}