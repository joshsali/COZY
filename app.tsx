/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Info, Mail, Home as HomeIcon, Instagram, Twitter, Facebook } from 'lucide-react';
import Home from './pages/home';
import About from './pages/about';
import Books from './pages/books';
import Contact from './pages/contact';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-bg/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-2xl serif font-bold tracking-tight">
          The Cozy Corner
        </NavLink>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/books" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Books</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </div>
        <div className="md:hidden">
          {/* Mobile menu could go here, but for now we'll keep it simple */}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-white/50 border-t border-black/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="serif text-xl mb-4">The Cozy Corner</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Your sanctuary for hand-picked literature and quiet moments.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-40">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
              <li><NavLink to="/books" className="hover:underline">Books</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-40">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><Twitter size={20} /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-black/5 text-center text-xs opacity-40">
          &copy; {new Date().getFullYear()} The Cozy Corner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/books" element={<Books />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
