import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, User, Home, BookOpen, Trophy, BarChart3, MessageCircle, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/learn", label: "Learn", icon: BookOpen },
    { href: "/lab", label: "Energy Lab", icon: Leaf },
    { href: "/missions", label: "Missions", icon: Trophy },
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/chat", label: "Ask Sparky", icon: MessageCircle },
    { href: "/profile", label: "Profile", icon: Settings },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b-2 border-primary/10 shadow-gentle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors duration-300 float-animation" />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:bg-primary-glow/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-gradient-hero">GreenSpark</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-playful"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Alex
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/10 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-playful"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-primary/10">
                <Button variant="outline" className="w-full gap-2">
                  <User className="h-4 w-4" />
                  Alex's Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;