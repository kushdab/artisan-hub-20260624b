import React, { useState } from 'react';
import { MapPin, ShoppingBag, Search, ExternalLink, Globe } from 'lucide-react';

interface Artisan {
  id: number;
  name: string;
  craft: string;
  location: string;
  description: string;
  priceRange: string;
}

const ARTISANS: Artisan[] = [
  { id: 1, name: "Samuel Otieno", craft: "Soapstone Carving", location: "Tabaka / Nairobi", description: "Hand-carved kisii stone sculptures with traditional motifs.", priceRange: "$20 - $150" },
  { id: 2, name: "Mary Wambui", craft: "Beaded Jewelry", location: "Maasai Market", description: "Authentic Maasai beadwork blended with contemporary styles.", priceRange: "$10 - $65" },
  { id: 3, name: "David Mutua", craft: "Akamba Woodwork", location: "Wamunyu", description: "Expertly crafted ebony and mahogany functional art pieces.", priceRange: "$40 - $300" },
  { id: 4, name: "Zainab Juma", craft: "Kiondo Weaving", location: "Machakos Hub", description: "Durable sisal baskets featuring natural dyes and leather finishings.", priceRange: "$15 - $90" },
  { id: 5, name: "Peter Kamau", craft: "Recycled Metal Art", location: "Kibera", description: "Innovative sculptures made from repurposed scrap metals.", priceRange: "$50 - $500" },
  { id: 6, name: "Lilian Atieno", craft: "Batik Textiles", location: "Nairobi CBD", description: "Hand-painted fabrics utilizing traditional wax-resist techniques.", priceRange: "$25 - $120" }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArtisans = ARTISANS.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.craft.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <nav className="bg-orange-800 text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="text-orange-300" />
            <h1 className="text-2xl font-bold tracking-tight">ArtisanHub Nairobi</h1>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-orange-200" />
            <input
              type="text"
              placeholder="Find artisans or crafts..."
              className="w-full bg-orange-900/50 border border-orange-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 placeholder-orange-200"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-neutral-800 tracking-tight">
            Kenyan Heritage, <span className="text-orange-700">Global Reach.</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Connecting Nairobi's most talented artisans directly with a global customer base.
            Every purchase supports local livelihoods and preserves centuries-old craftsmanship.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtisans.map((artisan) => (
            <div key={artisan.id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-neutral-100 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 border-b">
                <ShoppingBag size={48} className="text-orange-400 opacity-40" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-1 rounded-full mb-3 uppercase">
                  {artisan.craft}
                </span>
                <h3 className="text-xl font-bold text-neutral-800">{artisan.name}</h3>
                <div className="flex items-center text-neutral-500 text-sm mt-2">
                  <MapPin size={14} className="mr-1 text-orange-600" />
                  {artisan.location}
                </div>
                <p className="text-neutral-600 text-sm mt-4 leading-relaxed">{artisan.description}</p>
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-bold text-neutral-900">{artisan.priceRange}</span>
                  <button className="flex items-center text-orange-700 font-semibold hover:text-orange-900 transition-colors">
                    View Portfolio <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm italic">&copy; 2024 ArtisanHub Nairobi. Ethical trade for a better world.</p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Our Impact</a>
            <a href="#" className="hover:text-white transition-colors">Artisan Login</a>
            <a href="#" className="hover:text-white transition-colors">Global Shipping</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
