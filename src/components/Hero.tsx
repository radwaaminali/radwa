import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "تمارين فعالة لحرق الدهون",
  "مناسب لجميع المستويات",
  "لا يتطلب أي معدات رياضية"
];

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              <span className="text-emerald-400">حمل مجاناً:</span>
              <br />
              "7 تمارين منزلية تحرق الدهون"
            </h1>
            <p className="text-lg text-gray-300 mb-6">بدون معدات | 20 دقيقة يومياً | نتائج مضمونة في 30 يوم</p>
            
            <form className="flex flex-col sm:flex-row gap-3 mb-6">
              <input type="email" placeholder="📧 أدخل إيميلك هنا" className="flex-grow px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400" />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                حمل الدليل المجاني
              </button>
            </form>

            <ul className="space-y-2 text-gray-400">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center">
             <img src="https://picsum.photos/seed/ebook/400/500" alt="غلاف الكتاب الإلكتروني" className="rounded-lg shadow-2xl max-w-xs w-full" referrerPolicy='no-referrer'/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
