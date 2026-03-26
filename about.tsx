import { motion } from 'motion/react';
import { Heart, Coffee, BookOpen, MapPin } from 'lucide-react';
import SEO from '../components/seo';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <SEO 
        title="Our Story | About The Cozy Corner" 
        description="Learn about the history and philosophy of The Cozy Corner. We are a community-focused bookstore dedicated to the slow art of reading."
      />
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl serif font-bold mb-6"
        >
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl opacity-60 italic serif"
        >
          "A room without books is like a body without a soul."
        </motion.p>
      </div>

      <div className="space-y-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="serif text-3xl mb-6">The Beginning</h2>
            <p className="opacity-70 leading-relaxed mb-6">
              The Cozy Corner started as a small dream in a quiet neighborhood. 
              We wanted to create a space where time slows down, and the only 
              thing that matters is the story in your hands.
            </p>
            <p className="opacity-70 leading-relaxed">
              Founded by a group of passionate readers, we believe that the 
              physical experience of reading—the smell of paper, the weight 
              of a book, the quiet of a room—is irreplaceable in our digital age.
            </p>
          </div>
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" 
              alt="Old library books" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 aspect-square rounded-[40px] overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80" 
              alt="Coffee and books" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="serif text-3xl mb-6">Our Philosophy</h2>
            <p className="opacity-70 leading-relaxed mb-6">
              We don't just sell books; we curate experiences. Every title on 
              our shelves has been read and loved by one of our team members. 
              We believe in the power of recommendation and the joy of 
              discovering a new favorite author.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-accent/10 flex items-center justify-center text-warm-accent">
                  <Heart size={16} />
                </div>
                <span className="text-sm font-medium">Passion for Literature</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-accent/10 flex items-center justify-center text-warm-accent">
                  <Coffee size={16} />
                </div>
                <span className="text-sm font-medium">Warm Hospitality</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-accent/10 flex items-center justify-center text-warm-accent">
                  <BookOpen size={16} />
                </div>
                <span className="text-sm font-medium">Curated Knowledge</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-12 text-center">
          <MapPin className="text-warm-accent mx-auto mb-6" size={40} />
          <h2 className="serif text-3xl mb-4">Visit Us</h2>
          <p className="opacity-70 leading-relaxed max-w-lg mx-auto mb-8">
            We are located in the heart of the city, tucked away in a quiet 
            alleyway where the bustle of the world fades away.
          </p>
          <div className="text-sm font-medium">
            123 Quiet Lane, Booktown, BK 45678<br />
            Open Daily: 10:00 AM - 8:00 PM
          </div>
        </section>
      </div>
    </motion.div>
  );
}
