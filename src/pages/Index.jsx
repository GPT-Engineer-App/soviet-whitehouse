import { useState } from 'react';
import { Hammer, Star, Users, Calendar, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => (
  <header className="bg-red-700 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <Hammer className="mr-2" />
        <h1 className="text-2xl font-bold">People's White House</h1>
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-yellow-300">Home</a>
        <a href="#" className="hover:text-yellow-300">The Administration</a>
        <a href="#" className="hover:text-yellow-300">The People's Priorities</a>
        <a href="#" className="hover:text-yellow-300">Participate</a>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>The Administration</DropdownMenuItem>
          <DropdownMenuItem>The People's Priorities</DropdownMenuItem>
          <DropdownMenuItem>Participate</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="bg-red-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to the People's White House</h2>
      <p className="text-xl mb-8">United in our struggle for equality and justice</p>
      <Button className="bg-yellow-500 text-red-700 hover:bg-yellow-600">
        Join the Movement
      </Button>
    </div>
  </section>
);

const FeaturedContent = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-red-700">Latest from the People's Government</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Star className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Five-Year Plan Unveiled</h3>
          <p>Our latest economic plan promises prosperity for all workers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collective Farm Success</h3>
          <p>Record harvests reported across the nation's collective farms.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">May Day Celebration</h3>
          <p>Join us for the annual celebration of workers' solidarity.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-red-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 People's White House. All rights belong to the workers.</p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
