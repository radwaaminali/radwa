import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { name: 'المميزات', href: '#features' },
    { name: 'عن المدرب', href: '#about' },
    { name: 'آراء المتابعين', href: '#testimonials' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-emerald-600">Fit<span className="text-gray-800">Life</span></div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
              {item.name}
            </a>
          ))}
        </nav>
        <a href="#cta" className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
          ابدأ الآن
        </a>
      </div>
    </motion.header>
  );
}
