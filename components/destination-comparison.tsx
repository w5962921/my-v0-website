'use client'

import { useState } from 'react'
import { X, Plus } from 'lucide-react'

interface ComparisonItem {
  id: number
  name: string
  region: string
  price: string
  duration: string
  rating: number
  highlights: string[]
}

interface DestinationComparisonProps {
  items: ComparisonItem[]
  onClose: () => void
}

export default function DestinationComparison({
  items,
  onClose,
}: DestinationComparisonProps) {
  const [selectedItems, setSelectedItems] = useState<ComparisonItem[]>(items.slice(0, 3))

  const addItem = (item: ComparisonItem) => {
    if (selectedItems.length < 3 && !selectedItems.find(i => i.id === item.id)) {
      setSelectedItems([...selectedItems, item])
    }
  }

  const removeItem = (itemId: number) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-end">
      <div className="w-full bg-white rounded-t-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            Compare Destinations ({selectedItems.length}/3)
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedItems.map(item => (
              <div
                key={item.id}
                className="border-2 border-amber-200 rounded-lg p-6 bg-gradient-to-br from-amber-50 to-white relative"
              >
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 p-1 hover:bg-red-100 rounded-lg transition text-red-600"
                >
                  <X size={20} />
                </button>

                {/* Destination Name */}
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-4">{item.region}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(item.rating)
                              ? 'text-amber-500'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <span className="font-bold text-gray-900">{item.rating}</span>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-500 mb-1">
                      Price
                    </p>
                    <p className="text-lg font-bold text-amber-600">{item.price}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-500 mb-1">
                      Duration
                    </p>
                    <p className="text-lg font-bold text-gray-900">{item.duration}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500 mb-3">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-amber-600 font-bold mt-0.5">
                          ✓
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Empty Slot or Add Button */}
            {selectedItems.length < 3 && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <Plus size={32} className="text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">Add another destination</p>
                <p className="text-xs text-gray-500 mt-1">
                  Compare up to 3 destinations
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition"
            >
              Done Comparing
            </button>
            <button className="flex-1 px-6 py-3 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition">
              Inquire About Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
