import { motion } from 'framer-motion';
import { Rocket, Lock } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4">
          جاهز لتبدأ رحلة التغيير؟
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          🎁 احصل عليه الآن - مجاناً:
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-8 space-y-4">
          <div>
            <label htmlFor="name-cta" className="sr-only">اسمك الأول</label>
            <input type="text" id="name-cta" placeholder="👤 اسمك الأول" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400" />
          </div>
          <div>
            <label htmlFor="email-cta" className="sr-only">بريدك الإلكتروني</label>
            <input type="email" id="email-cta" placeholder="📧 بريدك الإلكتروني" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400" />
          </div>
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
            أرسل لي الدليل الآن <Rocket size={20} />
          </button>
        </motion.form>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-2">
          <Lock size={14} /> خصوصيتك آمنة. لن نشارك بياناتك أبداً.
        </motion.p>
      </div>
    </section>
  );
}
