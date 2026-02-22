import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "نزلت 8 كيلو في شهرين!",
    author: "سارة، 28 سنة"
  },
  {
    quote: "التمارين سهلة وفعالة!",
    author: "محمد، 35 سنة"
  }
];

const TestimonialCard = ({ quote, author, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
    </div>
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <p className="text-gray-600 font-bold text-left">- {author}</p>
  </motion.div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          ⭐ ماذا يقول متابعينا
        </motion.h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
