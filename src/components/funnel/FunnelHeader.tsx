import { Search, Bell, ShoppingCart, MoreHorizontal } from "lucide-react";
import logo from "@/assets/logo.png";
export const FunnelHeader = () => {
  return <header className="py-3 px-4 bg-background border-b border-border/50 sticky top-0 z-10">
      <div className="container max-w-md mx-auto flex items-center justify-between">
        <img alt="GGMAX Logo" className="h-8 object-contain" src="/lovable-uploads/561ce6f0-6168-40af-ac9f-d3d2bf17c6d4.png" />
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-primary" />
          <Bell className="w-5 h-5 text-primary" />
          <ShoppingCart className="w-5 h-5 text-primary" />
          <MoreHorizontal className="w-5 h-5 text-primary" />
        </div>
      </div>
    </header>;
};