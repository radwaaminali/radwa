import { motion } from 'framer-motion';
import { Zap, Clock, Home } from 'lucide-react';

const features = [
  {
    icon: <Zap size={40} className="text-emerald-500" />,
    title: "تمارين عالية الكثافة",
    description: "صممت التمارين لتحقيق أقصى حرق للدهون في أقل وقت ممكن."
  },
  {
    icon: <Clock size={40} className="text-emerald-500" />,
    title: "20 دقيقة فقط يومياً",
    description: "يمكنك دمج التمارين بسهولة في جدولك اليومي المزدحم."
  },
  {
    icon: <Home size={40} className="text-emerald-500" />,
    title: "تمرن في أي مكان",
    description: "لا حاجة لأي معدات رياضية، يمكنك التمرين في راحة منزلك."
  }
];

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-md text-center"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          لماذا هذا الدليل هو الأفضل لك؟
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
