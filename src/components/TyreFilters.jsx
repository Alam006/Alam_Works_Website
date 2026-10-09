import React from 'react';
import { Search, RotateCcw, Filter, X } from 'lucide-react';

const AVAILABLE_BRANDS = ['CEAT', 'Apollo', 'JK Tyre', 'Ralco'];
const AVAILABLE_SIZES = [
  'All Sizes',
  '90/90-18',
  '100/90-17',
  '2.75-17',
  '120/80-17',
  '90/100-10',
  '90/90-12',
  '100/90-10',
  '165/80 R14',
  '185/65 R15',
  '175/65 R14',
  '195/60 R16',
  '215/65 R16',
  '235/65 R17',
  '205/60 R16',
  '7.00-16'
];

export const TyreFilters = ({
  filters,
  onChange,
  onClear,
  activeCount,
  totalResults,
  isMobileDrawerOpen,
  setIsMobileDrawerOpen,
}) => {
  const handleFilterChange = (key, value) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const filterContent = (
    <div className="space-y-6">
      {/* Search Input */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Search Tyres
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-[#5F6B7A] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search brand, size or name..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] rounded-lg text-[#0B1F3A] dark:text-white placeholder:text-[#5F6B7A] focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
          />
        </div>
      </div>

      {/* Vehicle Type Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Vehicle Type
        </label>
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#F5F7FA] dark:bg-[#041C3A] rounded-lg border border-[#D0D8E3] dark:border-[#0A2E5C]">
          {['All', 'Two Wheeler', 'Four Wheeler'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleFilterChange('vehicleType', type)}
              className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filters.vehicleType === type
                  ? 'bg-[#F58220] text-white shadow-xs'
                  : 'text-[#5F6B7A] dark:text-[#D5DBE5] hover:text-[#0B1F3A] dark:hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Category Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Vehicle Category
        </label>
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#F5F7FA] dark:bg-[#041C3A] rounded-lg border border-[#D0D8E3] dark:border-[#0A2E5C]">
          {['All', 'Bike', 'Scooter', 'Car', 'SUV'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleFilterChange('vehicleCategory', cat)}
              className={`py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer text-center ${
                filters.vehicleCategory === cat
                  ? 'bg-[#F58220] text-white shadow-xs'
                  : 'text-[#5F6B7A] dark:text-[#D5DBE5] hover:text-[#0B1F3A] dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tyre Type Filter (Tubeless vs Tube) */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Tyre Construction
        </label>
        <div className="flex gap-1.5 p-1 bg-[#F5F7FA] dark:bg-[#041C3A] rounded-lg border border-[#D0D8E3] dark:border-[#0A2E5C]">
          {['All', 'Tubeless', 'Tube'].map((tType) => (
            <button
              key={tType}
              type="button"
              onClick={() => handleFilterChange('tyreType', tType)}
              className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer text-center ${
                filters.tyreType === tType
                  ? 'bg-[#F58220] text-white shadow-xs'
                  : 'text-[#5F6B7A] dark:text-[#D5DBE5] hover:text-[#0B1F3A] dark:hover:text-white'
              }`}
            >
              {tType}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Brand
        </label>
        <div className="grid grid-cols-2 gap-2">
          {['All', ...AVAILABLE_BRANDS].map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => handleFilterChange('brand', brand)}
              className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-left flex items-center justify-between cursor-pointer ${
                filters.brand === brand
                  ? 'border-[#F58220] bg-[#F58220]/10 text-[#F58220] font-bold'
                  : 'border-[#D0D8E3] dark:border-[#0A2E5C] bg-[#F5F7FA] dark:bg-[#041C3A] text-[#0B1F3A] dark:text-[#D5DBE5] hover:border-[#F58220]'
              }`}
            >
              <span>{brand === 'All' ? 'All Brands' : brand}</span>
              {filters.brand === brand && <div className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />}
            </button>
          ))}
        </div>
      </div>

      {/* Tyre Size Dropdown */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Tyre Size
        </label>
        <select
          value={filters.size}
          onChange={(e) => handleFilterChange('size', e.target.value)}
          className="w-full py-2 px-3 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] rounded-lg text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] cursor-pointer"
        >
          {AVAILABLE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Section (With Note) */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white mb-2">
          Sort
        </label>
        <select
          disabled
          className="w-full py-2 px-3 text-sm bg-[#F5F7FA] dark:bg-[#041C3A] border border-[#D0D8E3] dark:border-[#0A2E5C] text-[#5F6B7A] dark:text-[#D5DBE5] rounded-lg cursor-not-allowed"
        >
          <option>Default (Featured)</option>
        </select>
        <p className="text-[11px] text-[#5F6B7A] dark:text-[#D5DBE5] mt-1">
          *Price sorting will be enabled upon official inventory price list release.
        </p>
      </div>

      {/* Clear Filters Button */}
      {activeCount > 0 && (
        <button
          onClick={onClear}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-[#0B1F3A] dark:text-white bg-[#F5F7FA] dark:bg-[#0A2E5C] hover:bg-[#D5DBE5] dark:hover:bg-[#0B1F3A] rounded-lg transition-colors cursor-pointer border border-[#D0D8E3] dark:border-[#0A2E5C]"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#F58220]" />
          <span>Clear Filters ({activeCount})</span>
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="bg-white dark:bg-[#0B1F3A] p-6 rounded-xl border border-[#D5DBE5] dark:border-[#0A2E5C] shadow-sm sticky top-24">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#F58220]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white">
                Filter Tyres
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#F58220] bg-[#F58220]/10 px-2 py-0.5 rounded-full">
              {totalResults} items
            </span>
          </div>

          {filterContent}
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4 flex items-center justify-between gap-3">
        <button
          onClick={() => setIsMobileDrawerOpen(true)}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm"
        >
          <Filter className="w-4 h-4 text-white" />
          <span>Filter Catalogue</span>
          {activeCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-white text-[#F58220] text-[10px] flex items-center justify-center font-bold">
              {activeCount}
            </span>
          )}
        </button>

        {activeCount > 0 && (
          <button
            onClick={onClear}
            className="p-2.5 text-[#5F6B7A] dark:text-[#D5DBE5] bg-white dark:bg-[#0B1F3A] border border-[#D5DBE5] dark:border-[#0A2E5C] rounded-lg hover:text-[#F58220]"
            title="Clear all filters"
          >
            <RotateCcw className="w-4 h-4 text-[#F58220]" />
          </button>
        )}
      </div>

      {/* Mobile Drawer Modal */}
      {isMobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#041C3A]/75 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white dark:bg-[#0B1F3A] h-full shadow-2xl p-6 overflow-y-auto border-l border-[#D5DBE5] dark:border-[#0A2E5C] z-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D5DBE5] dark:border-[#0A2E5C]">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#F58220]" />
                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                    Filters
                  </h3>
                </div>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1 rounded-md text-[#5F6B7A] hover:text-[#0B1F3A] dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {filterContent}
            </div>

            <div className="pt-6 border-t border-[#D5DBE5] dark:border-[#0A2E5C] mt-6">
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#F58220] hover:bg-[#E86D00] rounded-lg shadow-sm"
              >
                Apply Filters & Show {totalResults} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
