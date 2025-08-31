import React, { useState } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const recentSearches = [
    'Merkez AVM',
    'Şehir Merkezi',
    'Park Caddesi',
  ];

  const popularAreas = [
    { name: 'İş Merkezi', distance: '0.8 km' },
    { name: 'Alışveriş Merkezi', distance: '1.9 km' },
    { name: 'Üniversite Kampüsü', distance: '3.4 km' },
  ];

  return (
    <div className="relative w-full">
      {/* Main Search Input */}
      <div className={`
        relative flex items-center bg-card border-2 rounded-2xl shadow-soft
        transition-all duration-300 ${isFocused ? 'border-primary shadow-elevated' : 'border-border'}
      `}>
        <Search className="ml-4 text-muted-foreground" size={20} />
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder="Park alanlarında ara..."
          className="border-0 bg-transparent text-base placeholder:text-muted-foreground
            focus-visible:ring-0 focus-visible:ring-offset-0 px-4 py-6"
        />
        {searchValue && (
          <button 
            onClick={() => setSearchValue('')}
            className="mr-4 p-1 hover:bg-muted rounded-full transition-colors"
          >
            <span className="text-muted-foreground text-lg">×</span>
          </button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border 
          rounded-2xl shadow-elevated z-50 animate-fade-up">
          
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Son aramalar</span>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchValue(search);
                      setIsFocused(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-muted rounded-lg 
                      transition-colors text-sm flex items-center gap-3"
                  >
                    <Search size={14} className="text-muted-foreground" />
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Areas */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Yakındaki popüler</span>
            </div>
            <div className="space-y-2">
              {popularAreas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchValue(area.name);
                    setIsFocused(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-muted rounded-lg 
                    transition-colors text-sm flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {area.name}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground 
                    transition-colors">
                    {area.distance}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;