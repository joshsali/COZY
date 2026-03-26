import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, BookOpen, Coffee, Heart } from 'lucide-react';
import SEO from '../components/seo';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <SEO 
        title="Home | The Cozy Corner" 
        description="Welcome to The Cozy Corner, your sanctuary for hand-picked literature and quiet moments. Browse our curated bookshelf today."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl serif font-bold leading-tight mb-8"
          >
            Welcome to <br />
            <span className="italic text-warm-accent">The Cozy Corner</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl opacity-70 leading-relaxed mb-10 max-w-lg"
          >
            A sanctuary for readers. Discover hand-picked literature, 
            curated recommendations, and a community that celebrates 
            the slow art of reading.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <NavLink to="/books" className="olive-button flex items-center gap-2 group">
              Browse Books
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/about" className="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 transition-colors serif italic">
              Our Story
            </NavLink>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80" 
              alt="Cozy bookstore interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-[240px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-warm-accent/10 flex items-center justify-center text-warm-accent">
                <Coffee size={20} />
              </div>
              <span className="font-semibold serif">Reading Nook</span>
            </div>
            <p className="text-xs opacity-60 leading-relaxed">
              Every book comes with a recommendation for the perfect tea pairing.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="card p-10">
          <BookOpen className="text-warm-accent mb-6" size={32} />
          <h3 className="serif text-2xl mb-4">Curated Selection</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            We don't stock everything. We only stock what we love and believe you will too.
          </p>
        </div>
        <div className="card p-10">
          <Heart className="text-warm-accent mb-6" size={32} />
          <h3 className="serif text-2xl mb-4">Community First</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Join our monthly book club and connect with fellow bibliophiles in a warm setting.
          </p>
        </div>
        <div className="card p-10">
          <Coffee className="text-warm-accent mb-6" size={32} />
          <h3 className="serif text-2xl mb-4">Slow Living</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Embrace the quiet moments. Our space is designed for deep focus and relaxation.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
