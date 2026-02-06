import { MapPin, Clock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const zones = [
  "Antananarivo ",
  "Fianarantsoa",
  "Mahajanga",
  "Antsirabe",
  "Tamatave",
  "Partout à Madagascar"
];

const features = [
  { icon: CheckCircle, text: "100% Local" },
  { icon: CheckCircle, text: "Produits Frais" },
  { icon: CheckCircle, text: "Livraison Rapide" }
];

export function DeliveryZone() {
  return (
    <section id="zone" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl mb-4 text-[#1B5E20]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Zone de livraison
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Nous livrons dans plusieurs quartiers d'Antananarivo et partout à Madagascar. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mock Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="aspect-video bg-gradient-to-br from-[#1B5E20]/20 to-[#FFC107]/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <MapPin className="w-16 h-16 text-[#1B5E20]" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNyw5NCwzMiwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-[#1B5E20]" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>
                Horaires : Lundi - Samedi 8h-18h, Dimanche 8h-13h
              </span>
            </div>
          </motion.div>

          {/* Zones List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 
              className="text-xl mb-4 text-gray-900"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Zones couvertes
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {zones.map((zone, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-[#1B5E20] flex-shrink-0" />
                  <span 
                    className="text-gray-700 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {zone}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <h4 
                className="text-lg mb-3 text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Nos engagements
              </h4>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <feature.icon className="w-5 h-5 text-[#1B5E20]" />
                    <span 
                      className="text-gray-700"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
