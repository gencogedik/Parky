import React from 'react';
import { useState } from 'react';
import { Leaf, Wifi, Shield } from 'lucide-react';
import MapView from '@/components/MapView';
import SearchBar from '@/components/SearchBar';
import ActionButtons from '@/components/ActionButtons';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateParking = () => {
    setIsLoading(true);
    // Simulate navigation to create parking form
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Create Parking Lot",
        description: "This feature will guide you through adding a new parking space.",
      });
    }, 1000);
  };

  const handleFindParking = () => {
    setIsLoading(true);
    // Simulate finding parking spaces
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Finding Available Spaces",
        description: "Tap the map to explore parking options in your area.",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-8 pb-4 px-6">
        <div className="flex items-center justify-between mb-6 animate-fade-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-eco-green rounded-lg 
                flex items-center justify-center">
                <Leaf className="text-white" size={18} />
              </div>
              ParkPal Green
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Eco-friendly parking solutions</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-success-light/30 px-3 py-1.5 rounded-full">
              <Wifi size={12} className="text-success" />
              <span className="text-xs font-medium text-success">Live</span>
            </div>
            
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-eco-green rounded-full 
              flex items-center justify-center shadow-soft">
              <Shield className="text-white" size={18} />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
          <SearchBar />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-8 space-y-6">
        {/* Map Section */}
        <section className="animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Available Parking</h2>
            <div className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full border">
              Updated 2 min ago
            </div>
          </div>
          <MapView />
        </section>

        {/* Action Buttons Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 animate-fade-up" style={{ animationDelay: '180ms' }}>
            Quick Actions
          </h2>
          <ActionButtons 
            onCreateParking={handleCreateParking}
            onFindParking={handleFindParking}
          />
        </section>

        {/* Features Section */}
        <section className="mt-8 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <div className="bg-gradient-to-br from-primary/5 to-eco-green/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Leaf size={20} className="text-primary" />
              Why Choose ParkPal Green?
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Real-time Availability</div>
                  <div className="text-xs text-muted-foreground">
                    Live updates on parking space availability
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Eco-Friendly Focus</div>
                  <div className="text-xs text-muted-foreground">
                    Promoting sustainable urban mobility
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Community Driven</div>
                  <div className="text-xs text-muted-foreground">
                    Share and discover parking with neighbors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 
          flex items-center justify-center animate-fade-up">
          <div className="bg-card rounded-2xl p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent 
                rounded-full animate-spin" />
              <span className="font-medium">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;