import { Home, Users, Star, HandMetal } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "The Administration",
    to: "/administration",
    icon: <Users className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual page component when created
  },
  {
    title: "The People's Priorities",
    to: "/priorities",
    icon: <Star className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual page component when created
  },
  {
    title: "Participate",
    to: "/participate",
    icon: <HandMetal className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual page component when created
  },
];
