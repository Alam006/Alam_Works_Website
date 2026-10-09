import React, { useState, useMemo } from 'react';
import { TYRE_PRODUCTS } from '../data/tyres.js';
import { TyreCard } from '../components/TyreCard.jsx';
import { TyreFilters } from '../components/TyreFilters.jsx';
import { RotateCcw, ShieldCheck } from 'lucide-react';

const initialFilters = {
  searchQuery: '',
  vehicleType: 'All',
  vehicleCategory: 'All',
  tyreType: 'All',
  brand: 'All',
  size: 'All Sizes',
};

export const TyresPage = ({
  onSelectTyreEnquiry,
}) => {
  const [filters, setFilters] = useState(initialFilters);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Filter logic
  const filteredTyres = useMemo(() => {
    return TYRE_PRODUCTS.filter((tyre) => {
      // Search Query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesBrand = tyre.brand.toLowerCase().includes(query);
        const matchesName = tyre.name.toLowerCase().includes(query);
        const matchesSize = tyre.size.toLowerCase().includes(query);
        const matchesDesc = tyre.description.toLowerCase().includes(query);
        const matchesCat = tyre.vehicleCategory.toLowerCase().includes(query);
        if (!matchesBrand && !matchesName && !matchesSize && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      // Vehicle Type
      if (filters.vehicleType !== 'All' && tyre.vehicleType !== filters.vehicleType) {
        return false;
      }

      // Vehicle Category
      if (filters.vehicleCategory !== 'All' && tyre.vehicleCategory !== filters.vehicleCategory) {
        return false;
      }

      // Tyre Type (Tubeless / Tube)
      if (filters.tyreType !== 'All' && tyre.tyreType !== filters.tyreType) {
        return false;
      }

      // Brand
      if (filters.brand !== 'All' && tyre.brand !== filters.brand) {
        return false;
      }

      // Tyre Size
      if (filters.size !== 'All Sizes' && tyre.size !== filters.size) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Count active non-default filters
  const activeCount = useMemo(() => {
    let count = 0;
    if (filters.searchQuery.trim()) count++;
    if (filters.vehicleType !== 'All') count++;
    if (filters.vehicleCategory !== 'All') count++;
    if (filters.tyreType !== 'All') count++;
    if (filters.brand !== 'All') count++;
    if (filters.size !== 'All Sizes') count++;
    return count;
  }, [filters]);

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F58220] mb-2">
            Tyre Catalogue & Finder
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            Find the Right Tyre for Your Vehicle
          </h1>
          <p className="text-base sm:text-lg text-[#5F6B7A] dark:text-[#D5DBE5] leading-relaxed mx-auto max-w-2xl">
            Browse genuine tyres from CEAT, Apollo, JK Tyre, and Ralco. Filter by vehicle type, size, brand, or construction. Request direct quotations with zero hidden charges.
          </p>
        </div>

        {/* Notice on Real Pricing / Sample Data */}
        <div className="mb-8 p-4 bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#D5DBE5] dark:border-[#0A2E5C] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5F6B7A] dark:text-[#D5DBE5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F58220] shrink-0" />
            <span>
              Prices are provided on direct enquiry to guarantee real-time stock availability and fair market rates.
            </span>
          </div>
          <button
            onClick={() => onSelectTyreEnquiry()}
            className="text-[#F58220] hover:text-[#E86D00] font-bold hover:underline cursor-pointer shrink-0"
          >
            Request Instant Price Quote →
          </button>
        </div>

        {/* Layout: Sidebar Filters + Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Filters Sidebar & Mobile Drawer */}
          <TyreFilters
            filters={filters}
            onChange={setFilters}
            onClear={handleClearFilters}
            activeCount={activeCount}
            totalResults={filteredTyres.length}
            isMobileDrawerOpen={isMobileDrawerOpen}
            setIsMobileDrawerOpen={setIsMobileDrawerOpen}
          />

          {/* Product Grid Area */}
          <div className="flex-1 w-full min-w-0">
            
            {/* Results status bar */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#D5DBE5] dark:border-[#0A2E5C] text-xs sm:text-sm">
              <span className="text-[#5F6B7A] dark:text-[#D5DBE5] font-medium">
                Showing <strong className="text-[#0B1F3A] dark:text-white">{filteredTyres.length}</strong> tyres
                {activeCount > 0 && ` matching ${activeCount} active filter${activeCount > 1 ? 's' : ''}`}
              </span>

              {activeCount > 0 && (
                <button
                  onClick={handleClearFilters}
                  className="text-[#F58220] hover:text-[#E86D00] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              )}
            </div>

            {/* Grid */}
            {filteredTyres.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTyres.map((tyre) => (
                  <TyreCard
                    key={tyre.id}
                    tyre={tyre}
                    onGetBestPrice={(t) => onSelectTyreEnquiry(t)}
                    onSendEnquiry={(t) => onSelectTyreEnquiry(t)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-white dark:bg-[#0B1F3A] rounded-2xl border border-[#D5DBE5] dark:border-[#0A2E5C]">
                <p className="text-lg font-bold text-[#0B1F3A] dark:text-white mb-2">
                  No matching tyres found
                </p>
                <p className="text-sm text-[#5F6B7A] dark:text-[#D5DBE5] max-w-md mx-auto mb-6">
                  We carry hundreds of sizes and brands at our workshop that may not be displayed here yet.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B1F3A] dark:text-white bg-[#F5F7FA] dark:bg-[#0A2E5C] rounded-lg border border-[#D5DBE5] dark:border-[#0A2E5C] hover:border-[#F58220]"
                  >
                    Clear Filter Criteria
                  </button>
                  <button
                    onClick={() => onSelectTyreEnquiry()}
                    className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm cursor-pointer"
                  >
                    Enquire Custom Tyre Size
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
