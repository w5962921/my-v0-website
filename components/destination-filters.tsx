'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface DestinationFiltersProps {
  onFilterChange: (filters: FilterState) => void
  regions?: FilterOption[]
  durations?: FilterOption[]
  priceRanges?: FilterOption[]
}

export interface FilterState {
  region: string | null
  duration: string | null
  priceRange: string | null
  searchTerm: string
}

export default function DestinationFilters({
  onFilterChange,
  regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'asia-pacific', label: 'Asia-Pacific', count: 3 },
    { value: 'europe', label: 'Europe', count: 5 },
    { value: 'africa', label: 'Africa', count: 2 },
    { value: 'south-america', label: 'South America', count: 1 },
  ],
  durations = [
    { value: 'all', label: 'Any Duration' },
    { value: 'short', label: '5-7 days', count: 4 },
    { value: 'medium', label: '8-10 days', count: 6 },
    { value: 'long', label: '11+ days', count: 1 },
  ],
  priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $10,000', count: 3 },
    { value: 'mid', label: '$10,000 - $15,000', count: 5 },
    { value: 'premium', label: '$15,000+', count: 3 },
  ],
}: DestinationFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    region: null,
    duration: null,
    priceRange: null,
    searchTerm: '',
  })

  const [expandedFilters, setExpandedFilters] = useState({
    region: true,
    duration: true,
    price: true,
  })

  const handleFilterChange = (type: keyof Omit<FilterState, 'searchTerm'>, value: string) => {
    const newFilters = {
      ...filters,
      [type]: filters[type] === value ? null : value,
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = {
      ...filters,
      searchTerm: e.target.value,
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const toggleExpanded = (filterType: string) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType as keyof typeof expandedFilters],
    }))
  }

  const resetFilters = () => {
    const empty: FilterState = {
      region: null,
      duration: null,
      priceRange: null,
      searchTerm: '',
    }
    setFilters(empty)
    onFilterChange(empty)
  }

  const hasActiveFilters = filters.region || filters.duration || filters.priceRange || filters.searchTerm

  return (
    <div className="w-full lg:w-64 space-y-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-sm text-amber-600 hover:text-amber-700 font-medium"
          >
            Reset
          </button>
        )}
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search destinations..."
          value={filters.searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 text-sm"
        />
      </div>

      {/* Region Filter */}
      <div>
        <button
          onClick={() => toggleExpanded('region')}
          className="w-full flex items-center justify-between text-gray-900 font-semibold hover:text-amber-600 transition"
        >
          Region
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedFilters.region ? '' : '-rotate-90'}`}
          />
        </button>
        {expandedFilters.region && (
          <div className="mt-3 space-y-2">
            {regions.map(option => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="region"
                  value={option.value}
                  checked={filters.region === option.value}
                  onChange={() => handleFilterChange('region', option.value)}
                  className="w-4 h-4 text-amber-600"
                />
                <span className="text-sm text-gray-700 group-hover:text-amber-600 flex-1">
                  {option.label}
                </span>
                {option.count && <span className="text-xs text-gray-500">({option.count})</span>}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Duration Filter */}
      <div>
        <button
          onClick={() => toggleExpanded('duration')}
          className="w-full flex items-center justify-between text-gray-900 font-semibold hover:text-amber-600 transition"
        >
          Duration
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedFilters.duration ? '' : '-rotate-90'}`}
          />
        </button>
        {expandedFilters.duration && (
          <div className="mt-3 space-y-2">
            {durations.map(option => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="duration"
                  value={option.value}
                  checked={filters.duration === option.value}
                  onChange={() => handleFilterChange('duration', option.value)}
                  className="w-4 h-4 text-amber-600"
                />
                <span className="text-sm text-gray-700 group-hover:text-amber-600 flex-1">
                  {option.label}
                </span>
                {option.count && <span className="text-xs text-gray-500">({option.count})</span>}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => toggleExpanded('price')}
          className="w-full flex items-center justify-between text-gray-900 font-semibold hover:text-amber-600 transition"
        >
          Price Range
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedFilters.price ? '' : '-rotate-90'}`}
          />
        </button>
        {expandedFilters.price && (
          <div className="mt-3 space-y-2">
            {priceRanges.map(option => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  value={option.value}
                  checked={filters.priceRange === option.value}
                  onChange={() => handleFilterChange('priceRange', option.value)}
                  className="w-4 h-4 text-amber-600"
                />
                <span className="text-sm text-gray-700 group-hover:text-amber-600 flex-1">
                  {option.label}
                </span>
                {option.count && <span className="text-xs text-gray-500">({option.count})</span>}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 font-medium mb-2">ACTIVE FILTERS:</p>
          <div className="space-y-1">
            {filters.region && (
              <div className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full inline-block">
                Region: {regions.find(r => r.value === filters.region)?.label}
              </div>
            )}
            {filters.duration && (
              <div className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full inline-block">
                Duration: {durations.find(d => d.value === filters.duration)?.label}
              </div>
            )}
            {filters.priceRange && (
              <div className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full inline-block">
                Price: {priceRanges.find(p => p.value === filters.priceRange)?.label}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
