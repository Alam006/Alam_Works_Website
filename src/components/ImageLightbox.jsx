import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageLightbox = ({
  isOpen,
  currentItem,
  items,
  onClose,
  onNavigate,
}) => {
  const currentIndex = currentItem ? items.findIndex((item) => item.id === currentItem.id) : -1;

  const handlePrev = useCallback(() => {
    if (items.length <= 1 || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1 || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  }, [currentIndex, items, onNavigate]);

  // Handle keyboard events (Escape, ArrowLeft, ArrowRight) and manage body scroll lock
  useEffect(() => {
    if (!isOpen || !currentItem) return;

    // Save previous overflow style and prevent background body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentItem, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#041C3A]/95 backdrop-blur-md cursor-pointer select-none"
    >
      {/* Prominent Close button in top-right corner */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-white hover:text-[#F58220] bg-[#0B1F3A]/90 hover:bg-[#0A2E5C] active:scale-95 rounded-full transition-all z-30 cursor-pointer border border-[#0A2E5C] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F58220]"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 text-white hover:text-[#F58220] bg-[#0B1F3A]/90 hover:bg-[#0A2E5C] active:scale-95 rounded-full transition-all z-30 cursor-pointer border border-[#0A2E5C] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F58220]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 text-white hover:text-[#F58220] bg-[#0B1F3A]/90 hover:bg-[#0A2E5C] active:scale-95 rounded-full transition-all z-30 cursor-pointer border border-[#0A2E5C] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F58220]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image & Caption Container - stopPropagation prevents clicks on the image/caption from closing the lightbox */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full flex flex-col items-center cursor-default"
      >
        <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xl bg-black/40 flex items-center justify-center shadow-2xl border border-[#0A2E5C]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] max-w-full object-contain pointer-events-auto"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white max-w-xl px-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F58220] mb-1">
            <span>{currentItem.category}</span>
            {currentItem.tag && (
              <>
                <span className="text-[#D5DBE5]">·</span>
                <span>{currentItem.tag}</span>
              </>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">{currentItem.title}</h3>
          <p className="text-xs sm:text-sm text-[#D5DBE5] mt-1">{currentItem.description}</p>
          <p className="text-[11px] text-[#5F6B7A] mt-2">
            Image {currentIndex + 1} of {items.length} · Click outside or press Esc to close
          </p>
        </div>
      </div>
    </div>
  );
};
