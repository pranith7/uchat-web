import React from 'react';
import { Chrome } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Supercharge Your Streams
          <br />
          With Uchat Events
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Enhance your streaming experience with real-time chat, seamless payments, and interactive events - all in one browser extension.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
            <Chrome className="w-5 h-5" />
            Add to Chrome
          </button>
          <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}