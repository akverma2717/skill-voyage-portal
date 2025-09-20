import { Button } from "@/components/ui/button";
import { GraduationCap, User, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 slide-in-left">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">EduSangrah</h1>
              <p className="text-xs text-muted-foreground">Government of Jammu and Kashmir</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Role-based Registration Buttons */}
          <div className="flex items-center space-x-3 slide-in-right">
            <Link to="/register?role=student">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="w-4 h-4 mr-2" />
                Student
              </Button>
            </Link>
            <Link to="/register?role=faculty">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Users className="w-4 h-4 mr-2" />
                Faculty
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm" className="bg-gradient-primary hover:scale-105 transition-transform">
                <Settings className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;