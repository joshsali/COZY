import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/seo';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <SEO 
        title="Contact Us | Get in Touch with The Cozy Corner" 
        description="Have a question or want to join our book club? Contact The Cozy Corner today. We'd love to hear from you."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl serif font-bold mb-8"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl opacity-60 leading-relaxed mb-12 max-w-lg"
          >
            Have a question about a book? Want to join our book club? 
            Or just want to say hello? We'd love to hear from you.
          </motion.p>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-warm-accent/10 flex items-center justify-center text-warm-accent flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-2">Email Us</h4>
                <p className="text-lg font-medium">hello@thecozycorner.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-warm-accent/10 flex items-center justify-center text-warm-accent flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-2">Call Us</h4>
                <p className="text-lg font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-warm-accent/10 flex items-center justify-center text-warm-accent flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-2">Visit Us</h4>
                <p className="text-lg font-medium">123 Quiet Lane, Booktown, BK 45678</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="card p-12"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-40">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe" 
                  className="w-full px-6 py-4 rounded-2xl bg-warm-bg border border-black/5 focus:outline-none focus:border-warm-accent/30 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-40">Your Email</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full px-6 py-4 rounded-2xl bg-warm-bg border border-black/5 focus:outline-none focus:border-warm-accent/30 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold opacity-40">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?" 
                className="w-full px-6 py-4 rounded-2xl bg-warm-bg border border-black/5 focus:outline-none focus:border-warm-accent/30 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold opacity-40">Message</label>
              <textarea 
                rows={5} 
                placeholder="Tell us more..." 
                className="w-full px-6 py-4 rounded-2xl bg-warm-bg border border-black/5 focus:outline-none focus:border-warm-accent/30 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="olive-button w-full flex items-center justify-center gap-3 py-5 text-lg font-bold">
              Send Message
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
