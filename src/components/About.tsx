import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          عن المدرب
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          أحمد حسن، مدرب لياقة بدنية معتمد بخبرة أكثر من 10 سنوات في مساعدة الناس على تحقيق أهدافهم الصحية. متخصص في التمارين المنزلية والتحول الجسدي.
        </motion.p>
        <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            src="https://picsum.photos/seed/coach/200/200"
            alt="المدرب أحمد حسن"
            className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto"
            referrerPolicy='no-referrer'
          />
      </div>
    </section>
  );
}
