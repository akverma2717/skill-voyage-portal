import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Users, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X,
  GraduationCap,
  User,
  FileText,
  Award,
  BarChart3,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const studentMenuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
  { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
  { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
  { icon: Award, label: "Grades", href: "/dashboard/grades" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
];

const facultyMenuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
  { icon: Users, label: "Students", href: "/dashboard/students" },
  { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
  { icon: FileText, label: "Assignments", href: "/dashboard/assignments" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
];

export default function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { profile, signOut } = useAuth();
  const location = useLocation();

  const menuItems = profile?.role === 'faculty' ? facultyMenuItems : studentMenuItems;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className={cn(
      "bg-card border-r transition-all duration-300 flex flex-col h-screen",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-sm gradient-text">EduSangrah</h2>
              <p className="text-xs text-muted-foreground capitalize">{profile?.role} Portal</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-accent"
        >
          {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>

      {/* User Info */}
      {!isCollapsed && (
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {profile?.full_name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{profile?.full_name}</p>
              <p className="text-xs text-muted-foreground truncate">{profile?.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive && "bg-accent text-accent-foreground font-medium",
                    isCollapsed && "justify-center"
                  )}
                >
                  <item.icon className={cn("w-4 h-4", !isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>{item.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings & Logout */}
      <div className="p-2 border-t">
        <NavLink
          to="/dashboard/settings"
          className={cn(
            "flex items-center rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground mb-1",
            location.pathname === "/dashboard/settings" && "bg-accent text-accent-foreground font-medium",
            isCollapsed && "justify-center"
          )}
        >
          <Settings className={cn("w-4 h-4", !isCollapsed && "mr-3")} />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>
        
        <Button
          variant="ghost"
          onClick={handleSignOut}
          className={cn(
            "w-full justify-start text-sm hover:bg-destructive hover:text-destructive-foreground",
            isCollapsed && "justify-center px-2"
          )}
        >
          <LogOut className={cn("w-4 h-4", !isCollapsed && "mr-3")} />
          {!isCollapsed && <span>Sign Out</span>}
        </Button>
      </div>
    </div>
  );
}