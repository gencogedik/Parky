import React from 'react';
import { Plus, Search, ChevronRight, Zap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActionButtonsProps {
  onCreateParking: () => void;
  onFindParking: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onCreateParking, onFindParking }) => {
  return (
    <div className="space-y-4 w-full">
      {/* Find Parking Space Button */}
      <Button
        onClick={onFindParking}
        className="w-full h-16 bg-gradient-to-r from-primary to-eco-green 
          hover:from-primary-dark hover:to-eco-dark text-primary-foreground
          rounded-2xl shadow-elevated hover:shadow-soft transition-all duration-300
          group animate-fade-up"
        style={{ animationDelay: '200ms' }}
      >
        <div className="flex items-center justify-between w-full px-2">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 
              transition-colors duration-300">
              <Search size={24} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Park Yeri Bul</div>
              <div className="text-sm opacity-90">Yakındaki uygun alanları keşfet</div>
            </div>
          </div>
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </Button>

      {/* Create Parking Lot Button */}
      <Button
        onClick={onCreateParking}
        variant="outline"
        className="w-full h-16 border-2 border-primary bg-background hover:bg-primary/5
          rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300
          group animate-fade-up"
        style={{ animationDelay: '300ms' }}
      >
        <div className="flex items-center justify-between w-full px-2">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 
              transition-colors duration-300">
              <Plus size={24} className="text-primary" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg text-foreground">Park Alanı Oluştur</div>
              <div className="text-sm text-muted-foreground">Alanınızı başkalarıyla paylaşın</div>
            </div>
          </div>
          <ChevronRight size={24} className="text-primary group-hover:translate-x-1 
            transition-transform duration-300" />
        </div>
      </Button>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
        <div className="bg-success-light/50 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Zap size={20} className="text-success" />
          </div>
          <div className="font-bold text-lg text-success">28</div>
          <div className="text-xs text-success/70">Şimdi Uygun</div>
        </div>
        
        <div className="bg-primary/10 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <MapPin size={20} className="text-primary" />
          </div>
          <div className="font-bold text-lg text-primary">12</div>
          <div className="text-xs text-primary/70">Yakındaki Alanlar</div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;