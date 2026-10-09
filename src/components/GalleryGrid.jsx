import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery.js';
import { ImageLightbox } from './ImageLightbox.jsx';
import { ZoomIn } from 'lucide-react';

export const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Shop', 'Tyres', 'Repair Work', 'Customers'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs sm:text-sm rounded-lg transition-all cursor-pointer font-semibold ${
              activeCategory === cat
                ? 'bg-[#F58220] text-white shadow-xs'
                : 'bg-white dark:bg-[#0B1F3A] text-[#5F6B7A] dark:text-[#D5DBE5] border border-[#D5DBE5] dark:border-[#0A2E5C] hover:border-[#F58220]'
            }`}
          >
            {cat}
            {cat === 'All' ? ` (${GALLERY_ITEMS.length})` : ''}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative bg-white dark:bg-[#0B1F3A] rounded-xl overflow-hidden border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm hover:shadow-lg hover:border-[#F58220] hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
          >
            {/* Image Box */}
            <div className="relative aspect-4/3 overflow-hidden bg-[#F5F7FA] dark:bg-[#041C3A]">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover overlay with zoom icon */}
              <div className="absolute inset-0 bg-[#041C3A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F58220] text-white flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Tag / Category Badge */}
              <div className="absolute top-3 left-3 bg-[#041C3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded border border-[#0A2E5C]">
                {item.category}
              </div>
            </div>

            {/* Caption */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#F58220] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5F6B7A] dark:text-[#D5DBE5] mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {item.tag && (
                <div className="mt-3 pt-2 border-t border-[#D5DBE5] dark:border-[#0A2E5C] text-[11px] font-semibold text-[#F58220]">
                  {item.tag}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={!!selectedImage}
        currentItem={selectedImage}
        items={filteredItems}
        onClose={() => setSelectedImage(null)}
        onNavigate={(item) => setSelectedImage(item)}
      />
    </div>
  );
};
