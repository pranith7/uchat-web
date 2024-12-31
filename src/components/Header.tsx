import React from 'react';
import { MessageSquare, DollarSign, PlayCircle, Chrome } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white/90 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Uchat
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How it Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition">Pricing</a>
        </nav>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
          Install Extension
        </button>
      </div>
    </header>
  );
}