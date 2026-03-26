import { motion } from 'motion/react';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import SEO from '../components/seo';

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "$18.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    category: "Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: "$21.99",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    category: "Self-Help"
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$15.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1543005187-9ef012ad46f4?auto=format&fit=crop&w=800&q=80",
    category: "Classic"
  },
  {
    id: 4,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: "$19.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=800&q=80",
    category: "Mystery"
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$12.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    category: "Classic"
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    price: "$23.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1532012197367-6849fd11b29d?auto=format&fit=crop&w=800&q=80",
    category: "Memoir"
  }
];

export default function Books() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <SEO 
        title="Our Bookshelf | Curated Book Recommendations" 
        description="Explore our hand-picked collection of fiction, self-help, classics, and memoirs. Find your next great read at The Cozy Corner."
      />
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl serif font-bold mb-4">Our Bookshelf</h1>
          <p className="opacity-60 serif italic">Hand-picked recommendations for every mood.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
            <input 
              type="text" 
              placeholder="Search books..." 
              className="pl-12 pr-6 py-3 rounded-full bg-white border border-black/5 focus:outline-none focus:border-warm-accent/30 transition-colors w-full md:w-64"
            />
          </div>
          <button className="p-3 rounded-full bg-white border border-black/5 hover:bg-black/5 transition-colors">
            <Filter size={20} className="opacity-60" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {books.map((book, index) => (
          <motion.div 
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                {book.rating}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="olive-button flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="px-2">
              <div className="text-xs uppercase tracking-widest font-semibold opacity-40 mb-2">{book.category}</div>
              <h3 className="serif text-xl font-bold mb-1 group-hover:text-warm-accent transition-colors">{book.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-60 italic serif">{book.author}</span>
                <span className="font-bold text-lg">{book.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 card p-12 bg-warm-accent text-white text-center">
        <h2 className="serif text-3xl mb-4 italic">Can't find what you're looking for?</h2>
        <p className="opacity-80 max-w-lg mx-auto mb-8">
          We have thousands of more titles in our physical store. 
          Contact us and we'll help you find your next great read.
        </p>
        <button className="px-10 py-4 rounded-full bg-white text-warm-accent font-bold hover:bg-opacity-90 transition-opacity">
          Request a Book
        </button>
      </div>
    </motion.div>
  );
}
